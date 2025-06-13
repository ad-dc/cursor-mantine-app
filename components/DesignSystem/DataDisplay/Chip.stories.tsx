import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Group } from '@mantine/core';
import { Chip } from './Chip';
import { useState } from 'react';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';

const meta: Meta<typeof Chip> = {
  title: 'Design System/Data Display/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Chip component for displaying tags, filters, or selectable options with semantic color variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'info', 'success', 'danger', 'pending'],
      description: 'Semantic variant that determines color',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Chip size',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the chip is selected',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    children: {
      control: 'text',
      description: 'Chip content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Chip',
  },
};

export const Variants: Story = {
  render: () => (
    <Group gap="sm">
      <Chip variant="default">Default</Chip>
      <Chip variant="info">Info</Chip>
      <Chip variant="success">Success</Chip>
      <Chip variant="danger">Danger</Chip>
      <Chip variant="pending">Pending</Chip>
    </Group>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different semantic variants of the Chip component.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="md">
      <Group gap="sm">
        <Chip size="xs" variant="info">Extra Small</Chip>
        <Chip size="sm" variant="info">Small</Chip>
        <Chip size="md" variant="info">Medium</Chip>
        <Chip size="lg" variant="info">Large</Chip>
        <Chip size="xl" variant="info">Extra Large</Chip>
      </Group>
      <Group gap="sm">
        <Chip size="xs" variant="success">XS</Chip>
        <Chip size="sm" variant="success">SM</Chip>
        <Chip size="md" variant="success">MD</Chip>
        <Chip size="lg" variant="success">LG</Chip>
        <Chip size="xl" variant="success">XL</Chip>
      </Group>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Chip component in different sizes.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <Stack gap="md">
      <Group gap="sm">
        <Text size="sm" fw={500}>Default State:</Text>
        <Chip variant="info">Normal</Chip>
        <Chip variant="success">Normal</Chip>
        <Chip variant="danger">Normal</Chip>
      </Group>
      
      <Group gap="sm">
        <Text size="sm" fw={500}>Selected State:</Text>
        <Chip variant="info" checked>Selected</Chip>
        <Chip variant="success" checked>Selected</Chip>
        <Chip variant="danger" checked>Selected</Chip>
      </Group>
      
      <Group gap="sm">
        <Text size="sm" fw={500}>Disabled State:</Text>
        <Chip variant="info" disabled>Disabled</Chip>
        <Chip variant="success" disabled>Disabled</Chip>
        <Chip variant="danger" disabled>Disabled</Chip>
      </Group>
      
      <Group gap="sm">
        <Text size="sm" fw={500}>Disabled + Selected:</Text>
        <Chip variant="info" disabled checked>Disabled Selected</Chip>
        <Chip variant="success" disabled checked>Disabled Selected</Chip>
        <Chip variant="danger" disabled checked>Disabled Selected</Chip>
      </Group>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different states of the Chip component (normal, selected, disabled).',
      },
    },
  },
};

export const SelectableChips: Story = {
  render: () => {
    const [selectedChips, setSelectedChips] = useState<string[]>(['react']);
    
    const toggleChip = (value: string) => {
      setSelectedChips(prev => 
        prev.includes(value) 
          ? prev.filter(item => item !== value)
          : [...prev, value]
      );
    };
    
    const technologies = [
      { value: 'react', label: 'React', variant: 'info' as const },
      { value: 'vue', label: 'Vue', variant: 'success' as const },
      { value: 'angular', label: 'Angular', variant: 'danger' as const },
      { value: 'svelte', label: 'Svelte', variant: 'pending' as const },
      { value: 'nextjs', label: 'Next.js', variant: 'info' as const },
      { value: 'nuxt', label: 'Nuxt', variant: 'success' as const },
    ];
    
    return (
      <Stack gap="md" w={400}>
        <Text size="sm" fw={500}>Select Technologies:</Text>
        <Group gap="sm">
          {technologies.map(tech => (
            <Chip
              key={tech.value}
              variant={tech.variant}
              checked={selectedChips.includes(tech.value)}
              onChange={() => toggleChip(tech.value)}
            >
              {tech.label}
            </Chip>
          ))}
        </Group>
        <Text size="sm" c="dimmed">
          Selected: {selectedChips.length > 0 ? selectedChips.join(', ') : 'None'}
        </Text>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of selectable chips with state management.',
      },
    },
  },
};

