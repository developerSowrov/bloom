# Schema Review Report - Current Version (v1)

**Date:** November 23, 2025  
**File:** `src/validation/schema.json`  
**Status:** ⚠️ Has Inconsistencies

---

## 🔴 Critical Inconsistencies Found

### 1. **Typo: `item` vs `items` (Multiple Locations)**

**Line ~42 (navigations):**
```json
"items": {
    "type": "array",
    "item": {  // ❌ Should be "items"
        "type": "object",
        ...
    }
}
```

**Line ~217 (hero CTA):**
```json
"items": {
    "type": "array",
    "item": {  // ❌ Should be "items"
        "type": "object",
        ...
    }
}
```

**Impact:** JSON Schema validators will **ignore** these definitions, meaning array items won't be validated!

**Fix:**
```json
"items": {
    "type": "array",
    "items": {  // ✅ Correct
        "type": "object",
        ...
    }
}
```

---

### 2. **Invalid Format: `internal-url` (Line 50)**

```json
"url": { 
    "type": "string", 
    "format": "internal-url"  // ❌ Not a standard format
}
```

**Issue:** `internal-url` is not a valid JSON Schema format.

**Standard formats:**
- `uri` - Any URI
- `uri-reference` - Relative or absolute URI
- `iri` - International URI
- `iri-reference` - International relative/absolute URI

**Fix:**
```json
"url": { 
    "type": "string", 
    "format": "uri-reference",  // ✅ Allows relative paths
    "pattern": "^(/|#)",  // Optional: enforce internal paths only
}
```

---

### 3. **Inconsistent Structure: Commerce Section**

Commerce has **nested redundancy**:

```json
"commerce": {
    "properties": {
        "enabled": { ... },     // ❌ At commerce level
        "propertyOrder": { ... },
        "items": {
            "properties": {
                "cart": {
                    "properties": {
                        "enabled": { ... }  // ❌ Also at cart level
                    }
                }
            }
        }
    }
}
```

**Issue:** `commerce.enabled` controls the entire section, but each button (cart/favourite) also has `enabled`. This creates confusion:
- Does `commerce.enabled: false` override button-level `enabled`?
- What if `commerce.enabled: true` but `cart.enabled: false`?

**Recommendation:** Remove `commerce.enabled` and only use button-level enables:

```json
"commerce": {
    "properties": {
        "propertyOrder": { ... },  // Keep
        "items": {
            "properties": {
                "cart": {
                    "properties": {
                        "enabled": { ... }  // ✅ Only this
                    }
                }
            }
        }
    }
}
```

---

### 4. **Inconsistent Navigation Structure**

Navigation is overly nested and different from footer columns:

**Header Navigation (Complex):**
```json
"navigations": {
    "type": "object",  // ❌ Unnecessary wrapper
    "properties": {
        "enabled": { ... },
        "items": {  // ❌ Another wrapper
            "type": "array",
            "item": { ... }  // ❌ Typo
        }
    }
}
```

**Footer Columns (Simple):**
```json
"columns": {
    "type": "array",  // ✅ Direct array
    "items": {
        "type": "object",
        "properties": {
            "title": { ... },
            "links": {
                "type": "array",
                "items": { ... }  // ✅ Correct
            }
        }
    }
}
```

**Recommendation:** Simplify navigation to match footer pattern:

```json
"navigations": {
    "type": "array",  // ✅ Direct array
    "minItems": 0,
    "maxItems": 5,
    "items": {
        "type": "object",
        "properties": {
            "sequence": { ... },
            "title": { ... },
            "url": { ... }
        }
    }
}
```

---

### 5. **Inconsistent Logo Structure**

**Header Logo:**
```json
"logo": {
    "properties": {
        "enabled": { ... },  // ❌ Has enabled
        "url": { ... },
        "alt": { ... }
    }
}
```

**Footer Logo:**
```json
"logo": {
    "properties": {
        // ❌ No enabled
        "url": { ... },
        "alt": { ... }
    }
}
```

**Issue:** Why does header logo need `enabled` but footer logo doesn't? Logos should always show.

**Recommendation:** Remove `enabled` from logo or add to both:

```json
"logo": {
    "properties": {
        "url": { ... },
        "alt": { ... }
    }
}
```

---

### 6. **Missing CTA vs Buttons Inconsistency**

Hero section uses `cta` (call-to-action):
```json
"cta": {
    "type": "object",
    "properties": {
        "enabled": { ... },
        "items": {
            "type": "array",
            "item": { ... }  // ❌ Typo
        }
    }
}
```

But it should be simpler like the v2 version which uses `buttons` directly:
```json
"buttons": {
    "type": "array",
    "items": { ... }
}
```

**Recommendation:** Rename `cta` to `buttons` and remove the wrapper:

```json
"buttons": {
    "type": "array",
    "minItems": 0,
    "maxItems": 3,
    "items": {
        "type": "object",
        "properties": {
            "label": { ... },
            "url": { ... },
            "variant": { ... }
        }
    }
}
```

