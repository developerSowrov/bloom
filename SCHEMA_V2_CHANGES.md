# Schema v2 - Changes Summary

## Version Information
- **Version:** 2.0.0
- **File:** `src/validation/schema-v2.json`
- **Status:** ✅ Valid JSON, Production Ready
- **Breaking Changes:** Yes (migration guide below)

---

## Major Improvements

### 1. ✅ Added Schema Metadata
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://apidoxyllc.com/schemas/theme-config.schema.json",
  "title": "Theme Configuration Schema",
  "description": "Schema for SaaS e-commerce theme customization",
  "version": "2.0.0",
  "type": "object",
  "required": ["header", "footer"],
  "additionalProperties": false
}
```

### 2. ✅ Added `required` Fields Throughout
Every object now explicitly defines which properties are required:
- Header: `["enabled", "propertyOrder", "items"]`
- Hero: `["enabled"]`
- Footer: `["enabled", "propertyOrder", "items"]`
- Logo: `["url"]`
- Navigation items: `["sequence", "title", "url"]`
- Buttons: `["label", "url"]`
- And many more...

### 3. ✅ Fixed Nullable + Default Contradictions
**Before (v1):**
```json
"enabled": { 
  "type": "boolean", 
  "nullable": false,  // ← Contradiction
  "default": true 
}
```

**After (v2):**
```json
"enabled": { 
  "type": "boolean", 
  "default": true,
  "description": "Enable or disable the section"
}
```

### 4. 🔒 Added Security: URL Protocol Validation
**Before:** Any string accepted, including `javascript:alert('XSS')`

**After:**
```json
"url": {
  "pattern": "^(https?://|/|#)",  // Only http(s), relative, or anchors
  "description": "URL must use http(s) protocol or be relative/anchor"
}
```

Video URLs also validate file extension:
```json
"url": {
  "pattern": "^(https?://|/).*\\.(mp4|webm|ogg)$"
}
```

### 5. ✅ Simplified Color Validation
**Before:** 500+ character regex

**After:** Clean `oneOf` approach:
```json
"color": {
  "oneOf": [
    { "pattern": "^#[0-9a-fA-F]{3}$" },      // 3-digit hex
    { "pattern": "^#[0-9a-fA-F]{6}$" },      // 6-digit hex
    { "pattern": "^#[0-9a-fA-F]{8}$" },      // 8-digit hex with alpha
    { "pattern": "^rgb\\(..." },              // RGB
    { "pattern": "^rgba\\(..." },             // RGBA
    { "enum": ["black", "white", ...] }       // Named colors (14 keywords)
  ]
}
```

### 6. ✅ Added `uniqueItems` Validation
```json
"propertyOrder": {
  "uniqueItems": true  // Prevents duplicate items
}
```

### 7. ✅ Relaxed String Minimums
More realistic minimum lengths for optional fields:
- Hero subtitle: `10` → `5` characters
- Hero description: `50` → `10` characters
- Footer description: `20` → `10` characters
- Column links label: `3` → `2` characters

### 8. ✅ Added Comprehensive Descriptions
Every field now has a `description` property explaining its purpose and usage.

### 9. ✅ Changed `number` to `integer` for Sequence
```json
"sequence": {
  "type": "integer",  // Was "number"
  "minimum": 1,
  "maximum": 5
}
```

### 10. ✅ Added `additionalProperties: false`
Prevents unknown properties from being added (strict validation).

### 11. ✅ Increased Social Links Limit
Changed from 5 to 10 platforms (more realistic).

### 12. ✅ Reduced Column Links Limit
Changed from 20 to 15 (more manageable).

---

## Breaking Changes

### 1. Required Fields Now Enforced
**Impact:** Existing configs missing required fields will fail validation.

**Migration:**
```javascript
// Before (all optional):
{
  "header": {
    "items": {}  // Empty is valid
  }
}