export const FilterChips: Story = {
  render: () => {
    const [activeFilters, setActiveFilters] = useState<string[]>(['active']);
    
    const toggleFilter = (filter: string) => {
      setActiveFilters(prev => 
        prev.includes(filter) 
          ? prev.filter(f => f !== filter)
          : [...prev, filter]
      );
    };
    
    const filters = [
      { value: 'active', label: 'Active', variant: 'success' as const },
      { value: 'pending', label: 'Pending', variant: 'pending' as const },
      { value: 'completed', label: 'Completed', variant: 'info' as const },
      { value: 'cancelled', label: 'Cancelled', variant: 'danger' as const },
      { value: 'draft', label: 'Draft', variant: 'default' as const },
    ];
    
    return (
      <Stack gap="md" w={400}>
        <Text size="sm" fw={500}>Filter by Status:</Text>
        <Group gap="sm">
          {filters.map(filter => (
            <Chip
              key={filter.value}
              variant={filter.variant}
              checked={activeFilters.includes(filter.value)}
              onChange={() => toggleFilter(filter.value)}
            >
              {filter.label}
            </Chip>
          ))}
        </Group>
        <Text size="sm" c="dimmed">
          Active filters: {activeFilters.length > 0 ? activeFilters.join(', ') : 'None'}
        </Text>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of using chips as filters with different status variants.',
      },
    },
  },
};

export const TagChips: Story = {
  render: () => (
    <Stack gap="lg" w={500}>
      <div>
        <Text size="sm" fw={500} mb="xs">Article Tags:</Text>
        <Group gap="xs">
          <Chip variant="info" size="sm">JavaScript</Chip>
          <Chip variant="info" size="sm">React</Chip>
          <Chip variant="success" size="sm">Tutorial</Chip>
          <Chip variant="pending" size="sm">Beginner</Chip>
        </Group>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Project Categories:</Text>
        <Group gap="xs">
          <Chip variant="danger" size="sm">Urgent</Chip>
          <Chip variant="info" size="sm">Frontend</Chip>
          <Chip variant="success" size="sm">Backend</Chip>
          <Chip variant="default" size="sm">Design</Chip>
          <Chip variant="pending" size="sm">Review</Chip>
        </Group>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Skills:</Text>
        <Group gap="xs">
          <Chip variant="info">TypeScript</Chip>
          <Chip variant="success">Node.js</Chip>
          <Chip variant="info">Python</Chip>
          <Chip variant="pending">GraphQL</Chip>
          <Chip variant="success">Docker</Chip>
          <Chip variant="danger">Redis</Chip>
        </Group>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of using chips as non-interactive tags for categorization.',
      },
    },
  },
};