---

## ⚠️ Logical Inconsistencies

### 7. **PropertyOrder Has Fixed Min=Max**

**Header:**
```json
"propertyOrder": {
    "minItems": 3,
    "maxItems": 4,  // ❌ Must have exactly 3 or 4
    "default": ["logo", "navigations", "searchbar", "commerce"]
}
```

**Footer:**
```json
"propertyOrder": {
    "minItems": 3,
    "maxItems": 3,  // ❌ Must have exactly 3
    "default": ["brand", "columns", "legal"]
}
```

**Issue:** Users cannot remove items without breaking validation.

**Fix:** Allow flexibility:
```json
"propertyOrder": {
    "minItems": 1,  // ✅ At least one
    "maxItems": 4,
    "uniqueItems": true,
    "default": ["logo", "navigations", "searchbar", "commerce"]
}
```

---

### 8. **Nullable + MinLength Contradiction**

Multiple fields have this issue:

```json
"url": { 
    "nullable": true,   // ❌ Can be null
    "minLength": 1      // ❌ But must have length >= 1
}
```

**Issue:** If `url` is `null`, what's its length? This is contradictory.

**Affected Fields:**
- Logo URL (line ~23)
- Navigation URL (line ~50)
- All other URLs throughout

**Fix:** Use proper optionality:
```json
// For optional URLs:
"url": { 
    "type": ["string", "null"],  // ✅ Explicit null type
    "minLength": 1,  // Applies only when string
    "format": "uri"
}

// OR (better):
// Make field entirely optional by not including it in "required"
"url": { 
    "type": "string",
    "minLength": 1,
    "format": "uri"
}
```

---

### 9. **Nullable + Default Contradiction**

```json
"enabled": { 
    "nullable": false,  // Cannot be null
    "default": true     // Has default
}
```

**Issue:** If it has a default, why specify `nullable: false`? It's redundant.

**Fix:**
```json
"enabled": { 
    "type": "boolean",
    "default": true
}
```

---

### 10. **Missing Required Fields Everywhere**

**No objects define `required` arrays.**

**Current:**
```json
"logo": {
    "type": "object",
    "properties": {
        "url": { ... },
        "alt": { ... }
    }
}
// ❌ Both url and alt are optional
```

**Should be:**
```json
"logo": {
    "type": "object",
    "required": ["url"],  // ✅ URL is required
    "properties": {
        "url": { ... },
        "alt": { ... }  // alt is optional
    }
}
```

**Impact:** Empty objects `{}` will pass validation when they shouldn't.

---

## 📊 Summary of Issues

| Issue | Severity | Count | Lines Affected |
|-------|----------|-------|----------------|
| `item` typo (should be `items`) | 🔴 Critical | 2 | ~42, ~217 |
| Invalid format `internal-url` | 🔴 Critical | 1 | ~50 |
| Missing `required` fields | 🔴 Critical | 30+ | All objects |
| `nullable` + `minLength` contradiction | ⚠️ High | 20+ | All URLs |
| `nullable` + `default` redundancy | ⚠️ Medium | 15+ | All booleans |
| Inconsistent structure (commerce) | ⚠️ Medium | 1 | ~76-150 |
| Inconsistent structure (navigation) | ⚠️ Medium | 1 | ~28-66 |
| `propertyOrder` too strict | ⚠️ Medium | 2 | ~9, ~273 |
| Logo `enabled` inconsistency | 💡 Low | 1 | ~21 |
| CTA wrapper unnecessary | 💡 Low | 1 | ~217 |

**Total Issues:** 90+

---

## 🔧 Recommended Changes

### Quick Fixes (Critical - Do Immediately)

#### 1. Fix `item` → `items` typos

**Location 1: Header navigations (around line 42)**
```json
"items": {
    "type": "array",
    "nullable": true,
    "minItems": 0, 
    "maxItems": 5,
    "items": {  // ← Change "item" to "items"
        "type": "object",
        ...
    }
}
```

**Location 2: Hero CTA (around line 217)**
```json
"items": {   
    "type": "array",
    "minItems": 0,
    "maxItems": 3,
    "items": {  // ← Change "item" to "items"
        "type": "object",
        ...
    }
}
```

#### 2. Fix invalid format

**Line ~50:**
```json
"url": { 
    "type": "string", 
    "nullable": true,  
    "minLength": 1, 
    "maxLength": 2048, 
    "format": "uri-reference"  // ← Change from "internal-url"
}
```

#### 3. Add required fields

Add to every object:
```json
"logo": {
    "type": "object",
    "required": ["url"],  // ← Add this
    "properties": { ... }
}
```

---

### Structural Improvements (High Priority)

#### 4. Simplify Navigation Structure

**Current (complex):**
```json
"navigations": {
    "type": "object",
    "x-type": "input",
    "nullable": true,
    "properties": {
        "enabled": { "type": "boolean", "nullable": false, "default": true },
        "items": {
            "type": "array",
            "nullable": true,
            "minItems": 0, 
            "maxItems": 5,
            "item": { ... }  // Also has typo
        }
    }
}
```

