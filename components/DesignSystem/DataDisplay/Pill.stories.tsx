import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Box } from '@mantine/core';
import { Inline } from '@/components/DesignSystem';
import { Pill } from './Pill';
import { useState } from 'react';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';
import { Button } from '../Buttons/Button';
import { Paper } from '../Misc/Paper';

const meta: Meta<typeof Pill> = {
  title: 'Design System/Data Display/Pill',
  component: Pill,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Pill component for displaying tags, labels, or removable items with consistent gray styling. Disabled state is not supported.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Pill size',
    },
    withRemoveButton: {
      control: 'boolean',
      description: 'Whether the pill can be removed',
    },
    children: {
      control: 'text',
      description: 'Pill content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Pill',
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="md">
      <Inline gap="sm">
        <Pill size="xs">Extra Small</Pill>
        <Pill size="sm">Small</Pill>
        <Pill size="md">Medium</Pill>
        <Pill size="lg">Large</Pill>
        <Pill size="xl">Extra Large</Pill>
      </Inline>
      <Inline gap="sm">
        <Pill size="xs">XS</Pill>
        <Pill size="sm">SM</Pill>
        <Pill size="md">MD</Pill>
        <Pill size="lg">LG</Pill>
        <Pill size="xl">XL</Pill>
      </Inline>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pill component in different sizes.',
      },
    },
  },
};

export const WithRemoveButton: Story = {
  render: () => (
    <Inline gap="sm">
      <Pill size="xs" withRemoveButton onRemove={() => console.log('Remove XS')}>
        Extra Small
      </Pill>
      <Pill size="sm" withRemoveButton onRemove={() => console.log('Remove SM')}>
        Small
      </Pill>
      <Pill size="md" withRemoveButton onRemove={() => console.log('Remove MD')}>
        Medium
      </Pill>
      <Pill size="lg" withRemoveButton onRemove={() => console.log('Remove LG')}>
        Large
      </Pill>
      <Pill size="xl" withRemoveButton onRemove={() => console.log('Remove XL')}>
        Extra Large
      </Pill>
    </Inline>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pills with remove buttons in different sizes.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <Stack gap="md">
      <Inline gap="sm">
        <Text size="sm" fw={500}>Normal:</Text>
        <Pill>Normal Pill</Pill>
        <Pill withRemoveButton onRemove={() => console.log('Remove')}>
          With Remove
        </Pill>
      </Inline>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different states of the Pill component.',
      },
    },
  },
};

export const RemovablePills: Story = {
  render: () => {
    const [pills, setPills] = useState([
      { id: 1, label: 'React' },
      { id: 2, label: 'TypeScript' },
      { id: 3, label: 'JavaScript' },
      { id: 4, label: 'Node.js' },
      { id: 5, label: 'Next.js' },
    ]);
    
    const removePill = (id: number) => {
      setPills(prev => prev.filter(pill => pill.id !== id));
    };
    
    const resetPills = () => {
      setPills([
        { id: 1, label: 'React' },
        { id: 2, label: 'TypeScript' },
        { id: 3, label: 'JavaScript' },
        { id: 4, label: 'Node.js' },
        { id: 5, label: 'Next.js' },
      ]);
    };
    
    return (
      <Stack gap="md" w={400}>
        <Text size="sm" fw={500}>Technologies (Click × to remove):</Text>
        <Inline gap="xs">
          {pills.map(pill => (
            <Pill
              key={pill.id}
              withRemoveButton
              onRemove={() => removePill(pill.id)}
            >
              {pill.label}
            </Pill>
          ))}
          {pills.length === 0 && (
            <Text size="sm" c="dimmed">No pills remaining</Text>
          )}
        </Inline>
        {pills.length < 5 && (
          <Button 
            variant="outline"
            size="xs"
            onClick={resetPills}
          >
            Reset Pills
          </Button>
        )}
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example of removable pills with state management.',
      },
    },
  },
};

