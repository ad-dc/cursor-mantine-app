import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mantine/core';
import { Code } from './Code';
import { Title } from './Title';
import { Text } from './Text';

const meta: Meta<typeof Code> = {
  title: 'Design System/Typography/Code',
  component: Code,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Code component for displaying inline code snippets with consistent styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the code text',
    },
    color: {
      control: 'text',
      description: 'Text color',
    },
    bg: {
      control: 'text',
      description: 'Background color',
    },
    children: {
      control: 'text',
      description: 'Code content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'console.log("Hello World")',
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="md" align="flex-start">
      <div>
        <Text size="sm" fw={500} mb="xs">Extra Small (xs):</Text>
        <Code size="xs">npm install @mantine/core</Code>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Small (sm) - Default:</Text>
        <Code size="sm">import React from 'react'</Code>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Medium (md):</Text>
        <Code size="md">const [count, setCount] = useState(0)</Code>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Large (lg):</Text>
        <Code size="lg">function App() {`{ return <div>Hello</div> }`}</Code>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Extra Large (xl):</Text>
        <Code size="xl">git commit -m "Initial commit"</Code>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different sizes for the Code component.',
      },
    },
  },
};

export const InlineUsage: Story = {
  render: () => (
    <Stack gap="md" w={500}>
      <Text>
        To install the package, run <Code>npm install react</Code> in your terminal.
      </Text>
      
      <Text>
        The <Code>useState</Code> hook allows you to add state to functional components.
      </Text>
      
      <Text>
        Use the <Code>className</Code> prop to apply custom CSS classes to your components.
      </Text>
      
      <Text>
        The API endpoint is available at <Code>/api/v1/users</Code> for user management.
      </Text>
      
      <Text>
        Set the environment variable <Code>NODE_ENV=production</Code> for production builds.
      </Text>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Code component used inline within text content.',
      },
    },
  },
};

export const CommandExamples: Story = {
  render: () => (
    <Stack gap="md" align="flex-start">
      <div>
        <Text size="sm" fw={500} mb="xs">Package Management:</Text>
        <Stack gap="xs" align="flex-start">
          <Code>npm install</Code>
          <Code>yarn add @mantine/core</Code>
          <Code>pnpm install --frozen-lockfile</Code>
        </Stack>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Git Commands:</Text>
        <Stack gap="xs" align="flex-start">
          <Code>git status</Code>
          <Code>git add .</Code>
          <Code>git commit -m "Update components"</Code>
          <Code>git push origin main</Code>
        </Stack>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Development Scripts:</Text>
        <Stack gap="xs" align="flex-start">
          <Code>npm run dev</Code>
          <Code>npm run build</Code>
          <Code>npm run test</Code>
          <Code>npm run lint</Code>
        </Stack>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Code component displaying various command examples.',
      },
    },
  },
};

export const CodeSnippets: Story = {
  render: () => (
    <Stack gap="md" align="flex-start">
      <div>
        <Text size="sm" fw={500} mb="xs">JavaScript:</Text>
        <Stack gap="xs" align="flex-start">
          <Code>const name = "John Doe"</Code>
          <Code>array.map(item =&gt; item.id)</Code>
          <Code>fetch('/api/data').then(res =&gt; res.json())</Code>
        </Stack>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">React:</Text>
        <Stack gap="xs" align="flex-start">
          <Code>import React from 'react'</Code>
          <Code>const [state, setState] = useState()</Code>
          <Code>useEffect(() =&gt; {`{}`}, [])</Code>
        </Stack>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">CSS:</Text>
        <Stack gap="xs" align="flex-start">
          <Code>display: flex</Code>
          <Code>justify-content: center</Code>
          <Code>margin: 0 auto</Code>
        </Stack>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">HTML:</Text>
        <Stack gap="xs" align="flex-start">
          <Code>&lt;div className="container"&gt;</Code>
          <Code>&lt;button onClick={`{handleClick}`}&gt;</Code>
          <Code>&lt;input type="text" placeholder="Enter name" /&gt;</Code>
        </Stack>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Code component displaying various programming language snippets.',
      },
    },
  },
};

