import { figma } from '@figma/code-connect';
import { Breadcrumb, BackBreadcrumb } from './Breadcrumb';

// Component set node: 959-1668 ("Ⓜ️ Breadcrumbs")
// Variants live inside the set — use variant: {} to differentiate them.

// ── Default breadcrumb (type=Default) ──────────────────────────────────────
figma.connect(
  Breadcrumb,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=959-1668',
  {
    variant: { type: 'Default' },
    example: () => (
      <Breadcrumb
        separator="/"
        items={[
          { label: 'Home', href: '#' },
          { label: 'Library', href: '#' },
          { label: 'Current Page' },
        ]}
      />
    ),
  }
);

// ── Back breadcrumb (type=back) ────────────────────────────────────────────
figma.connect(
  BackBreadcrumb,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=959-1668',
  {
    variant: { type: 'back' },
    example: () => (
      <BackBreadcrumb label="Back" onClick={() => {}} />
    ),
  }
);

// ── Subcomponent: .Breadcrumbs/Core/level (node 1150:3287) ─────────────────
// Prevents Figma from falling back to Tailwind auto-generation for this node.
figma.connect(
  Breadcrumb,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1150-3287',
  {
    example: () => <Breadcrumb items={[{ label: 'Level', href: '#' }]} />,
  }
);

// ── Subcomponent: .Breadcrumbs/Core/separator (node 1151:552) ─────────────
figma.connect(
  Breadcrumb,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1151-552',
  {
    example: () => <Breadcrumb items={[{ label: 'Level 1', href: '#' }, { label: 'Level 2' }]} />,
  }
);

// ── Subcomponent: .Breadcrumbs/Core/back-icon (node 1151:598) ─────────────
figma.connect(
  BackBreadcrumb,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1151-598',
  {
    example: () => <BackBreadcrumb label="Back" onClick={() => {}} />,
  }
);