export const TagExamples: Story = {
  render: () => (
    <Stack gap="lg" w={500}>
      <Box>
        <Text size="sm" fw={500} mb="xs">Article Tags:</Text>
        <Inline gap="xs">
          <Pill size="sm">JavaScript</Pill>
          <Pill size="sm">React</Pill>
          <Pill size="sm">Tutorial</Pill>
          <Pill size="sm">Beginner</Pill>
          <Pill size="sm">Frontend</Pill>
        </Inline>
      </Box>
      
      <Box>
        <Text size="sm" fw={500} mb="xs">Skills:</Text>
        <Inline gap="xs">
          <Pill>TypeScript</Pill>
          <Pill>Node.js</Pill>
          <Pill>Python</Pill>
          <Pill>GraphQL</Pill>
          <Pill>Docker</Pill>
          <Pill>AWS</Pill>
        </Inline>
      </Box>
      
      <Box>
        <Text size="sm" fw={500} mb="xs">Categories:</Text>
        <Inline gap="xs">
          <Pill size="lg">Web Development</Pill>
          <Pill size="lg">Mobile Apps</Pill>
          <Pill size="lg">DevOps</Pill>
          <Pill size="lg">Design</Pill>
        </Inline>
      </Box>
      
      <Box>
        <Text size="sm" fw={500} mb="xs">Project Labels:</Text>
        <Inline gap="xs">
          <Pill size="xs">v1.0</Pill>
          <Pill size="xs">beta</Pill>
          <Pill size="xs">stable</Pill>
          <Pill size="xs">deprecated</Pill>
          <Pill size="xs">experimental</Pill>
        </Inline>
      </Box>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of using pills as non-removable tags and labels.',
      },
    },
  },
};

export const FilterPills: Story = {
  render: () => {
    const [selectedFilters, setSelectedFilters] = useState<string[]>(['react', 'typescript']);
    
    const filters = [
      'React', 'Vue', 'Angular', 'Svelte',
      'TypeScript', 'JavaScript', 'Python', 'Java',
      'Frontend', 'Backend', 'Full Stack', 'Mobile'
    ];
    
    const toggleFilter = (filter: string) => {
      const filterKey = filter.toLowerCase().replace(' ', '');
      setSelectedFilters(prev => 
        prev.includes(filterKey)
          ? prev.filter(f => f !== filterKey)
          : [...prev, filterKey]
      );
    };
    
    return (
      <Stack gap="md" w={500}>
        <Text size="sm" fw={500}>Active Filters (Click to remove):</Text>
        <Inline gap="xs">
          {filters
            .filter(filter => selectedFilters.includes(filter.toLowerCase().replace(' ', '')))
            .map(filter => (
              <Pill
                key={filter}
                withRemoveButton
                onRemove={() => toggleFilter(filter)}
              >
                {filter}
              </Pill>
            ))}
          {selectedFilters.length === 0 && (
            <Text size="sm" c="dimmed">No active filters</Text>
          )}
        </Inline>
        
        <Text size="sm" fw={500}>Available Filters (Click to add):</Text>
        <Inline gap="xs">
          {filters
            .filter(filter => !selectedFilters.includes(filter.toLowerCase().replace(' ', '')))
            .map(filter => (
              <Button
                key={filter}
                variant="outline"
                size="xs"
                onClick={() => toggleFilter(filter)}
              >
                + {filter}
              </Button>
            ))}
        </Inline>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example using pills for filter management.',
      },
    },
  },
};

