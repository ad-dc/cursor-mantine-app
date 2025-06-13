import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Group } from '@mantine/core';
import { Multiselect } from './Multiselect';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';

const meta: Meta<typeof Multiselect> = {
  title: 'Design System/Combobox/Multiselect',
  component: Multiselect,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Multi-selection input with pills display and checkbox options.',
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
    maxDisplayedValues: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Maximum number of pills to display before showing "+X more"',
    },
    data: {
      control: 'object',
      description: 'Data array for options',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const technologies = [
  'React',
  'Vue',
  'Angular',
  'Node.js',
  'Docker',
  'Kubernetes',
  'AWS',
  'MongoDB',
  'PostgreSQL',
  'Redis',
  'TypeScript',
  'JavaScript',
  'Python',
  'Java',
  'Go',
];

const skills = [
  { value: 'frontend', label: 'Frontend Development' },
  { value: 'backend', label: 'Backend Development' },
  { value: 'fullstack', label: 'Full Stack Development' },
  { value: 'mobile', label: 'Mobile Development' },
  { value: 'devops', label: 'DevOps' },
  { value: 'design', label: 'UI/UX Design' },
  { value: 'testing', label: 'Quality Assurance' },
  { value: 'data', label: 'Data Science' },
];

export const Default: Story = {
  args: {
    label: 'Technologies',
    placeholder: 'Pick one or more technologies',
    data: technologies,
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="lg" w={400}>
      <div>
        <Text size="sm" fw={500} mb="xs">Extra Small (xs):</Text>
        <Multiselect
          label="Technologies"
          placeholder="Select technologies"
          data={technologies.slice(0, 6)}
          size="xs"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Small (sm):</Text>
        <Multiselect
          label="Technologies"
          placeholder="Select technologies"
          data={technologies.slice(0, 6)}
          size="sm"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Medium (md):</Text>
        <Multiselect
          label="Technologies"
          placeholder="Select technologies"
          data={technologies.slice(0, 6)}
          size="md"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Large (lg):</Text>
        <Multiselect
          label="Technologies"
          placeholder="Select technologies"
          data={technologies.slice(0, 6)}
          size="lg"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Extra Large (xl):</Text>
        <Multiselect
          label="Technologies"
          placeholder="Select technologies"
          data={technologies.slice(0, 6)}
          size="xl"
        />
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiselect component in different sizes.',
      },
    },
  },
};

export const WithDescription: Story = {
  render: () => (
    <Stack gap="lg" w={400}>
      <Multiselect
        label="Programming Languages"
        description="Select all programming languages you're proficient in"
        placeholder="Choose languages"
        data={['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'Go', 'Rust', 'Swift']}
      />
      
      <Multiselect
        label="Skills"
        description="Pick your areas of expertise (you can select multiple)"
        placeholder="Select skills"
        data={skills}
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiselect with helpful description text.',
      },
    },
  },
};

export const RequiredAndOptional: Story = {
  render: () => (
    <Stack gap="lg" w={400}>
      <Multiselect
        label="Required Skills"
        placeholder="Select at least one skill"
        data={skills}
        required
        description="You must select at least one skill"
      />
      
      <Multiselect
        label="Additional Technologies"
        placeholder="Optional technology preferences"
        data={technologies}
        showOptional
        description="These are nice-to-have skills"
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
      <Multiselect
        label="Technologies"
        placeholder="Select technologies"
        data={technologies}
        error="Please select at least 2 technologies"
        required
      />
      
      <Multiselect
        label="Skills"
        placeholder="Choose skills"
        data={skills}
        error="Some selected skills are not available in your region"
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiselect with error states and validation messages.',
      },
    },
  },
};

export const DisabledState: Story = {
  render: () => (
    <Stack gap="lg" w={400}>
      <Multiselect
        label="Technologies"
        placeholder="Not available"
        data={technologies}
        disabled
        description="This field is currently disabled"
      />
      
      <Multiselect
        label="Skills"
        placeholder="Select skills"
        data={skills}
        disabled
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Disabled Multiselect inputs.',
      },
    },
  },
};

