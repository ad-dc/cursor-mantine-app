import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mantine/core';
import { Inline } from '@/components/DesignSystem';
import { SearchableSelect } from './SearchableSelect';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';

const meta: Meta<typeof SearchableSelect> = {
  title: 'Design System/Combobox/SearchableSelect',
  component: SearchableSelect,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Searchable select input with filtering capabilities and dropdown options.',
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
    searchable: {
      control: 'boolean',
      description: 'Whether the select is searchable',
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

const languages = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'C++',
  'Go',
  'Rust',
  'Swift',
  'Kotlin',
  'C#',
  'PHP',
  'Ruby',
  'Scala',
  'Dart',
  'Elixir',
];

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'au', label: 'Australia' },
  { value: 'jp', label: 'Japan' },
  { value: 'sg', label: 'Singapore' },
  { value: 'br', label: 'Brazil' },
  { value: 'mx', label: 'Mexico' },
];

export const Default: Story = {
  args: {
    label: 'Programming Language',
    placeholder: 'Search programming languages',
    data: languages,
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="lg" w={350}>
      <div>
        <Text size="sm" fw={500} mb="xs">Extra Small (xs):</Text>
        <SearchableSelect
          label="Language"
          placeholder="Search languages"
          data={languages.slice(0, 6)}
          size="xs"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Small (sm):</Text>
        <SearchableSelect
          label="Language"
          placeholder="Search languages"
          data={languages.slice(0, 6)}
          size="sm"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Medium (md):</Text>
        <SearchableSelect
          label="Language"
          placeholder="Search languages"
          data={languages.slice(0, 6)}
          size="md"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Large (lg):</Text>
        <SearchableSelect
          label="Language"
          placeholder="Search languages"
          data={languages.slice(0, 6)}
          size="lg"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Extra Large (xl):</Text>
        <SearchableSelect
          label="Language"
          placeholder="Search languages"
          data={languages.slice(0, 6)}
          size="xl"
        />
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'SearchableSelect component in different sizes.',
      },
    },
  },
};

export const WithDescription: Story = {
  render: () => (
    <Stack gap="lg" w={400}>
      <SearchableSelect
        label="Primary Language"
        description="Select your primary programming language"
        placeholder="Type to search languages"
        data={languages}
      />
      
      <SearchableSelect
        label="Country"
        description="Choose your country of residence"
        placeholder="Search countries"
        data={countries}
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'SearchableSelect with helpful description text.',
      },
    },
  },
};

export const RequiredAndOptional: Story = {
  render: () => (
    <Stack gap="lg" w={400}>
      <SearchableSelect
        label="Primary Language"
        placeholder="Select your main language"
        data={languages}
        required
        description="This field is required"
      />
      
      <SearchableSelect
        label="Secondary Language"
        placeholder="Optional secondary choice"
        data={languages}
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
    <Stack gap="lg" w={400}>
      <SearchableSelect
        label="Programming Language"
        placeholder="Select a language"
        data={languages}
        error="Please select a valid programming language"
        required
      />
      
      <SearchableSelect
        label="Country"
        placeholder="Choose country"
        data={countries}
        error="This country is not supported"
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'SearchableSelect with error states and validation messages.',
      },
    },
  },
};

export const DisabledState: Story = {
  render: () => (
    <Stack gap="lg" w={400}>
      <SearchableSelect
        label="Language"
        placeholder="Not available"
        data={languages}
        disabled
        description="This field is currently disabled"
      />
      
      <SearchableSelect
        label="Country"
        placeholder="Select country"
        data={countries}
        disabled
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Disabled SearchableSelect inputs.',
      },
    },
  },
};

export const SearchableVsNonSearchable: Story = {
  render: () => (
    <Stack gap="lg" w={400}>
      <div>
        <Text size="sm" fw={500} mb="sm">Searchable (default):</Text>
        <SearchableSelect
          label="Language"
          placeholder="Type to search languages"
          data={languages}
          searchable={true}
          description="Type to filter options"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Non-searchable:</Text>
        <SearchableSelect
          label="Language"
          placeholder="Select from dropdown"
          data={languages}
          searchable={false}
          description="Click to see all options"
        />
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison between searchable and non-searchable modes.',
      },
    },
  },
};