export const ControlledExample: Story = {
  render: () => {
    const [selectedTags, setSelectedTags] = useState<string[]>(['javascript', 'react']);
    const [selectedCategories, setSelectedCategories] = useState<string[]>(['frontend']);
    const [selectedSkills, setSelectedSkills] = useState<string[]>(['typescript', 'nodejs']);
    
    const removeTag = (category: 'tags' | 'categories' | 'skills', value: string) => {
      switch (category) {
        case 'tags':
          setSelectedTags(prev => prev.filter(tag => tag !== value));
          break;
        case 'categories':
          setSelectedCategories(prev => prev.filter(cat => cat !== value));
          break;
        case 'skills':
          setSelectedSkills(prev => prev.filter(skill => skill !== value));
          break;
      }
    };
    
    const tagLabels: Record<string, string> = {
      javascript: 'JavaScript',
      react: 'React',
      vue: 'Vue.js',
      angular: 'Angular',
      frontend: 'Frontend',
      backend: 'Backend',
      fullstack: 'Full Stack',
      typescript: 'TypeScript',
      nodejs: 'Node.js',
      python: 'Python',
    };
    
    return (
      <Stack gap="lg" w={500}>
        <Box>
          <Text size="sm" fw={500} mb="sm">Technology Tags:</Text>
          <Inline gap="xs">
            {selectedTags.map(tag => (
              <Pill
                key={tag}
                size="sm"
                withRemoveButton
                onRemove={() => removeTag('tags', tag)}
              >
                {tagLabels[tag]}
              </Pill>
            ))}
            {selectedTags.length === 0 && (
              <Text size="sm" c="dimmed">No tags selected</Text>
            )}
          </Inline>
        </Box>
        
        <Box>
          <Text size="sm" fw={500} mb="sm">Categories:</Text>
          <Inline gap="xs">
            {selectedCategories.map(category => (
              <Pill
                key={category}
                withRemoveButton
                onRemove={() => removeTag('categories', category)}
              >
                {tagLabels[category]}
              </Pill>
            ))}
            {selectedCategories.length === 0 && (
              <Text size="sm" c="dimmed">No categories selected</Text>
            )}
          </Inline>
        </Box>
        
        <Box>
          <Text size="sm" fw={500} mb="sm">Skills:</Text>
          <Inline gap="xs">
            {selectedSkills.map(skill => (
              <Pill
                key={skill}
                size="lg"
                withRemoveButton
                onRemove={() => removeTag('skills', skill)}
              >
                {tagLabels[skill]}
              </Pill>
            ))}
            {selectedSkills.length === 0 && (
              <Text size="sm" c="dimmed">No skills selected</Text>
            )}
          </Inline>
        </Box>
        
        <Paper variant="border">
          <Text size="sm" fw={500} mb="xs">Summary:</Text>
          <Text size="sm">
            Tags: {selectedTags.length} | 
            Categories: {selectedCategories.length} | 
            Skills: {selectedSkills.length}
          </Text>
        </Paper>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Complex example with multiple controlled pill groups.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Stack gap="lg" w={600}>
      <Title order={3} size="md" fw={500} mb="xs">Common Use Cases</Title>
      
      <Box>
        <Text size="sm" fw={500} mb="sm">1. Content Tags (Non-removable):</Text>
        <Inline gap="xs">
          <Pill size="sm">React</Pill>
          <Pill size="sm">TypeScript</Pill>
          <Pill size="sm">Tutorial</Pill>
          <Pill size="sm">Beginner</Pill>
        </Inline>
      </Box>
      
      <Box>
        <Text size="sm" fw={500} mb="sm">2. Selected Items (Removable):</Text>
        <Inline gap="xs">
          <Pill withRemoveButton onRemove={() => console.log('Remove JavaScript')}>
            JavaScript
          </Pill>
          <Pill withRemoveButton onRemove={() => console.log('Remove Python')}>
            Python
          </Pill>
          <Pill withRemoveButton onRemove={() => console.log('Remove Java')}>
            Java
          </Pill>
        </Inline>
      </Box>
      
      <Box>
        <Text size="sm" fw={500} mb="sm">3. User Skills:</Text>
        <Inline gap="xs">
          <Pill>Frontend Development</Pill>
          <Pill>UI/UX Design</Pill>
          <Pill>Project Management</Pill>
          <Pill>Team Leadership</Pill>
        </Inline>
      </Box>
      
      <Box>
        <Text size="sm" fw={500} mb="sm">4. Version Labels:</Text>
        <Inline gap="xs">
          <Pill size="xs">v2.1.0</Pill>
          <Pill size="xs">stable</Pill>
          <Pill size="xs">LTS</Pill>
          <Pill size="xs">production</Pill>
        </Inline>
      </Box>
      
      <Box>
        <Text size="sm" fw={500} mb="sm">5. Filter Chips:</Text>
        <Inline gap="xs">
          <Pill size="lg" withRemoveButton onRemove={() => console.log('Remove Web Dev')}>
            Web Development
          </Pill>
          <Pill size="lg" withRemoveButton onRemove={() => console.log('Remove Mobile')}>
            Mobile Apps
          </Pill>
          <Pill size="lg" withRemoveButton onRemove={() => console.log('Remove DevOps')}>
            DevOps
          </Pill>
        </Inline>
      </Box>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of Pill usage in different application contexts.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    children: 'Interactive Pill',
    size: 'md',
    withRemoveButton: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the Pill and see different combinations.',
      },
    },
  },
}; 