import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mantine/core';
import { Grid } from '@/components/DesignSystem';
import { Inline } from '@/components/DesignSystem';
import { CopyButton } from './CopyButton';
import { useState } from 'react';
import { Title } from '../../Typography/Title';
import { Text } from '../../Typography/Text';
import { Paper } from '../../Misc/Paper';
import { Card } from '../../DataDisplay/Card';
import { TextInput } from '../../Inputs/TextInput';
import { Code } from '../../Typography/Code';

const meta: Meta<typeof CopyButton> = {
  title: 'Design System/Complex Components/Utilities/CopyButton',
  component: CopyButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A reusable button component with copy-to-clipboard functionality and interactive tooltips. Shows "Copy" on hover and "Copied" after clicking, resetting when cursor leaves.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Value to copy to clipboard',
    },
    label: {
      control: 'text',
      description: 'Label for accessibility and tooltip context',
    },
    iconSize: {
      control: 'number',
      description: 'Size of the copy icon',
    },
    onCopy: {
      action: 'copied',
      description: 'Callback when copy action is performed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'Hello World',
    label: 'Text',
    onCopy: (value) => {
      navigator.clipboard.writeText(value);
      console.log('Copied:', value);
    },
  },
};

export const BasicUsage: Story = {
  render: () => {
    const [copyStatus, setCopyStatus] = useState<string>('');

    const handleCopy = (value: string, context: string) => {
      navigator.clipboard.writeText(value);
      setCopyStatus(`Copied ${context}: ${value}`);
      setTimeout(() => setCopyStatus(''), 3000);
    };

    return (
      <Stack gap="lg" w={400}>
        <Title order={3} size="md">Basic Copy Examples</Title>
        
        <Inline gap="md" align="center">
          <Text size="sm">Simple text:</Text>
          <Text fw={500}>Hello World</Text>
          <CopyButton
            value="Hello World"
            label="text"
            onCopy={(v) => handleCopy(v, "text")}
          />
        </Inline>

        <Inline gap="md" align="center">
          <Text size="sm">Email:</Text>
          <Text fw={500}>user@example.com</Text>
          <CopyButton
            value="user@example.com"
            label="email"
            onCopy={(v) => handleCopy(v, "email")}
          />
        </Inline>

        <Inline gap="md" align="center">
          <Text size="sm">Phone:</Text>
          <Text fw={500}>+1 (555) 123-4567</Text>
          <CopyButton
            value="+1 (555) 123-4567"
            label="phone number"
            onCopy={(v) => handleCopy(v, "phone")}
          />
        </Inline>

        {copyStatus && (
          <Text size="sm" c="green" fw={500}>
            {copyStatus}
          </Text>
        )}
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic usage examples with different types of content.',
      },
    },
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <Stack gap="lg" w={400}>
      <Title order={3} size="md">Different Icon Sizes</Title>
      
      <Inline gap="xl" align="center">
        <Stack gap="xs" align="center">
          <Text size="xs">Small (16px)</Text>
          <CopyButton
            value="Small icon"
            label="small text"
            iconSize={16}
            onCopy={(v) => navigator.clipboard.writeText(v)}
          />
        </Stack>

        <Stack gap="xs" align="center">
          <Text size="xs">Default (24px)</Text>
          <CopyButton
            value="Default icon"
            label="default text"
            onCopy={(v) => navigator.clipboard.writeText(v)}
          />
        </Stack>

        <Stack gap="xs" align="center">
          <Text size="xs">Large (32px)</Text>
          <CopyButton
            value="Large icon"
            label="large text"
            iconSize={32}
            onCopy={(v) => navigator.clipboard.writeText(v)}
          />
        </Stack>
      </Inline>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'CopyButton with different icon sizes for various use cases.',
      },
    },
  },
};

