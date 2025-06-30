import { figma } from '@figma/code-connect';
import { DataTable } from './DataTable';

/**
 * Code Connect configuration for DataTable component
 * 
 * This file connects the DataTable React component to its Figma design counterpart.
 * It maps Figma properties to React props for the complex data table component.
 * 
 * To use this:
 * 1. Create a DataTable component in Figma with proper variants and properties
 * 2. Copy the Figma node URL from your design file
 * 3. Replace the placeholder URL below with your actual Figma node URL
 * 4. Run `npx figma connect publish` to publish the connection
 */

figma.connect(
  DataTable,
  'https://www.figma.com/design/YOUR_FILE_KEY/YOUR_FILE_NAME?node-id=YOUR_NODE_ID',
  {
    props: {
      // Table data - represented as nested components in Figma
      data: figma.nestedProps('Table Data', {
        rows: figma.children('Data Rows'),
      }),
      
      // Column definitions - represented as nested components in Figma
      columns: figma.nestedProps('Table Columns', {
        headers: figma.children('Column Headers'),
      }),
      
      // Loading state
      isLoading: figma.boolean('Loading'),
      
      // Error state
      isError: figma.boolean('Error'),
      
      // Feature toggles - map Figma boolean properties to React boolean props
      showFilters: figma.boolean('Show Filters'),
      showSearch: figma.boolean('Show Search'),
      showDensityToggle: figma.boolean('Show Density Toggle'),
      showFullScreenToggle: figma.boolean('Show Fullscreen Toggle'),
      
      // Pagination settings
      defaultPageSize: figma.enum('Page Size', {
        '10': 10,
        '25': 25,
        '50': 50,
        '100': 100,
      }),
      
      // Density settings
      defaultDensity: figma.enum('Density', {
        'Extra Small': 'xs',
        'Small': 'sm',
        'Medium': 'md',
        'Large': 'lg',
        'Extra Large': 'xl',
      }),
      
      // Total count for pagination display
      totalCount: figma.textContent('Total Count'),
    },
    
    // Example code snippet that will be shown in Figma
    example: (props) => (
      <DataTable
        data={props.data}
        columns={props.columns}
        isLoading={props.isLoading}
        isError={props.isError}
        showFilters={props.showFilters}
        showSearch={props.showSearch}
        showDensityToggle={props.showDensityToggle}
        showFullScreenToggle={props.showFullScreenToggle}
        defaultPageSize={props.defaultPageSize}
        defaultDensity={props.defaultDensity}
        totalCount={props.totalCount}
      />
    ),
  }
);

// Specific variant for DataTable with filters enabled
figma.connect(
  DataTable,
  'https://www.figma.com/design/YOUR_FILE_KEY/YOUR_FILE_NAME?node-id=YOUR_NODE_ID_WITH_FILTERS',
  {
    variant: { 'Show Filters': 'True' },
    props: {
      showFilters: true,
      showSearch: figma.boolean('Show Search'),
      data: figma.nestedProps('Table Data', {
        rows: figma.children('Data Rows'),
      }),
      columns: figma.nestedProps('Table Columns', {
        headers: figma.children('Column Headers'),
      }),
    },
    example: (props) => (
      <DataTable
        data={props.data}
        columns={props.columns}
        showFilters={true}
        showSearch={props.showSearch}
      />
    ),
  }
);

// Specific variant for DataTable in loading state
figma.connect(
  DataTable,
  'https://www.figma.com/design/YOUR_FILE_KEY/YOUR_FILE_NAME?node-id=YOUR_NODE_ID_LOADING',
  {
    variant: { 'State': 'Loading' },
    props: {
      isLoading: true,
      data: [],
      columns: figma.nestedProps('Table Columns', {
        headers: figma.children('Column Headers'),
      }),
    },
    example: (props) => (
      <DataTable
        data={[]}
        columns={props.columns}
        isLoading={true}
      />
    ),
  }
);

// Specific variant for DataTable in error state
figma.connect(
  DataTable,
  'https://www.figma.com/design/YOUR_FILE_KEY/YOUR_FILE_NAME?node-id=YOUR_NODE_ID_ERROR',
  {
    variant: { 'State': 'Error' },
    props: {
      isError: true,
      error: figma.textContent('Error Message'),
      data: [],
      columns: figma.nestedProps('Table Columns', {
        headers: figma.children('Column Headers'),
      }),
    },
    example: (props) => (
      <DataTable
        data={[]}
        columns={props.columns}
        isError={true}
        error={props.error}
      />
    ),
  }
); 