export const DifferentDataTypes: Story = {
  render: () => (
    <Stack gap="lg" w={400}>
      <div>
        <Text size="sm" fw={500} mb="sm">String Array Data:</Text>
        <SearchableSelect
          label="Framework"
          placeholder="Search frameworks"
          data={['React', 'Vue.js', 'Angular', 'Svelte', 'Next.js', 'Nuxt.js', 'Gatsby', 'SvelteKit']}
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Object Array Data (value/label):</Text>
        <SearchableSelect
          label="Database"
          placeholder="Choose database"
          data={[
            { value: 'mysql', label: 'MySQL' },
            { value: 'postgresql', label: 'PostgreSQL' },
            { value: 'mongodb', label: 'MongoDB' },
            { value: 'redis', label: 'Redis' },
            { value: 'sqlite', label: 'SQLite' },
            { value: 'cassandra', label: 'Apache Cassandra' },
          ]}
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Large Dataset:</Text>
        <SearchableSelect
          label="Programming Language"
          placeholder="Search from 15 languages"
          data={languages}
          description="Type to quickly find your language"
        />
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'SearchableSelect with different data formats and sizes.',
      },
    },
  },
};

export const FormIntegration: Story = {
  render: () => (
    <Stack gap="lg" w={450}>
      <Title order={3} size="md" fw={500}>Job Application Form</Title>
      
      <SearchableSelect
        label="Primary Programming Language"
        placeholder="Search your main language"
        data={languages}
        required
        description="The language you're most proficient in"
      />
      
      <SearchableSelect
        label="Preferred Work Location"
        placeholder="Search countries"
        data={countries}
        required
        description="Where would you like to work?"
      />
      
      <SearchableSelect
        label="Experience Level"
        placeholder="Select experience level"
        data={[
          { value: 'junior', label: 'Junior (0-2 years)' },
          { value: 'mid', label: 'Mid-level (2-5 years)' },
          { value: 'senior', label: 'Senior (5-8 years)' },
          { value: 'lead', label: 'Lead (8+ years)' },
          { value: 'architect', label: 'Architect (10+ years)' },
        ]}
        required
        searchable={false}
        description="Your current experience level"
      />
      
      <SearchableSelect
        label="Company Size Preference"
        placeholder="Choose company size"
        data={[
          'Startup (1-10 employees)',
          'Small (11-50 employees)',
          'Medium (51-200 employees)',
          'Large (201-1000 employees)',
          'Enterprise (1000+ employees)'
        ]}
        showOptional
        searchable={false}
        description="Preferred company size to work for"
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'SearchableSelect components integrated in a form context.',
      },
    },
  },
};

export const SearchAndFilter: Story = {
  render: () => (
    <Stack gap="lg" w={450}>
      <div>
        <Text size="sm" fw={500} mb="sm">Technology Search:</Text>
        <SearchableSelect
          label="Technology Stack"
          placeholder="Search technologies..."
          data={[
            'React', 'Vue.js', 'Angular', 'Svelte', 'Next.js',
            'Node.js', 'Express.js', 'Django', 'Flask', 'FastAPI',
            'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes',
            'AWS', 'Azure', 'Google Cloud', 'Vercel', 'Netlify'
          ]}
          description="Type to quickly find technologies"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">City Search:</Text>
        <SearchableSelect
          label="City"
          placeholder="Search cities..."
          data={[
            { value: 'nyc', label: 'New York City, NY' },
            { value: 'sf', label: 'San Francisco, CA' },
            { value: 'la', label: 'Los Angeles, CA' },
            { value: 'chicago', label: 'Chicago, IL' },
            { value: 'boston', label: 'Boston, MA' },
            { value: 'seattle', label: 'Seattle, WA' },
            { value: 'austin', label: 'Austin, TX' },
            { value: 'denver', label: 'Denver, CO' },
            { value: 'miami', label: 'Miami, FL' },
            { value: 'atlanta', label: 'Atlanta, GA' },
          ]}
          description="Find your preferred city"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Industry Search:</Text>
        <SearchableSelect
          label="Industry"
          placeholder="Search industries..."
          data={[
            'Technology', 'Finance & Banking', 'Healthcare', 'Education',
            'E-commerce & Retail', 'Manufacturing', 'Consulting',
            'Media & Entertainment', 'Real Estate', 'Transportation',
            'Energy & Utilities', 'Government', 'Non-profit', 'Gaming'
          ]}
          description="Type to filter industries"
        />
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'SearchableSelect used for search and filtering scenarios.',
      },
    },
  },
};