export const WithCodeSnippets: Story = {
  render: () => {
    const [copyStatus, setCopyStatus] = useState<string>('');

    const handleCopy = (value: string, type: string) => {
      navigator.clipboard.writeText(value);
      setCopyStatus(`Copied ${type}`);
      setTimeout(() => setCopyStatus(''), 3000);
    };

    const codeExamples = [
      {
        label: 'JavaScript',
        code: 'const greeting = "Hello, World!";',
      },
      {
        label: 'CSS',
        code: '.button { background: #007bff; color: white; }',
      },
      {
        label: 'HTML',
        code: '<div class="container"><h1>Title</h1></div>',
      },
      {
        label: 'JSON',
        code: '{"name": "John", "age": 30, "city": "New York"}',
      },
    ];

    return (
      <Stack gap="lg" w={600}>
        <Title order={3} size="md">Code Snippet Examples</Title>
        
                 {codeExamples.map((example, index) => (
           <Paper key={index}>
             <Inline gap="sm" align="flex-start" mb="xs">
               <Text size="sm" fw={500}>{example.label}:</Text>
               <CopyButton
                 value={example.code}
                 label={`${example.label} code`}
                 iconSize={16}
                 onCopy={(v) => handleCopy(v, example.label)}
               />
             </Inline>
             <Code block>{example.code}</Code>
           </Paper>
         ))}

        {copyStatus && (
          <Text size="sm" c="green" fw={500}>
            {copyStatus}
          </Text>
        )}
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Using CopyButton with code snippets and formatted content.',
      },
    },
  },
};

export const CredentialsExample: Story = {
  render: () => {
    const [copyStatus, setCopyStatus] = useState<string>('');

    const handleCopy = (value: string, type: string) => {
      navigator.clipboard.writeText(value);
      setCopyStatus(`Copied ${type}`);
      setTimeout(() => setCopyStatus(''), 2000);
    };

    const credentials = [
      { label: 'API Key', value: 'sk-1234567890abcdefghijklmnopqrstuvwxyz', sensitive: true },
      { label: 'Secret Key', value: 'secret_abcdef123456789', sensitive: true },
      { label: 'Database URL', value: 'postgresql://user:pass@localhost:5432/db', sensitive: true },
      { label: 'Webhook URL', value: 'https://api.example.com/webhooks/abc123', sensitive: false },
    ];

    return (
      <Stack gap="lg" w={500}>
        <Title order={3} size="md">API Credentials</Title>
        
        <Card>
          <Stack gap="md">
            {credentials.map((cred, index) => (
              <Inline key={index} gap="sm" align="center">
                <Text size="sm" c="dimmed" w={100}>
                  {cred.label}:
                </Text>
                <Code 
                  style={{ 
                    flex: 1, 
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {cred.sensitive ? cred.value.substring(0, 20) + '...' : cred.value}
                </Code>
                <CopyButton
                  value={cred.value}
                  label={cred.label}
                  iconSize={16}
                  onCopy={(v) => handleCopy(v, cred.label)}
                />
              </Inline>
            ))}
          </Stack>
        </Card>

        {copyStatus && (
          <Text size="sm" c="green" fw={500}>
            ✓ {copyStatus}
          </Text>
        )}
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world example with API credentials and sensitive data.',
      },
    },
  },
};

export const WithInputFields: Story = {
  render: () => {
    const [copyStatus, setCopyStatus] = useState<string>('');
    const [formData, setFormData] = useState({
      username: 'john_doe_2024',
      email: 'john.doe@company.com',
      userId: 'usr_1234567890',
      apiToken: 'tok_abcdefghijklmnopqrstuvwxyz123456',
    });

    const handleCopy = (value: string, field: string) => {
      navigator.clipboard.writeText(value);
      setCopyStatus(`Copied ${field}`);
      setTimeout(() => setCopyStatus(''), 2000);
    };

    return (
      <Stack gap="lg" w={400}>
        <Title order={3} size="md">Form Fields with Copy</Title>
        
        <Stack gap="md">
          <Inline gap="xs" align="flex-end">
            <TextInput
              label="Username"
              value={formData.username}
              readOnly
              style={{ flex: 1 }}
            />
            <CopyButton
              value={formData.username}
              label="username"
              onCopy={(v) => handleCopy(v, "username")}
            />
          </Inline>

          <Inline gap="xs" align="flex-end">
            <TextInput
              label="Email"
              value={formData.email}
              readOnly
              style={{ flex: 1 }}
            />
            <CopyButton
              value={formData.email}
              label="email"
              onCopy={(v) => handleCopy(v, "email")}
            />
          </Inline>

          <Inline gap="xs" align="flex-end">
            <TextInput
              label="User ID"
              value={formData.userId}
              readOnly
              style={{ flex: 1 }}
            />
            <CopyButton
              value={formData.userId}
              label="user ID"
              onCopy={(v) => handleCopy(v, "user ID")}
            />
          </Inline>

          <Inline gap="xs" align="flex-end">
            <TextInput
              label="API Token"
              value={formData.apiToken}
              readOnly
              type="password"
              style={{ flex: 1 }}
            />
            <CopyButton
              value={formData.apiToken}
              label="API token"
              onCopy={(v) => handleCopy(v, "API token")}
            />
          </Inline>
        </Stack>

        {copyStatus && (
          <Text size="sm" c="green" fw={500}>
            ✓ {copyStatus}
          </Text>
        )}
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'CopyButton integrated with form fields for easy data copying.',
      },
    },
  },
};

