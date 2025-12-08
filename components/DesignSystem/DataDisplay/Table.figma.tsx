import { figma } from '@figma/code-connect';
import { Table } from '@mantine/core';

const defaultData = {
  head: ['Name', 'Email', 'Role'],
  rows: [
    ['John Doe', 'john@appdirect.com', 'Admin'],
    ['Jane Smith', 'jane@appdirect.com', 'Manager'],
    ['Alex Johnson', 'alex@appdirect.com', 'Contributor'],
  ],
};

// Disabled: Table shares node-id=4129-10931 with Select and List
// TODO: Get unique Figma node URL, then uncomment
/*
figma.connect(
  Table,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=4129-10931&t=y0IJ175mkJJcYKZp-4',
  {
    props: {
      // TODO: Restore bindings once the Figma table exposes matching props/layers
      // striped: figma.boolean('striped'),
      // highlightOnHover: figma.boolean('highlight on hover'),
      // withColumnBorders: figma.boolean('with column borders'),
      // withRowBorders: figma.boolean('with row borders'),
      // captionSide: figma.enum('caption side', {
      //   top: 'top',
      //   bottom: 'bottom',
      // }),
      // caption: figma.string('caption'),
      // head: figma.children('header cells'),
      // body: figma.children('rows'),
    },
    example: () => (
      <Table striped highlightOnHover captionSide="top" caption="Team members">
        <Table.Thead>
          <Table.Tr>
            {defaultData.head.map((header, index) => (
              <Table.Th key={index}>{header}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {defaultData.rows.map((row, rowIndex) => (
            <Table.Tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <Table.Td key={cellIndex}>{cell}</Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    ),
  }
);
*/