export const ConfigurationSettings: Story = {
  render: () => (
    <Stack gap="lg" w={450}>
      <div>
        <Text size="sm" fw={500} mb="sm">Application Settings:</Text>
        <SearchableSelect
          label="Theme"
          placeholder="Select theme"
          data={[
            { value: 'light', label: 'Light Theme' },
            { value: 'dark', label: 'Dark Theme' },
            { value: 'auto', label: 'Auto (System)' },
            { value: 'high-contrast', label: 'High Contrast' },
          ]}
          searchable={false}
          description="Choose your preferred theme"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Language & Region:</Text>
        <SearchableSelect
          label="Language"
          placeholder="Search languages"
          data={[
            { value: 'en', label: 'English' },
            { value: 'es', label: 'Español' },
            { value: 'fr', label: 'Français' },
            { value: 'de', label: 'Deutsch' },
            { value: 'it', label: 'Italiano' },
            { value: 'pt', label: 'Português' },
            { value: 'ja', label: '日本語' },
            { value: 'zh', label: '中文' },
            { value: 'ko', label: '한국어' },
            { value: 'ar', label: 'العربية' },
          ]}
          description="Select your preferred language"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Notification Settings:</Text>
        <SearchableSelect
          label="Notification Frequency"
          placeholder="Choose frequency"
          data={[
            'Immediately',
            'Every 15 minutes',
            'Every hour',
            'Every 4 hours',
            'Daily digest',
            'Weekly digest',
            'Never'
          ]}
          searchable={false}
          description="How often to receive notifications"
        />
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'SearchableSelect for configuration and settings scenarios.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Stack gap="xl" w={500}>
      <Title order={3} size="md" fw={500} mb="xs">Common Use Cases</Title>
      
      <div>
        <Text size="sm" fw={500} mb="sm">1. Skill Selection:</Text>
        <SearchableSelect
          label="Primary Skill"
          placeholder="Search your main skill"
          data={languages}
          description="Choose your strongest programming language"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">2. Location Picker:</Text>
        <SearchableSelect
          label="Location"
          placeholder="Search locations"
          data={countries}
          description="Find your country or region"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">3. Category Selection:</Text>
        <SearchableSelect
          label="Category"
          placeholder="Choose category"
          data={[
            'Web Development', 'Mobile Development', 'Data Science',
            'Machine Learning', 'DevOps', 'UI/UX Design',
            'Game Development', 'Blockchain', 'Cybersecurity'
          ]}
          description="Select your area of expertise"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">4. Tool Selection:</Text>
        <SearchableSelect
          label="Development Tool"
          placeholder="Search tools"
          data={[
            { value: 'vscode', label: 'Visual Studio Code' },
            { value: 'webstorm', label: 'WebStorm' },
            { value: 'sublime', label: 'Sublime Text' },
            { value: 'atom', label: 'Atom' },
            { value: 'vim', label: 'Vim' },
            { value: 'emacs', label: 'Emacs' },
          ]}
          description="Choose your preferred development environment"
        />
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of SearchableSelect usage in different application contexts.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    label: 'Programming Language',
    placeholder: 'Search programming languages',
    data: languages,
    size: 'md',
    required: false,
    showOptional: false,
    disabled: false,
    searchable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the SearchableSelect and see different combinations.',
      },
    },
  },
}; 