export const SystemInformation: Story = {
  render: () => {
    const [copyStatus, setCopyStatus] = useState<string>('');

    const handleCopy = (value: string, type: string) => {
      navigator.clipboard.writeText(value);
      setCopyStatus(`Copied ${type}`);
      setTimeout(() => setCopyStatus(''), 2000);
    };

    const systemInfo = [
      { label: 'Server ID', value: 'srv-prod-web-01', category: 'Infrastructure' },
      { label: 'IP Address', value: '192.168.1.100', category: 'Network' },
      { label: 'MAC Address', value: '00:1B:44:11:3A:B7', category: 'Network' },
      { label: 'Docker Image', value: 'myapp:v2.1.0-alpine', category: 'Deployment' },
      { label: 'Container ID', value: 'c8f4b8d2e1a9', category: 'Deployment' },
      { label: 'Build Hash', value: 'a1b2c3d4e5f6g7h8i9j0', category: 'Build' },
    ];

    const groupedInfo = systemInfo.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {} as Record<string, typeof systemInfo>);

    return (
      <Stack gap="lg" w={600}>
        <Title order={3} size="md">System Information</Title>
        
        <Grid cols={2} spacing="md">
          {Object.entries(groupedInfo).map(([category, items]) => (
            <Card key={category}>
              <Stack gap="sm">
                <Title order={4} size="sm" c="blue">
                  {category}
                </Title>
                {items.map((item, index) => (
                  <Inline key={index} gap="xs" align="center">
                    <Text size="xs" c="dimmed" w={80}>
                      {item.label}:
                    </Text>
                    <Code size="xs" style={{ flex: 1 }}>
                      {item.value}
                    </Code>
                    <CopyButton
                      value={item.value}
                      label={item.label}
                      iconSize={14}
                      onCopy={(v) => handleCopy(v, item.label)}
                    />
                  </Inline>
                ))}
              </Stack>
            </Card>
          ))}
        </Grid>

        {copyStatus && (
          <Text size="sm" c="green" fw={500}>
            ✓ {copyStatus}
          </Text>
        )}
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'System information dashboard with categorized copyable data.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    value: 'Interactive Example',
    label: 'example text',
    iconSize: 24,
    onCopy: (value) => {
      navigator.clipboard.writeText(value);
      console.log('Copied:', value);
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the CopyButton and see different combinations.',
      },
    },
  },
}; 