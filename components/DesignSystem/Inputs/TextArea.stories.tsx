import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mantine/core';
import { TextArea } from './TextArea';
import { useState } from 'react';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';

const meta: Meta<typeof TextArea> = {
  title: 'Design System/Inputs/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'TextArea component for multi-line text input with consistent design system styling and auto-sizing capabilities.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Input size',
    },
    label: {
      control: 'text',
      description: 'Input label',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    required: {
      control: 'boolean',
      description: 'Required field (shows asterisk)',
    },
    showOptional: {
      control: 'boolean',
      description: 'Show "(Optional)" text after label',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
    description: {
      control: 'text',
      description: 'Help text below input',
    },
    rows: {
      control: 'number',
      description: 'Number of visible rows',
    },
    autosize: {
      control: 'boolean',
      description: 'Auto-resize based on content',
    },
    minRows: {
      control: 'number',
      description: 'Minimum rows when autosize is enabled',
    },
    maxRows: {
      control: 'number',
      description: 'Maximum rows when autosize is enabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Comments',
    placeholder: 'Enter your comments...',
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="md" w={400}>
      <TextArea size="xs" label="Extra Small" placeholder="xs size" rows={2} />
      <TextArea size="sm" label="Small" placeholder="sm size" rows={2} />
      <TextArea size="md" label="Medium" placeholder="md size (default)" rows={2} />
      <TextArea size="lg" label="Large" placeholder="lg size" rows={2} />
      <TextArea size="xl" label="Extra Large" placeholder="xl size" rows={2} />
    </Stack>
  ),
};

export const LabelVariants: Story = {
  render: () => (
    <Stack gap="md" w={400}>
      <TextArea label="Required Field" placeholder="This field is required" required rows={3} />
      <TextArea label="Optional Field" placeholder="This field is optional" showOptional rows={3} />
      <TextArea placeholder="No label" rows={3} />
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack gap="md" w={400}>
      <TextArea label="Default" placeholder="Enter text..." rows={3} />
      <TextArea label="Disabled" placeholder="Disabled textarea" disabled rows={3} />
      <TextArea label="With Error" placeholder="Enter text..." error="This field is required" rows={3} />
      <TextArea 
        label="With Value" 
        defaultValue="This textarea has some default content that demonstrates how text appears in the component."
        rows={3} 
      />
    </Stack>
  ),
};

export const RowVariants: Story = {
  render: () => (
    <Stack gap="md" w={400}>
      <TextArea 
        label="Small (2 rows)" 
        placeholder="Compact textarea for short messages..."
        rows={2}
      />
      <TextArea 
        label="Medium (4 rows)" 
        placeholder="Standard textarea for comments and descriptions..."
        rows={4}
      />
      <TextArea 
        label="Large (6 rows)" 
        placeholder="Large textarea for detailed content like articles or long descriptions..."
        rows={6}
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'TextArea with different row heights for various content lengths.',
      },
    },
  },
};

export const AutosizeExamples: Story = {
  render: () => (
    <Stack gap="md" w={400}>
      <TextArea 
        label="Auto-resize" 
        placeholder="Start typing and watch this textarea grow..."
        autosize
        minRows={2}
        maxRows={6}
        description="Automatically adjusts height based on content (2-6 rows)"
      />
      <TextArea 
        label="Auto-resize (Large)" 
        placeholder="This textarea can grow quite large..."
        autosize
        minRows={3}
        maxRows={10}
        description="Larger auto-resize range (3-10 rows)"
      />
      <TextArea 
        label="Fixed Height" 
        placeholder="This textarea maintains a fixed height..."
        rows={4}
        description="Fixed at 4 rows, no auto-resize"
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'TextArea with auto-sizing capabilities that adjust height based on content.',
      },
    },
  },
};

export const ControlledExample: Story = {
  render: () => {
    const [feedback, setFeedback] = useState('');
    const [notes, setNotes] = useState('');
    
    const wordCount = feedback.trim().split(/\s+/).filter(word => word.length > 0).length;
    const charCount = feedback.length;
    
    return (
      <Stack gap="md" w={400}>
        <TextArea
          label="Customer Feedback"
          placeholder="Please share your thoughts..."
          value={feedback}
          onChange={(event) => setFeedback(event.currentTarget.value)}
          autosize
          minRows={3}
          maxRows={8}
          description={`${charCount} characters, ${wordCount} words`}
        />
        
        <TextArea
          label="Internal Notes"
          placeholder="Add internal notes..."
          value={notes}
          onChange={(event) => setNotes(event.currentTarget.value)}
          rows={4}
          showOptional
        />
        
        <div style={{ 
          padding: '12px', 
          backgroundColor: 'var(--mantine-color-gray-0)',
          borderRadius: '8px',
          border: '1px solid var(--mantine-color-gray-3)'
        }}>
          <Text size="sm" fw={500} mb="xs">Content Summary:</Text>
          <Text size="sm">Feedback: {charCount} characters</Text>
          <Text size="sm">Notes: {notes.length} characters</Text>
          <Text size="sm">Total: {charCount + notes.length} characters</Text>
        </div>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of controlled TextArea components with character counting and state management.',
      },
    },
  },
};

export const FormExample: Story = {
  render: () => (
    <Stack gap="md" w={500}>
      <Title order={3} size="md" fw={500} mb="xs">Article Submission</Title>
      
      <TextArea
        label="Article Title"
        placeholder="Enter a compelling title..."
        required
        rows={2}
        description="Keep it concise and engaging"
      />
      <TextArea
        label="Article Summary"
        placeholder="Brief summary of your article..."
        required
        rows={3}
        description="2-3 sentences describing the main points"
      />
      <TextArea
        label="Article Content"
        placeholder="Write your full article here..."
        required
        autosize
        minRows={6}
        maxRows={15}
        description="Main content of your article"
      />
      <TextArea
        label="Author Bio"
        placeholder="Tell us about yourself..."
        rows={3}
        showOptional
        description="Brief biography to display with your article"
      />
      <TextArea
        label="Additional Notes"
        placeholder="Any special instructions or notes..."
        rows={2}
        showOptional
        description="Internal notes for editors"
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of TextArea components used in an article submission form.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Stack gap="lg" w={500}>
      <div>
        <Title order={4} size="sm" fw={500} mb="md">Common Use Cases</Title>
        
        <Stack gap="md">
          <TextArea
            label="Product Review"
            placeholder="Share your experience with this product..."
            rows={4}
            description="Help other customers with your honest review"
          />
          
          <TextArea
            label="Bug Report"
            placeholder="Describe the issue you encountered..."
            autosize
            minRows={3}
            maxRows={8}
            description="Please include steps to reproduce the issue"
          />
          
          <TextArea
            label="Feature Request"
            placeholder="Describe the feature you'd like to see..."
            rows={5}
            description="Explain how this feature would benefit users"
          />
          
          <TextArea
            label="Contact Message"
            placeholder="How can we help you today?"
            autosize
            minRows={4}
            maxRows={10}
            description="We'll get back to you within 24 hours"
          />
        </Stack>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Common use cases for TextArea in different contexts like reviews, support, and feedback.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    label: 'Interactive TextArea',
    placeholder: 'Start typing...',
    size: 'md',
    rows: 4,
    autosize: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the TextArea and see different combinations.',
      },
    },
  },
}; 