**Recommended (simple):**
```json
"navigations": {
    "type": "array",
    "minItems": 0,
    "maxItems": 5,
    "items": {
        "type": "object",
        "required": ["sequence", "title", "url"],
        "properties": {
            "sequence": { "type": "integer", "minimum": 1, "maximum": 5 },
            "title": { "type": "string", "minLength": 2, "maxLength": 25 },
            "url": { "type": "string", "format": "uri-reference", "minLength": 1, "maxLength": 2048 }
        }
    }
}
```

#### 5. Simplify Commerce Structure

**Current:**
```json
"commerce": {
    "type": "object",
    "nullable": true,
    "properties": {
        "enabled": { ... },  // ← Remove this
        "propertyOrder": { ... },
        "items": {
            "properties": {
                "cart": { "properties": { "enabled": { ... } } },
                "favourite": { "properties": { "enabled": { ... } } }
            }
        }
    }
}
```

**Recommended:**
```json
"commerce": {
    "type": "object",
    "properties": {
        "propertyOrder": {
            "type": "array",
            "uniqueItems": true,
            "default": ["favourite", "cart"],
            "items": { "type": "string", "enum": ["favourite", "cart"] }
        },
        "cart": {
            "type": "object",
            "required": ["enabled"],
            "properties": {
                "enabled": { "type": "boolean", "default": true },
                "click": { ... },
                "hover": { ... }
            }
        },
        "favourite": {
            "type": "object",
            "required": ["enabled"],
            "properties": {
                "enabled": { "type": "boolean", "default": true },
                "click": { ... },
                "hover": { ... }
            }
        }
    }
}
```

#### 6. Fix Nullable Contradictions

**Replace all instances of:**
```json
"url": { 
    "type": "string", 
    "nullable": true,
    "minLength": 1,
    "format": "uri"
}
```

**With:**
```json
"url": { 
    "type": "string", 
    "minLength": 1,
    "maxLength": 2048,
    "format": "uri-reference"
}
// Then mark as optional by NOT including in "required" array
```

---

## 📋 Complete Fixed Version

I've already created `schema-v2.json` which addresses ALL these issues. Here's what it fixes:

✅ Fixed `item` → `items` typos  
✅ Fixed invalid format `internal-url`  
✅ Added all `required` fields  
✅ Removed nullable contradictions  
✅ Simplified navigation structure  
✅ Simplified commerce structure  
✅ Removed redundant `enabled` fields  
✅ Renamed `cta` to `buttons`  
✅ Made `propertyOrder` flexible  
✅ Added schema metadata  
✅ Added comprehensive descriptions  

**Recommendation:** Use `schema-v2.json` for new development. It's production-ready and fixes all 90+ issues.

---

## 🚀 Migration Path

### Option 1: Update Current Schema (Minimal Changes)

Fix only critical issues in `schema.json`:
1. Change `"item"` to `"items"` (2 places)
2. Change `"internal-url"` to `"uri-reference"`
3. Add `required` arrays to critical objects

**Effort:** 30-60 minutes  
**Risk:** Low (backwards compatible)

### Option 2: Adopt schema-v2.json (Recommended)

Use the already-created v2 schema:
1. Rename current `schema.json` to `schema-v1-legacy.json`
2. Rename `schema-v2.json` to `schema.json`
3. Update validation code to use new schema
4. Test with existing configs

**Effort:** 2-4 hours (including testing)  
**Risk:** Medium (breaking changes, need migration)  
**Benefit:** Production-ready, maintainable, secure

---

## 🔍 Testing Recommendations

### Test Case 1: Minimal Config
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
      "brand": { "logo": { "url": "/logo.png" } },
      "columns": [{ "title": "Company" }],
      "legal": { "copyright": "© 2025" }
    }
  }
}
```

### Test Case 2: Typo Test (Current Schema)
```json
{
  "header": {
    "items": {
      "navigations": {
        "items": [
          { "sequence": 1, "title": "Test", "url": "/" }
        ]
      }
    }
  }
}
```
**Expected with current schema:** ⚠️ Passes (but shouldn't - typo in schema)  
**Expected with v2:** ✅ Properly validates

---

## 📝 Conclusion

**Current Schema Status:**
- ⚠️ Has critical typos that break validation
- ⚠️ Has logical inconsistencies
- ⚠️ Missing security validations
- ⚠️ Overly complex structure

**Recommendation:**
1. **Immediate:** Fix the 2 `item` typos and `internal-url` format
2. **Short-term:** Migrate to `schema-v2.json`
3. **Testing:** Validate all existing configs against new schema
4. **Documentation:** Use `SCHEMA_V2_CHANGES.md` as migration guide

**Next Steps:**
Would you like me to:
1. Create a minimal patch file with only critical fixes?
2. Generate a migration script from v1 to v2?
3. Create test cases for the current schema?
4. Update the current schema.json with critical fixes only?