export const FilePathsAndUrls: Story = {
  render: () => (
    <Stack gap="md" align="flex-start">
      <div>
        <Text size="sm" fw={500} mb="xs">File Paths:</Text>
        <Stack gap="xs" align="flex-start">
          <Code>/src/components/Button.tsx</Code>
          <Code>./utils/helpers.js</Code>
          <Code>../assets/images/logo.png</Code>
          <Code>~/Documents/projects/app</Code>
        </Stack>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">URLs and Endpoints:</Text>
        <Stack gap="xs" align="flex-start">
          <Code>https://api.example.com</Code>
          <Code>/api/v1/users</Code>
          <Code>localhost:3000</Code>
          <Code>https://github.com/user/repo</Code>
        </Stack>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="xs">Environment Variables:</Text>
        <Stack gap="xs" align="flex-start">
          <Code>NODE_ENV=production</Code>
          <Code>API_KEY=your_api_key_here</Code>
          <Code>DATABASE_URL=postgresql://...</Code>
          <Code>PORT=3000</Code>
        </Stack>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Code component displaying file paths, URLs, and environment variables.',
      },
    },
  },
};

export const DocumentationExamples: Story = {
  render: () => (
    <Stack gap="lg" w={600}>
      <div>
        <Title order={4} size="sm" fw={500} mb="sm">Installation</Title>
        <Text mb="sm">
          Install the required dependencies using your preferred package manager:
        </Text>
        <Code>npm install @mantine/core @mantine/hooks</Code>
      </div>
      
      <div>
        <Title order={4} size="sm" fw={500} mb="sm">Basic Usage</Title>
        <Text mb="sm">
          Import the component and use it in your React application:
        </Text>
        <Code>import {`{ Button }`} from '@mantine/core'</Code>
      </div>
      
      <div>
        <Title order={4} size="sm" fw={500} mb="sm">Configuration</Title>
        <Text mb="sm">
          Add the following configuration to your <Code>package.json</Code> file:
        </Text>
        <Code>"scripts": {`{ "dev": "next dev", "build": "next build" }`}</Code>
      </div>
      
      <div>
        <Title order={4} size="sm" fw={500} mb="sm">API Reference</Title>
        <Text mb="sm">
          The component accepts the following props: <Code>variant</Code>, <Code>size</Code>, and <Code>disabled</Code>.
        </Text>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Code component used in documentation and instructional content.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Stack gap="xl" w={700}>
      <Title order={3} size="md" fw={500} mb="xs">Common Use Cases</Title>
      
      <div>
        <Text size="sm" fw={500} mb="sm">1. Tutorial Steps:</Text>
        <Stack gap="sm">
          <Text>1. Create a new React component: <Code>touch Button.tsx</Code></Text>
          <Text>2. Import React: <Code>import React from 'react'</Code></Text>
          <Text>3. Export your component: <Code>export default Button</Code></Text>
        </Stack>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">2. Error Messages:</Text>
        <Stack gap="sm">
          <Text>
            Module not found: <Code>Cannot resolve './components/Button'</Code>
          </Text>
          <Text>
            Syntax error: <Code>Unexpected token</Code> on line 15
          </Text>
        </Stack>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">3. Configuration Examples:</Text>
        <Stack gap="sm">
          <Text>
            Set your API base URL: <Code>REACT_APP_API_URL=https://api.example.com</Code>
          </Text>
          <Text>
            Configure the build output: <Code>BUILD_PATH=./dist</Code>
          </Text>
        </Stack>
      </div>
      
      <div>
        <Text size="sm" fw={500} mb="sm">4. Code References:</Text>
        <Stack gap="sm">
          <Text>
            The <Code>handleSubmit</Code> function is called when the form is submitted.
          </Text>
          <Text>
            Use the <Code>isLoading</Code> state to show loading indicators.
          </Text>
        </Stack>
      </div>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of Code component usage in different contexts.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    children: 'Interactive Code Example',
    size: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the Code component and see different combinations.',
      },
    },
  },
}; 