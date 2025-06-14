import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mantine/core';
import { Inline } from '@/components/DesignSystem';
import { AutocompleteClearable } from './AutocompleteClearable';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';

const meta: Meta<typeof AutocompleteClearable> = {
  title: 'Design System/Combobox/AutocompleteClearable',
  component: AutocompleteClearable,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Autocomplete input with clearable functionality and filtering capabilities.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    description: {
      control: 'text',
      description: 'Description text displayed below the input',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
    },
    showOptional: {
      control: 'boolean',
      description: 'Whether to show "(optional)" next to the label',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Input size',
    },
    data: {
      control: 'object',
      description: 'Data array for options',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const countries = [
  'United States',
  'Canada',
  'United Kingdom',
  'Germany',
  'France',
  'Australia',
  'Japan',
  'Singapore',
  'Brazil',
  'Mexico',
  'India',
  'China',
  'South Korea',
  'Netherlands',
  'Sweden',
  'Norway',
];

const cities = [
  { value: 'nyc', label: 'New York City' },
  { value: 'london', label: 'London' },
  { value: 'paris', label: 'Paris' },
  { value: 'tokyo', label: 'Tokyo' },
  { value: 'sydney', label: 'Sydney' },
  { value: 'toronto', label: 'Toronto' },
  { value: 'berlin', label: 'Berlin' },
  { value: 'amsterdam', label: 'Amsterdam' },
];

export const Default: Story = {
  args: {
    label: 'Country',
    placeholder: 'Pick a country or type anything',
    data: countries,
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="lg" w={300}>
      <div>
        <Text size="sm" fw={500} mb="xs">Extra Small (xs):</Text>
        <AutocompleteClearable
          label="Country"
          placeholder="Pick a country"
          data={countries.slice(0, 5)}
          size="xs"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Small (sm):</Text>
        <AutocompleteClearable
          label="Country"
          placeholder="Pick a country"
          data={countries.slice(0, 5)}
          size="sm"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Medium (md):</Text>
        <AutocompleteClearable
          label="Country"
          placeholder="Pick a country"
          data={countries.slice(0, 5)}
          size="md"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Large (lg):</Text>
        <AutocompleteClearable
          label="Country"
          placeholder="Pick a country"
          data={countries.slice(0, 5)}
          size="lg"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Extra Large (xl):</Text>
        <AutocompleteClearable
          label="Country"
          placeholder="Pick a country"
          data={countries.slice(0, 5)}
          size="xl"
        />
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'AutocompleteClearable component in different sizes.',
      },
    },
  },
};

export const WithDescription: Story = {
  render: () => (
    <Stack gap="lg" w={350}>
      <AutocompleteClearable
        label="Preferred Country"
        description="Select your preferred country for shipping"
        placeholder="Start typing or select from list"
        data={countries}
      />
      
      <AutocompleteClearable
        label="City"
        description="Choose a major city or type a custom location"
        placeholder="Enter city name"
        data={cities}
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'AutocompleteClearable with helpful description text.',
      },
    },
  },
};

export const RequiredAndOptional: Story = {
  render: () => (
    <Stack gap="lg" w={350}>
      <AutocompleteClearable
        label="Country"
        placeholder="Select your country"
        data={countries}
        required
        description="This field is required"
      />
      
      <AutocompleteClearable
        label="Secondary Country"
        placeholder="Optional secondary choice"
        data={countries}
        showOptional
        description="You can leave this blank if not applicable"
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Required field with asterisk and optional field with "(optional)" label.',
      },
    },
  },
};

export const WithError: Story = {
  render: () => (
    <Stack gap="lg" w={350}>
      <AutocompleteClearable
        label="Country"
        placeholder="Select your country"
        data={countries}
        error="Please select a valid country"
        required
      />
      
      <AutocompleteClearable
        label="City"
        placeholder="Enter city name"
        data={cities}
        error="This city is not available for delivery"
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'AutocompleteClearable with error states and validation messages.',
      },
    },
  },
};

export const DisabledState: Story = {
  render: () => (
    <Stack gap="lg" w={350}>
      <AutocompleteClearable
        label="Country"
        placeholder="Not available"
        data={countries}
        disabled
        description="This field is currently disabled"
      />
      
      <AutocompleteClearable
        label="City"
        placeholder="Select city"
        data={cities}
        disabled
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Disabled AutocompleteClearable inputs.',
      },
    },
  },
};

export const DifferentDataTypes: Story = {
  render: () => (
    <Stack gap="lg" w={400}>
      <div>
        <Text size="sm" fw={500} mb="sm">String Array Data:</Text>
        <AutocompleteClearable
          label="Programming Languages"
          placeholder="Select or type a language"
          data={['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'Go', 'Rust', 'Swift']}
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Object Array Data (value/label):</Text>
        <AutocompleteClearable
          label="Framework"
          placeholder="Choose a framework"
          data={[
            { value: 'react', label: 'React' },
            { value: 'vue', label: 'Vue.js' },
            { value: 'angular', label: 'Angular' },
            { value: 'svelte', label: 'Svelte' },
            { value: 'nextjs', label: 'Next.js' },
            { value: 'nuxt', label: 'Nuxt.js' },
          ]}
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Large Dataset:</Text>
        <AutocompleteClearable
          label="Country"
          placeholder="Type to filter from 16 countries"
          data={countries}
          description="Start typing to see filtered results"
        />
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'AutocompleteClearable with different data formats and sizes.',
      },
    },
  },
};

