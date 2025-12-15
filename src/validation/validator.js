/**
 * Validates data against the schema defined in schema.json
 * @param {Object} data - The data to validate
 * @param {Object} schema - The schema to validate against
 * @param {string} path - Current path for error messages
 * @returns {Object} - { isValid: boolean, errors: string[] }
 */
function validateData(data, schema, path = 'root') {
  const errors = [];

  // Helper function to validate individual fields
  function validateField(value, fieldSchema, fieldPath) {
    // Check nullable
    if (value === null || value === undefined) {
      if (fieldSchema.nullable === false) {
        errors.push(`${fieldPath}: Field is required and cannot be null/undefined`);
      }
      return;
    }

    // Type validation
    if (fieldSchema.type) {
      const actualType = Array.isArray(value) ? 'array' : typeof value;
      const expectedType = fieldSchema.type;

      if (expectedType === 'section') {
        // Section is treated as object
        if (actualType !== 'object') {
          errors.push(`${fieldPath}: Expected type 'object' but got '${actualType}'`);
        }
      } else if (actualType !== expectedType) {
        errors.push(`${fieldPath}: Expected type '${expectedType}' but got '${actualType}'`);
        return;
      }
    }

    // String validations
    if (fieldSchema.type === 'string' && typeof value === 'string') {
      // MinLength validation
      if (fieldSchema.minLength !== undefined && value.length < fieldSchema.minLength) {
        errors.push(`${fieldPath}: String length ${value.length} is less than minimum ${fieldSchema.minLength}`);
      }

      // MaxLength validation
      if (fieldSchema.maxLength !== undefined && value.length > fieldSchema.maxLength) {
        errors.push(`${fieldPath}: String length ${value.length} exceeds maximum ${fieldSchema.maxLength}`);
      }

      // Enum validation
      if (fieldSchema.enum && !fieldSchema.enum.includes(value)) {
        errors.push(`${fieldPath}: Value '${value}' is not in allowed enum values [${fieldSchema.enum.join(', ')}]`);
      }

      // Format validation (URI)
      if (fieldSchema.format === 'uri') {
        try {
          new URL(value);
        } catch (e) {
          errors.push(`${fieldPath}: Invalid URI format`);
        }
      }

      // Pattern validation
      if (fieldSchema.pattern) {
        const regex = new RegExp(fieldSchema.pattern);
        if (!regex.test(value)) {
          errors.push(`${fieldPath}: Value does not match required pattern`);
        }
      }
    }

    // Number validations
    if (fieldSchema.type === 'number' && typeof value === 'number') {
      if (fieldSchema.minimum !== undefined && value < fieldSchema.minimum) {
        errors.push(`${fieldPath}: Value ${value} is less than minimum ${fieldSchema.minimum}`);
      }
      if (fieldSchema.maximum !== undefined && value > fieldSchema.maximum) {
        errors.push(`${fieldPath}: Value ${value} exceeds maximum ${fieldSchema.maximum}`);
      }
    }

    // Array validations
    if (fieldSchema.type === 'array' && Array.isArray(value)) {
      // MinItems validation
      if (fieldSchema.minItems !== undefined && value.length < fieldSchema.minItems) {
        errors.push(`${fieldPath}: Array length ${value.length} is less than minimum ${fieldSchema.minItems}`);
      }

      // MaxItems validation
      if (fieldSchema.maxItems !== undefined && value.length > fieldSchema.maxItems) {
        errors.push(`${fieldPath}: Array length ${value.length} exceeds maximum ${fieldSchema.maxItems}`);
      }

      // Validate array items
      if (fieldSchema.items) {
        value.forEach((item, index) => {
          if (fieldSchema.items.type === 'object' && fieldSchema.items.properties) {
            validateObject(item, fieldSchema.items.properties, `${fieldPath}[${index}]`);
          } else {
            validateField(item, fieldSchema.items, `${fieldPath}[${index}]`);
          }
        });
      }
    }

    // Object validations
    if (fieldSchema.type === 'object' && typeof value === 'object' && !Array.isArray(value)) {
      if (fieldSchema.properties) {
        validateObject(value, fieldSchema.properties, fieldPath);
      }
    }

    // Section validations (treated as object)
    if (fieldSchema.type === 'section' && typeof value === 'object' && !Array.isArray(value)) {
      if (fieldSchema.properties) {
        validateObject(value, fieldSchema.properties, fieldPath);
      }
    }
  }

  // Helper function to validate objects
  function validateObject(obj, properties, objPath) {
    if (!obj || typeof obj !== 'object') return;

    for (const [key, propSchema] of Object.entries(properties)) {
      const propPath = `${objPath}.${key}`;
      const value = obj[key];
      validateField(value, propSchema, propPath);
    }
  }

  // Start validation
  validateObject(data, schema, path);

  return {
    isValid: errors.length === 0,
    errors: errors
  };
}

/**
 * Validates theme configuration data
 * @param {Object} themeData - The theme configuration data
 * @param {Object} schema - The schema from schema.json
 * @returns {Object} - { isValid: boolean, errors: string[] }
 */
function validateThemeConfig(themeData, schema) {
  return validateData(themeData, schema);
}

// Export for use in Node.js or browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { validateData, validateThemeConfig };
}