export const ControlledExample: Story = {
  render: () => {
    const [priorities, setPriorities] = useState<string[]>(['high']);
    const [categories, setCategories] = useState<string[]>(['bug', 'feature']);
    const [assignees, setAssignees] = useState<string[]>(['john']);
    
    const toggleItem = (items: string[], setItems: (items: string[]) => void, value: string) => {
      setItems(items.includes(value) 
        ? items.filter(item => item !== value)
        : [...items, value]
      );
    };
    
    return (
      <Stack gap="lg" w={500}>
        <div>
          <Text size="sm" fw={500} mb="sm">Priority Levels:</Text>
          <Group gap="sm">
            <Chip
              variant="danger"
              checked={priorities.includes('critical')}
              onChange={() => toggleItem(priorities, setPriorities, 'critical')}
            >
              Critical
            </Chip>
            <Chip
              variant="pending"
              checked={priorities.includes('high')}
              onChange={() => toggleItem(priorities, setPriorities, 'high')}
            >
              High
            </Chip>
            <Chip
              variant="info"
              checked={priorities.includes('medium')}
              onChange={() => toggleItem(priorities, setPriorities, 'medium')}
            >
              Medium
            </Chip>
            <Chip
              variant="default"
              checked={priorities.includes('low')}
              onChange={() => toggleItem(priorities, setPriorities, 'low')}
            >
              Low
            </Chip>
          </Group>
        </div>
        
        <div>
          <Text size="sm" fw={500} mb="sm">Issue Categories:</Text>
          <Group gap="sm">
            <Chip
              variant="danger"
              checked={categories.includes('bug')}
              onChange={() => toggleItem(categories, setCategories, 'bug')}
            >
              Bug
            </Chip>
            <Chip
              variant="success"
              checked={categories.includes('feature')}
              onChange={() => toggleItem(categories, setCategories, 'feature')}
            >
              Feature
            </Chip>
            <Chip
              variant="info"
              checked={categories.includes('enhancement')}
              onChange={() => toggleItem(categories, setCategories, 'enhancement')}
            >
              Enhancement
            </Chip>
            <Chip
              variant="pending"
              checked={categories.includes('documentation')}
              onChange={() => toggleItem(categories, setCategories, 'documentation')}
            >
              Documentation
            </Chip>
          </Group>
        </div>
        
        <div>
          <Text size="sm" fw={500} mb="sm">Assignees:</Text>
          <Group gap="sm">
            <Chip
              variant="info"
              checked={assignees.includes('john')}
              onChange={() => toggleItem(assignees, setAssignees, 'john')}
            >
              John Doe
            </Chip>
            <Chip
              variant="info"
              checked={assignees.includes('jane')}
              onChange={() => toggleItem(assignees, setAssignees, 'jane')}
            >
              Jane Smith
            </Chip>
            <Chip
              variant="info"
              checked={assignees.includes('bob')}
              onChange={() => toggleItem(assignees, setAssignees, 'bob')}
            >
              Bob Johnson
            </Chip>
          </Group>
        </div>
        
        <div style={{ 
          padding: '12px', 
          backgroundColor: 'var(--mantine-color-gray-0)', 
          borderRadius: '8px',
          border: '1px solid var(--mantine-color-gray-3)'
        }}>
          <Text size="sm" fw={500} mb="xs">Current Selection:</Text>
          <Text size="sm">Priorities: {priorities.join(', ') || 'None'}</Text>
          <Text size="sm">Categories: {categories.join(', ') || 'None'}</Text>
          <Text size="sm">Assignees: {assignees.join(', ') || 'None'}</Text>
        </div>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Complex example with multiple controlled chip groups for filtering and selection.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Stack gap="lg" w={600}>
      <Title order={3} size="md" fw={500} mb="xs">Common Use Cases</Title>
      
      <div>
        <Text size="sm" fw={500} mb="sm">1. Content Tags (Non-interactive):</Text>
        <Group gap="xs">
          <Chip variant="info" size="sm">React</Chip>
          <Chip variant="success" size="sm">TypeScript</Chip>
          <Chip variant="pending" size="sm">Tutorial</Chip>
          <Chip variant="default" size="sm">Beginner</Chip>
        </Group>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">2. Status Indicators:</Text>
        <Group gap="xs">
          <Chip variant="success">Active</Chip>
          <Chip variant="pending">Pending</Chip>
          <Chip variant="danger">Inactive</Chip>
          <Chip variant="info">Processing</Chip>
        </Group>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">3. Multi-select Filters:</Text>
        <Group gap="xs">
          <Chip variant="info" checked>Frontend</Chip>
          <Chip variant="success">Backend</Chip>
          <Chip variant="pending" checked>Mobile</Chip>
          <Chip variant="default">DevOps</Chip>
        </Group>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">4. Skill Tags:</Text>
        <Group gap="xs">
          <Chip variant="info" size="sm">JavaScript</Chip>
          <Chip variant="info" size="sm">Python</Chip>
          <Chip variant="success" size="sm">Docker</Chip>
          <Chip variant="success" size="sm">AWS</Chip>
          <Chip variant="pending" size="sm">GraphQL</Chip>
        </Group>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">5. Priority Labels:</Text>
        <Group gap="xs">
          <Chip variant="danger">Critical</Chip>
          <Chip variant="pending">High</Chip>
          <Chip variant="info">Medium</Chip>
          <Chip variant="default">Low</Chip>
        </Group>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of Chip usage in different application contexts.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    children: 'Interactive Chip',
    variant: 'info',
    size: 'md',
    checked: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the Chip and see different combinations.',
      },
    },
  },
}; 