export const MaxDisplayedValues: Story = {
  render: () => (
    <Stack gap="lg" w={400}>
      <div>
        <Text size="sm" fw={500} mb="sm">Max 2 displayed (default):</Text>
        <Multiselect
          label="Technologies"
          placeholder="Select multiple technologies"
          data={technologies}
          maxDisplayedValues={2}
          description="Shows max 2 pills, then '+X more'"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Max 4 displayed:</Text>
        <Multiselect
          label="Skills"
          placeholder="Select multiple skills"
          data={skills}
          maxDisplayedValues={4}
          description="Shows max 4 pills before collapsing"
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Max 1 displayed:</Text>
        <Multiselect
          label="Languages"
          placeholder="Select languages"
          data={['English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Japanese', 'Chinese']}
          maxDisplayedValues={1}
          description="Very compact display"
        />
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different maximum displayed values before showing "+X more".',
      },
    },
  },
};

export const DifferentDataTypes: Story = {
  render: () => (
    <Stack gap="lg" w={400}>
      <div>
        <Text size="sm" fw={500} mb="sm">String Array Data:</Text>
        <Multiselect
          label="Frameworks"
          placeholder="Select frameworks"
          data={['React', 'Vue.js', 'Angular', 'Svelte', 'Next.js', 'Nuxt.js', 'Gatsby']}
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Object Array Data (value/label):</Text>
        <Multiselect
          label="Job Roles"
          placeholder="Select roles"
          data={[
            { value: 'fe', label: 'Frontend Developer' },
            { value: 'be', label: 'Backend Developer' },
            { value: 'fs', label: 'Full Stack Developer' },
            { value: 'mobile', label: 'Mobile Developer' },
            { value: 'devops', label: 'DevOps Engineer' },
            { value: 'qa', label: 'QA Engineer' },
          ]}
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Large Dataset:</Text>
        <Multiselect
          label="Technologies"
          placeholder="Select from 15 technologies"
          data={technologies}
          description="Scroll to see all options"
        />
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiselect with different data formats and sizes.',
      },
    },
  },
};

export const FormIntegration: Story = {
  render: () => (
    <Stack gap="lg" w={450}>
      <Title order={3} size="md" fw={500}>Developer Profile Form</Title>
      
      <Multiselect
        label="Programming Languages"
        placeholder="Select languages you know"
        data={['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'Go', 'Rust', 'Swift', 'Kotlin', 'PHP']}
        required
        description="Select all languages you're comfortable working with"
        maxDisplayedValues={3}
      />
      
      <Multiselect
        label="Frameworks & Libraries"
        placeholder="Choose frameworks"
        data={[
          { value: 'react', label: 'React' },
          { value: 'vue', label: 'Vue.js' },
          { value: 'angular', label: 'Angular' },
          { value: 'svelte', label: 'Svelte' },
          { value: 'express', label: 'Express.js' },
          { value: 'django', label: 'Django' },
          { value: 'spring', label: 'Spring Boot' },
          { value: 'laravel', label: 'Laravel' },
        ]}
        showOptional
        description="Select frameworks you have experience with"
        maxDisplayedValues={2}
      />
      
      <Multiselect
        label="Areas of Interest"
        placeholder="What interests you?"
        data={[
          'Frontend Development',
          'Backend Development',
          'Mobile Development',
          'DevOps',
          'Machine Learning',
          'Data Science',
          'UI/UX Design',
          'Game Development',
          'Blockchain',
          'IoT'
        ]}
        showOptional
        description="Areas you'd like to work in or learn more about"
        maxDisplayedValues={3}
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiselect components integrated in a form context.',
      },
    },
  },
};

export const TagSelection: Story = {
  render: () => (
    <Stack gap="lg" w={450}>
      <div>
        <Text size="sm" fw={500} mb="sm">Article Tags:</Text>
        <Multiselect
          label="Tags"
          placeholder="Add tags to your article"
          data={[
            'react', 'javascript', 'typescript', 'frontend', 'backend',
            'tutorial', 'beginner', 'advanced', 'web-development',
            'mobile', 'performance', 'security', 'testing', 'deployment'
          ]}
          description="Select relevant tags to help others find your content"
          maxDisplayedValues={4}
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Product Categories:</Text>
        <Multiselect
          label="Categories"
          placeholder="Categorize your product"
          data={[
            { value: 'electronics', label: 'Electronics' },
            { value: 'clothing', label: 'Clothing & Fashion' },
            { value: 'home', label: 'Home & Garden' },
            { value: 'sports', label: 'Sports & Outdoors' },
            { value: 'books', label: 'Books & Media' },
            { value: 'toys', label: 'Toys & Games' },
            { value: 'automotive', label: 'Automotive' },
            { value: 'health', label: 'Health & Beauty' },
          ]}
          required
          description="Choose categories that best describe your product"
          maxDisplayedValues={2}
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Project Labels:</Text>
        <Multiselect
          label="Labels"
          placeholder="Add project labels"
          data={[
            'bug', 'feature', 'enhancement', 'documentation',
            'help-wanted', 'good-first-issue', 'priority-high',
            'priority-low', 'in-progress', 'review-needed'
          ]}
          showOptional
          description="Organize your project with labels"
          maxDisplayedValues={3}
        />
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiselect used for tagging and categorization scenarios.',
      },
    },
  },
};

