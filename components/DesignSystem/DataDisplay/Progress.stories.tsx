import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mantine/core';
import { Inline } from '@/components/DesignSystem';
import { Progress } from './Progress';
import { useState, useEffect } from 'react';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';

const meta: Meta<typeof Progress> = {
  title: 'Design System/Data Display/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Progress component for displaying completion status with consistent design system styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Progress bar size',
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress value (0-100)',
    },
    animated: {
      control: 'boolean',
      description: 'Whether to show animation',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 60,
  },
  render: (args) => (
    <div style={{ width: 300 }}>
      <Progress {...args} />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="lg" w={300}>
      <div>
        <Text size="sm" fw={500} mb="xs">Extra Small (xs)</Text>
        <Progress value={25} size="xs" />
      </div>
      <div>
        <Text size="sm" fw={500} mb="xs">Small (sm)</Text>
        <Progress value={40} size="sm" />
      </div>
      <div>
        <Text size="sm" fw={500} mb="xs">Medium (md) - Default</Text>
        <Progress value={60} size="md" />
      </div>
      <div>
        <Text size="sm" fw={500} mb="xs">Large (lg)</Text>
        <Progress value={75} size="lg" />
      </div>
      <div>
        <Text size="sm" fw={500} mb="xs">Extra Large (xl)</Text>
        <Progress value={90} size="xl" />
      </div>
    </Stack>
  ),
};

export const ProgressLevels: Story = {
  render: () => (
    <Stack gap="lg" w={300}>
      <div>
        <Text size="sm" fw={500} mb="xs">Starting (10%)</Text>
        <Progress value={10} />
      </div>
      <div>
        <Text size="sm" fw={500} mb="xs">Low Progress (25%)</Text>
        <Progress value={25} />
      </div>
      <div>
        <Text size="sm" fw={500} mb="xs">Medium Progress (50%)</Text>
        <Progress value={50} />
      </div>
      <div>
        <Text size="sm" fw={500} mb="xs">High Progress (75%)</Text>
        <Progress value={75} />
      </div>
      <div>
        <Text size="sm" fw={500} mb="xs">Almost Complete (90%)</Text>
        <Progress value={90} />
      </div>
      <div>
        <Text size="sm" fw={500} mb="xs">Complete (100%)</Text>
        <Progress value={100} />
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Progress bars showing different completion levels from 0% to 100%.',
      },
    },
  },
};

export const WithAnimation: Story = {
  render: () => (
    <Stack gap="lg" w={300}>
      <div>
        <Text size="sm" fw={500} mb="xs">Static Progress</Text>
        <Progress value={65} animated={false} />
      </div>
      <div>
        <Text size="sm" fw={500} mb="xs">Animated Progress</Text>
        <Progress value={65} animated={true} />
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison between static and animated progress bars.',
      },
    },
  },
};

export const AnimatedExample: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0; // Reset to 0 when complete
          }
          return prev + 2;
        });
      }, 100);
      
      return () => clearInterval(interval);
    }, []);
    
    return (
      <Stack gap="lg" w={300}>
        <div>
          <Text size="sm" fw={500} mb="xs">Auto-incrementing Progress ({progress}%)</Text>
          <Progress value={progress} animated />
        </div>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of an animated progress bar that automatically increments.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Stack gap="lg" w={400}>
      <Title order={3} size="md" fw={500} mb="xs">Common Use Cases</Title>
      
      <Stack gap="md">
        <div>
          <Text size="sm" fw={500} mb="xs">File Upload Progress</Text>
          <Progress value={73} size="sm" />
          <Text size="xs" c="dimmed" mt="xs">Uploading document.pdf... 73% complete</Text>
        </div>
        
        <div>
          <Text size="sm" fw={500} mb="xs">Profile Completion</Text>
          <Progress value={60} />
          <Text size="xs" c="dimmed" mt="xs">Complete your profile to unlock all features</Text>
        </div>
        
        <div>
          <Text size="sm" fw={500} mb="xs">Course Progress</Text>
          <Progress value={45} size="lg" />
          <Text size="xs" c="dimmed" mt="xs">9 of 20 lessons completed</Text>
        </div>
        
        <div>
          <Text size="sm" fw={500} mb="xs">Loading Data</Text>
          <Progress value={85} animated />
          <Text size="xs" c="dimmed" mt="xs">Loading dashboard data...</Text>
        </div>
        
        <div>
          <Text size="sm" fw={500} mb="xs">Storage Usage</Text>
          <Progress value={78} size="sm" />
          <Text size="xs" c="dimmed" mt="xs">7.8 GB of 10 GB used</Text>
        </div>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of Progress usage in different application contexts.',
      },
    },
  },
};

export const MultipleProgress: Story = {
  render: () => {
    const [downloads, setDownloads] = useState([
      { name: 'Project Files.zip', progress: 45 },
      { name: 'Images.tar.gz', progress: 78 },
      { name: 'Documents.pdf', progress: 92 },
      { name: 'Backup.sql', progress: 23 }
    ]);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setDownloads(prev => prev.map(download => ({
          ...download,
          progress: Math.min(100, download.progress + Math.random() * 3)
        })));
      }, 500);
      
      return () => clearInterval(interval);
    }, []);
    
    return (
      <Stack gap="md" w={400}>
        <Title order={4} size="sm" fw={500} mb="xs">Download Manager</Title>
        
        {downloads.map((download, index) => (
          <div key={index}>
            <Inline justify="space-between" mb="xs">
              <Text size="sm" fw={500}>{download.name}</Text>
              <Text size="sm" c="dimmed">{Math.round(download.progress)}%</Text>
            </Inline>
            <Progress 
              value={download.progress} 
              size="sm" 
              animated={download.progress < 100}
            />
          </div>
        ))}
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of multiple progress bars for tracking different tasks simultaneously.',
      },
    },
  },
};

export const ProgressWithSteps: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(2);
    const totalSteps = 5;
    const progressValue = (currentStep / totalSteps) * 100;
    
    const steps = [
      'Account Setup',
      'Personal Information',
      'Preferences',
      'Verification',
      'Complete'
    ];
    
    return (
      <Stack gap="lg" w={400}>
        <div>
          <Inline justify="space-between" mb="xs">
            <Text size="sm" fw={500}>Setup Progress</Text>
            <Text size="sm" c="dimmed">Step {currentStep} of {totalSteps}</Text>
          </Inline>
          <Progress value={progressValue} size="lg" />
          <Text size="xs" c="dimmed" mt="xs">
            Current: {steps[currentStep - 1]}
          </Text>
        </div>
        
        <Inline gap="xs">
          <button 
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            style={{ 
              padding: '8px 16px', 
              border: '1px solid #ccc', 
              borderRadius: '4px',
              background: currentStep === 1 ? '#f5f5f5' : 'white',
              cursor: currentStep === 1 ? 'not-allowed' : 'pointer'
            }}
          >
            Previous
          </button>
          <button 
            onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
            disabled={currentStep === totalSteps}
            style={{ 
              padding: '8px 16px', 
              border: '1px solid #ccc', 
              borderRadius: '4px',
              background: currentStep === totalSteps ? '#f5f5f5' : 'white',
              cursor: currentStep === totalSteps ? 'not-allowed' : 'pointer'
            }}
          >
            Next
          </button>
        </Inline>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of progress bar used for step-by-step processes with navigation controls.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    value: 50,
    size: 'md',
    animated: false,
  },
  render: (args) => (
    <div style={{ width: 300 }}>
      <Progress {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the Progress component and see different combinations.',
      },
    },
  },
}; 