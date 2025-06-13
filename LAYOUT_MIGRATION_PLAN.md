# 🚨 Layout Primitives Migration Plan

## **Current Problem**

We have **inconsistent usage** across the codebase:

- ✅ **Design System Layout Primitives** exist (`Stack`, `Inline`, `Box`, `Grid`)
- ❌ **50+ files** still import `Group` from `@mantine/core` 
- ❌ **15+ files** still import `SimpleGrid` from `@mantine/core`
- ❌ **30+ files** still import `Stack` from `@mantine/core`

This creates:
- 🎨 **Inconsistent spacing** (some use design tokens, some don't)
- 🔧 **Developer confusion** (which component to use?)
- 📏 **Design system violations** (bypassing design tokens)

## **Target State**

### **✅ Consistent Import Pattern:**
```tsx
// Layout & Spacing - ALWAYS use Design System
import { Stack, Inline, Box, Grid } from '@/components/DesignSystem';

// Specialized Components - Use Mantine when needed
import { Flex, Center, Container, Collapse } from '@mantine/core';
```

### **✅ Component Mapping:**
| Mantine Core | Design System | Purpose |
|--------------|---------------|---------|
| `Group` | `Inline` | Horizontal layout with spacing |
| `SimpleGrid` | `Grid` | Grid layout with spacing |
| `Stack` | `Stack` | Vertical layout with spacing |
| `Box` | `Box` | Generic container with design tokens |

## **Migration Strategy**

### **Phase 1: Automated Migration (Recommended)**

Use the migration script to automatically update imports and component usage:

```bash
# Dry run to see what would change
node scripts/migrate-layout-primitives.js --dry-run --verbose

# Apply the changes
node scripts/migrate-layout-primitives.js
```

**What the script does:**
- ✅ Replaces `Group` imports with `Inline`
- ✅ Replaces `SimpleGrid` imports with `Grid`
- ✅ Updates component usage: `<Group>` → `<Inline>`
- ✅ Updates component usage: `<SimpleGrid>` → `<Grid>`
- ✅ Preserves other Mantine imports in the same line

### **Phase 2: Manual Review & Testing**

After running the script:

1. **Review Changes**: Check git diff for any issues
2. **Test Application**: Ensure no visual regressions
3. **Fix Edge Cases**: Handle any complex import scenarios
4. **Update Stories**: Ensure Storybook still works

### **Phase 3: Enforce Consistency**

Add linting rules to prevent future violations:

```json
// .eslintrc.json
{
  "rules": {
    "no-restricted-imports": [
      "error",
      {
        "paths": [
          {
            "name": "@mantine/core",
            "importNames": ["Group", "SimpleGrid"],
            "message": "Use Design System primitives: import { Inline, Grid } from '@/components/DesignSystem'"
          }
        ]
      }
    ]
  }
}
```

## **Files Requiring Migration**

### **High Priority (Core Components)**
```
components/DesignSystem/ComplexComponents/PageContentHeader/PageContentHeader.tsx
components/DesignSystem/ComplexComponents/Table/CustomTopToolbar/index.tsx
components/DesignSystem/ComplexComponents/NameValue/NameValue.tsx
app/page.tsx
```

### **Medium Priority (Stories & Examples)**
```
components/DesignSystem/**/*.stories.tsx (30+ files)
```

### **Low Priority (Utilities)**
```
components/HeaderBar.tsx
components/SidebarNav.tsx
```

## **Before & After Examples**

### **Group → Inline Migration**

**❌ Before:**
```tsx
import { Group, Stack } from '@mantine/core';

<Group gap="sm" justify="space-between">
  <Text>Label</Text>
  <Button>Action</Button>
</Group>
```

**✅ After:**
```tsx
import { Stack } from '@mantine/core';
import { Inline } from '@/components/DesignSystem';

<Inline gap="sm" justify="space-between">
  <Text>Label</Text>
  <Button>Action</Button>
</Inline>
```

### **SimpleGrid → Grid Migration**

**❌ Before:**
```tsx
import { SimpleGrid } from '@mantine/core';

<SimpleGrid cols={3} spacing="24px">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</SimpleGrid>
```

**✅ After:**
```tsx
import { Grid } from '@/components/DesignSystem';

<Grid cols={3} spacing="lg">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>
```

## **Benefits After Migration**

### **🎨 Design Consistency**
- All spacing uses design tokens (`gap="md"` instead of `gap="16px"`)
- Consistent visual rhythm across the application
- Easier to update spacing globally

### **🔧 Developer Experience**
- Clear guidelines on which components to use
- No more confusion between Mantine and DS components
- Better TypeScript support with DS interfaces

### **📏 Maintainability**
- Single source of truth for layout components
- Easier to update layout behavior across the app
- Better adherence to design system principles

## **Risk Mitigation**

### **Potential Issues:**
1. **Visual Regressions**: Spacing might change slightly
2. **TypeScript Errors**: Props might differ between components
3. **Storybook Issues**: Stories might break

### **Mitigation Strategies:**
1. **Thorough Testing**: Test all major pages after migration
2. **Gradual Rollout**: Migrate high-priority files first
3. **Rollback Plan**: Keep git history for easy rollback
4. **Team Communication**: Inform team about the changes

## **Timeline**

| Phase | Duration | Tasks |
|-------|----------|-------|
| **Week 1** | 2 days | Run migration script, review changes |
| **Week 1** | 2 days | Test application, fix issues |
| **Week 1** | 1 day | Update documentation, add linting rules |

## **Success Metrics**

- ✅ **0 files** importing `Group` from `@mantine/core`
- ✅ **0 files** importing `SimpleGrid` from `@mantine/core`
- ✅ **All layout** uses Design System primitives
- ✅ **Consistent spacing** across the application
- ✅ **No visual regressions** in key user flows

## **Next Steps**

1. **Review this plan** with the team
2. **Run migration script** in dry-run mode
3. **Schedule migration** for a low-traffic period
4. **Execute migration** and test thoroughly
5. **Add linting rules** to prevent future violations

---

**The goal is to achieve 100% consistency in layout primitive usage across the entire codebase! 🎯** 