export const TeamAndPermissions: Story = {
  render: () => (
    <Stack gap="lg" w={450}>
      <div>
        <Text size="sm" fw={500} mb="sm">Team Members:</Text>
        <Multiselect
          label="Assign Team Members"
          placeholder="Select team members"
          data={[
            { value: 'john', label: 'John Doe (Frontend)' },
            { value: 'jane', label: 'Jane Smith (Backend)' },
            { value: 'mike', label: 'Mike Johnson (DevOps)' },
            { value: 'sarah', label: 'Sarah Wilson (Designer)' },
            { value: 'alex', label: 'Alex Brown (QA)' },
            { value: 'emma', label: 'Emma Davis (PM)' },
          ]}
          description="Choose team members for this project"
          maxDisplayedValues={3}
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">User Permissions:</Text>
        <Multiselect
          label="Permissions"
          placeholder="Select permissions"
          data={[
            'read', 'write', 'delete', 'admin', 'manage-users',
            'manage-settings', 'view-analytics', 'export-data',
            'manage-billing', 'manage-integrations'
          ]}
          required
          description="Grant specific permissions to this user"
          maxDisplayedValues={2}
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">Notification Preferences:</Text>
        <Multiselect
          label="Notifications"
          placeholder="Choose notification types"
          data={[
            { value: 'email', label: 'Email Notifications' },
            { value: 'push', label: 'Push Notifications' },
            { value: 'sms', label: 'SMS Notifications' },
            { value: 'slack', label: 'Slack Integration' },
            { value: 'discord', label: 'Discord Integration' },
            { value: 'webhook', label: 'Webhook Notifications' },
          ]}
          showOptional
          description="Select how you'd like to receive notifications"
          maxDisplayedValues={2}
        />
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiselect for team management and permission assignment.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Stack gap="xl" w={500}>
      <Title order={3} size="md" fw={500} mb="xs">Common Use Cases</Title>
      
      <div>
        <Text size="sm" fw={500} mb="sm">1. Skill Assessment:</Text>
        <Multiselect
          label="Technical Skills"
          placeholder="Select your skills"
          data={technologies}
          description="Choose all technologies you're proficient in"
          maxDisplayedValues={3}
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">2. Filter Selection:</Text>
        <Multiselect
          label="Filters"
          placeholder="Apply filters"
          data={[
            'Price: Low to High', 'Price: High to Low', 'Most Popular',
            'Newest First', 'Best Rated', 'On Sale', 'Free Shipping'
          ]}
          showOptional
          description="Filter search results"
          maxDisplayedValues={2}
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">3. Multi-language Support:</Text>
        <Multiselect
          label="Languages"
          placeholder="Select languages"
          data={[
            { value: 'en', label: 'English' },
            { value: 'es', label: 'Spanish' },
            { value: 'fr', label: 'French' },
            { value: 'de', label: 'German' },
            { value: 'it', label: 'Italian' },
            { value: 'pt', label: 'Portuguese' },
            { value: 'ja', label: 'Japanese' },
            { value: 'zh', label: 'Chinese' },
          ]}
          required
          description="Select supported languages for your app"
          maxDisplayedValues={2}
        />
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">4. Feature Selection:</Text>
        <Multiselect
          label="Features"
          placeholder="Choose features"
          data={[
            'Dark Mode', 'Notifications', 'Offline Mode', 'Analytics',
            'Social Login', 'Two-Factor Auth', 'API Access', 'Custom Themes'
          ]}
          showOptional
          description="Select features to enable"
          maxDisplayedValues={3}
        />
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of Multiselect usage in different application contexts.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    label: 'Technologies',
    placeholder: 'Pick one or more technologies',
    data: technologies,
    size: 'md',
    required: false,
    showOptional: false,
    disabled: false,
    searchable: true,
    maxDisplayedValues: 2,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the Multiselect and see different combinations.',
      },
    },
  },
}; 