// After (requires logo):
{
  "header": {
    "enabled": true,
    "propertyOrder": ["logo"],
    "items": {
      "logo": {
        "url": "/images/logo.png"  // Required
      }
    }
  }
}
```

### 2. URL Protocol Validation
**Impact:** URLs with `javascript:`, `data:`, or other protocols will fail.

**Migration:**
```javascript
// Before (allowed):
{ "url": "javascript:alert('xss')" }

// After (blocked):
{ "url": "/secure-page" }  // Use relative or https
```

### 3. Additional Properties Blocked
**Impact:** Custom properties not in schema will cause validation errors.

**Migration:**
```javascript
// Before (allowed):
{
  "header": {
    "customProp": "value"  // Not in schema
  }
}

// After (rejected):
// Remove all properties not defined in schema
```

### 4. Nullable Removed
**Impact:** Cannot pass `null` for fields anymore (use absence instead).

**Migration:**
```javascript
// Before (allowed):
{ "alt": null }

// After (omit field):
{ /* no alt property */ }
```

---

## Migration Guide

### Step 1: Validate Existing Config
```bash
npm install ajv ajv-cli
npx ajv validate -s src/validation/schema-v2.json -d your-config.json
```

### Step 2: Fix Validation Errors

**Common fixes:**

#### Missing Required Fields
```json
// Add required fields:
{
  "header": {
    "enabled": true,           // ← Add
    "propertyOrder": [...],    // ← Add
    "items": { ... }
  }
}
```

#### Invalid URLs
```json
// Replace invalid protocols:
- "url": "javascript:void(0)"
+ "url": "#"
```

#### Remove Extra Properties
```json
// Remove any custom properties not in schema
- "customField": "value"
```

#### Replace Null Values
```json
// Change nulls to field absence:
- "alt": null
+ // omit field entirely
```

### Step 3: Test Thoroughly
- Test with minimal valid config
- Test with full config
- Test edge cases (empty arrays, max limits)

---

## Validation Examples

### ✅ Minimal Valid Config
```json
{
  "header": {
    "enabled": true,
    "propertyOrder": ["logo"],
    "items": {
      "logo": {
        "url": "/logo.png"
      }
    }
  },
  "footer": {
    "enabled": true,
    "propertyOrder": ["brand", "columns", "legal"],
    "items": {
      "brand": {
        "logo": {
          "url": "/logo.png"
        }
      },
      "columns": [{
        "title": "Company"
      }],
      "legal": {
        "copyright": "© 2025"
      }
    }
  }
}
```

### ✅ Full Example with Hero
```json
{
  "header": { /* ... */ },
  "hero": {
    "enabled": true,
    "layout": "full-width",
    "alignment": "center",
    "background": {
      "type": "image",
      "image": {
        "url": "https://example.com/hero.jpg",
        "alt": "Hero background"
      },
      "overlay": {
        "enabled": true,
        "opacity": 0.5,
        "color": "#000000"
      }
    },
    "items": {
      "title": "Welcome to Our Store",
      "subtitle": "Best deals online",
      "description": "Shop the latest products at unbeatable prices",
      "buttons": [
        {
          "label": "Shop Now",
          "url": "/products",
          "variant": "primary"
        },
        {
          "label": "Learn More",
          "url": "/about",
          "variant": "outline"
        }
      ]
    }
  },
  "footer": { /* ... */ }
}
```

### ❌ Invalid Examples

#### Missing Required Field
```json
{
  "header": {
    "enabled": true,
    // Missing: "propertyOrder"
    "items": { ... }
  }
}
// Error: required property 'propertyOrder' missing
```

#### Invalid URL Protocol
```json
{
  "logo": {
    "url": "javascript:alert(1)"
  }
}
// Error: url must match pattern ^(https?://|/)
```

#### Additional Property
```json
{
  "header": {
    "enabled": true,
    "customField": "value"  // ← Not in schema
  }
}
// Error: additionalProperties not allowed
```

---

## Usage with Ajv

### Installation
```bash
npm install ajv ajv-formats
```

### Validation Code
```javascript
const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('./src/validation/schema-v2.json');

const ajv = new Ajv({ 
  allErrors: true,
  strict: true
});
addFormats(ajv);

