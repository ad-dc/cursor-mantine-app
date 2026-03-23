import React from 'react';
import { figma } from '@figma/code-connect';
import { Card } from './Card';

/**
 * DS Card enforces surface tokens in code (not driven by Figma props):
 * `padding="md"`, `radius="sm"`, `shadow="xs"`, `withBorder`.
 *
 * `interactive` and `onClick` are code-only; do not add them to Code Connect.
 */
figma.connect(
  Card,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1992-5381&t=y0IJ175mkJJcYKZp-4',
  {
    props: {
      children: figma.slot('children'),
    },
    example: (props) => <Card>{props.children}</Card>,
  }
);