export const FormIntegration: Story = {
  render: () => (
    <Stack gap="lg" w={400}>
      <Title order={3} size="md" fw={500}>User Registration Form</Title>
      
      <AutocompleteClearable
        label="Country"
        placeholder="Select your country"
        data={countries}
        required
        description="We need this for tax and shipping purposes"
      />
      
      <AutocompleteClearable
        label="Preferred Language"
        placeholder="Choose your language"
        data={[
          'English',
          'Spanish',
          'French',
          'German',
          'Italian',
          'Portuguese',
          'Japanese',
          'Chinese',
          'Korean',
          'Arabic'
        ]}
        showOptional
        description="This helps us provide better support"
      />
      
      <AutocompleteClearable
        label="Industry"
        placeholder="Type or select your industry"
        data={[
          { value: 'tech', label: 'Technology' },
          { value: 'finance', label: 'Finance & Banking' },
          { value: 'healthcare', label: 'Healthcare' },
          { value: 'education', label: 'Education' },
          { value: 'retail', label: 'Retail & E-commerce' },
          { value: 'manufacturing', label: 'Manufacturing' },
          { value: 'consulting', label: 'Consulting' },
          { value: 'other', label: 'Other' },
        ]}
        required
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'AutocompleteClearable components integrated in a form context.',
      },
    },
  },
};

export const SearchAndFilter: Story = {
  render: () => (
    <Stack gap="lg" w={400}>
      <div>
        <Text size="sm" fw={500} mb="sm">Product Search:</Text>
        <AutocompleteClearable
          label="Product"
          placeholder="Search products..."
          data={[
            'MacBook Pro',
            'MacBook Air',
            'iPad Pro',
            'iPad Air',
            'iPhone 15 Pro',
            'iPhone 15',
            'Apple Watch',
            'AirPods Pro',
            'AirPods Max',
            'Mac Studio',
            'Mac Mini',
            'iMac'
          ]}
          description="Type to filter products or select from dropdown"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Tag Search:</Text>
        <AutocompleteClearable
          label="Tags"
          placeholder="Add tags..."
          data={[
            'react',
            'typescript',
            'javascript',
            'frontend',
            'backend',
            'fullstack',
            'mobile',
            'web',
            'api',
            'database',
            'ui/ux',
            'design'
          ]}
          description="Search existing tags or create new ones"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Location Search:</Text>
        <AutocompleteClearable
          label="Location"
          placeholder="Enter city or address..."
          data={[
            'New York, NY',
            'Los Angeles, CA',
            'Chicago, IL',
            'Houston, TX',
            'Phoenix, AZ',
            'Philadelphia, PA',
            'San Antonio, TX',
            'San Diego, CA',
            'Dallas, TX',
            'San Jose, CA'
          ]}
          description="Start typing to find locations"
        />
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'AutocompleteClearable used for search and filtering scenarios.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Stack gap="xl" w={500}>
      <Title order={3} size="md" fw={500} mb="xs">Common Use Cases</Title>
      
      <div>
        <Text size="sm" fw={500} mb="sm">1. Address Autocomplete:</Text>
        <AutocompleteClearable
          label="Shipping Address"
          placeholder="Start typing your address..."
          data={[
            '123 Main St, New York, NY 10001',
            '456 Oak Ave, Los Angeles, CA 90210',
            '789 Pine Rd, Chicago, IL 60601',
            '321 Elm St, Houston, TX 77001',
          ]}
          description="We'll help complete your address"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">2. Skill Selection:</Text>
        <AutocompleteClearable
          label="Skills"
          placeholder="Add your skills..."
          data={[
            'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Angular',
            'Node.js', 'Python', 'Java', 'C#', 'PHP',
            'SQL', 'MongoDB', 'PostgreSQL', 'Redis',
            'AWS', 'Docker', 'Kubernetes', 'Git'
          ]}
          description="Type to find skills or add custom ones"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">3. Company Search:</Text>
        <AutocompleteClearable
          label="Company"
          placeholder="Search companies..."
          data={[
            { value: 'apple', label: 'Apple Inc.' },
            { value: 'google', label: 'Google LLC' },
            { value: 'microsoft', label: 'Microsoft Corporation' },
            { value: 'amazon', label: 'Amazon.com Inc.' },
            { value: 'meta', label: 'Meta Platforms Inc.' },
            { value: 'tesla', label: 'Tesla Inc.' },
          ]}
          description="Find your company or add a new one"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">4. Category Filter:</Text>
        <AutocompleteClearable
          label="Category"
          placeholder="Filter by category..."
          data={[
            'Electronics', 'Clothing', 'Books', 'Home & Garden',
            'Sports', 'Toys', 'Automotive', 'Health & Beauty',
            'Food & Beverages', 'Office Supplies'
          ]}
          showOptional
          description="Leave empty to show all categories"
        />
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of AutocompleteClearable usage in different application contexts.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    label: 'Country',
    placeholder: 'Pick a country or type anything',
    data: countries,
    size: 'md',
    required: false,
    showOptional: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the AutocompleteClearable and see different combinations.',
      },
    },
  },
}; 