const validate = ajv.compile(schema);

// Validate config
const config = { /* your theme config */ };
const valid = validate(config);

if (!valid) {
  console.error('Validation errors:');
  console.error(JSON.stringify(validate.errors, null, 2));
} else {
  console.log('✅ Config is valid!');
}
```

### CLI Validation
```bash
# Validate a config file
npx ajv validate -s src/validation/schema-v2.json -d config.json

# Output errors in JSON format
npx ajv validate -s src/validation/schema-v2.json -d config.json --errors=json
```

---

## TypeScript Types Generation

### Generate Types
```bash
npm install -D json-schema-to-typescript
npx json2ts -i src/validation/schema-v2.json -o src/types/theme-config.ts
```

### Usage in TypeScript
```typescript
import { ThemeConfiguration } from './types/theme-config';

const config: ThemeConfiguration = {
  header: {
    enabled: true,
    propertyOrder: ['logo'],
    items: {
      logo: {
        url: '/logo.png'
      }
    }
  },
  footer: { /* ... */ }
};
```

---

## Comparison: v1 vs v2

| Feature | v1 | v2 |
|---------|----|----|
| Schema metadata | ❌ Missing | ✅ Complete |
| Required fields | ❌ None | ✅ All defined |
| URL validation | ❌ Any string | ✅ Protocol checked |
| Color validation | ⚠️ Complex regex | ✅ Clean oneOf |
| Descriptions | ❌ Missing | ✅ All fields |
| additionalProperties | ⚠️ Allowed | ✅ Blocked |
| uniqueItems | ❌ Not set | ✅ Enabled |
| Nullable handling | ⚠️ Contradictory | ✅ Consistent |
| String minimums | ⚠️ Too strict | ✅ Realistic |
| Social links limit | 5 | 10 |
| Security | ❌ No XSS protection | ✅ URL validated |

---

## Recommendations

### For New Projects
✅ Use `schema-v2.json` directly

### For Existing Projects
1. Keep `schema.json` (v1) for backwards compatibility
2. Add `schema-v2.json` as opt-in
3. Provide migration period (e.g., 3 months)
4. Create migration script (see below)

### Migration Script
```javascript
// migrate-v1-to-v2.js
function migrateConfig(v1Config) {
  const v2Config = JSON.parse(JSON.stringify(v1Config));
  
  // Add missing required fields with defaults
  if (!v2Config.header.enabled) v2Config.header.enabled = true;
  if (!v2Config.header.propertyOrder) {
    v2Config.header.propertyOrder = ['logo', 'navigations', 'searchbar', 'commerce'];
  }
  
  // Remove null values
  function removeNulls(obj) {
    for (let key in obj) {
      if (obj[key] === null) {
        delete obj[key];
      } else if (typeof obj[key] === 'object') {
        removeNulls(obj[key]);
      }
    }
  }
  removeNulls(v2Config);
  
  // Validate URLs (warn about invalid)
  function checkUrls(obj) {
    for (let key in obj) {
      if (key === 'url' && typeof obj[key] === 'string') {
        if (obj[key].startsWith('javascript:')) {
          console.warn(`⚠️  Invalid URL found: ${obj[key]}`);
          obj[key] = '#'; // Replace with safe default
        }
      } else if (typeof obj[key] === 'object') {
        checkUrls(obj[key]);
      }
    }
  }
  checkUrls(v2Config);
  
  return v2Config;
}

// Usage
const fs = require('fs');
const v1 = JSON.parse(fs.readFileSync('config-v1.json'));
const v2 = migrateConfig(v1);
fs.writeFileSync('config-v2.json', JSON.stringify(v2, null, 2));
console.log('✅ Migration complete!');
```

---

## Support

For questions or issues:
1. Check `SCHEMA_ANALYSIS_REPORT.md` for detailed explanations
2. Review validation error messages (they include descriptions)
3. Test with minimal valid example first
4. Gradually add complexity

**Schema version:** 2.0.0  
**Last updated:** November 23, 2025
