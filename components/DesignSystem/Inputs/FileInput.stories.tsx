import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Group } from '@mantine/core';
import { FileInput } from './FileInput';
import { useState } from 'react';
import { Title } from '../Typography/Title';
import { Text } from '../Typography/Text';
import { RiUploadLine, RiImageLine, RiFileTextLine, RiFilePdfLine } from '@remixicon/react';

const meta: Meta<typeof FileInput> = {
  title: 'Design System/Inputs/FileInput',
  component: FileInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'FileInput component for file uploads with consistent design system styling and file type restrictions.',
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
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection',
    },
    clearable: {
      control: 'boolean',
      description: 'Show clear button when file is selected',
    },
    accept: {
      control: 'text',
      description: 'Accepted file types (MIME types)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Upload File',
    placeholder: 'Choose file',
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="md" w={350}>
      <FileInput size="xs" label="Extra Small" placeholder="Choose file (xs)" />
      <FileInput size="sm" label="Small" placeholder="Choose file (sm)" />
      <FileInput size="md" label="Medium" placeholder="Choose file (md)" />
      <FileInput size="lg" label="Large" placeholder="Choose file (lg)" />
      <FileInput size="xl" label="Extra Large" placeholder="Choose file (xl)" />
    </Stack>
  ),
};

export const LabelVariants: Story = {
  render: () => (
    <Stack gap="md" w={350}>
      <FileInput label="Required Document" placeholder="Upload required file" required />
      <FileInput label="Optional Attachment" placeholder="Upload optional file" showOptional />
      <FileInput placeholder="No label file input" />
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack gap="md" w={350}>
      <FileInput label="Default" placeholder="Choose file" />
      <FileInput label="Disabled" placeholder="Disabled file input" disabled />
      <FileInput label="With Error" placeholder="Choose file" error="File is required" />
      <FileInput label="Clearable" placeholder="Choose file" clearable />
    </Stack>
  ),
};

export const FileTypes: Story = {
  render: () => (
    <Stack gap="md" w={400}>
      <FileInput
        label="Image Upload"
        placeholder="Upload image file"
        accept="image/png,image/jpeg,image/gif,image/webp"
        leftIcon={<RiImageLine size={16} />}
        description="Accepts PNG, JPEG, GIF, and WebP files"
      />
      <FileInput
        label="Document Upload"
        placeholder="Upload document"
        accept=".pdf,.doc,.docx,.txt"
        leftIcon={<RiFileTextLine size={16} />}
        description="Accepts PDF, Word documents, and text files"
      />
      <FileInput
        label="PDF Only"
        placeholder="Upload PDF file"
        accept="application/pdf"
        leftIcon={<RiFilePdfLine size={16} />}
        description="Only PDF files are allowed"
      />
      <FileInput
        label="Any File Type"
        placeholder="Upload any file"
        leftIcon={<RiUploadLine size={16} />}
        description="All file types are accepted"
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'FileInput with different file type restrictions and appropriate icons.',
      },
    },
  },
};

export const MultipleFiles: Story = {
  render: () => (
    <Stack gap="md" w={400}>
      <FileInput
        label="Multiple Images"
        placeholder="Select multiple images"
        multiple
        accept="image/*"
        description="You can select multiple image files at once"
      />
      <FileInput
        label="Multiple Documents"
        placeholder="Select multiple documents"
        multiple
        accept=".pdf,.doc,.docx"
        description="Select multiple PDF or Word documents"
      />
      <FileInput
        label="Any Multiple Files"
        placeholder="Select multiple files"
        multiple
        clearable
        description="Select any number of files of any type"
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'FileInput configured for multiple file selection.',
      },
    },
  },
};

export const ControlledExample: Story = {
  render: () => {
    const [profileImage, setProfileImage] = useState<File | null>(null);
    const [documents, setDocuments] = useState<File[]>([]);
    const [resume, setResume] = useState<File | null>(null);
    
    return (
      <Stack gap="lg" w={400}>
        <FileInput
          label="Profile Image"
          placeholder="Upload profile picture"
          value={profileImage}
          onChange={(file) => setProfileImage(file as File | null)}
          accept="image/*"
          clearable
          description="Upload a profile picture (optional)"
          showOptional
        />
        
        <FileInput
          label="Resume"
          placeholder="Upload your resume"
          value={resume}
          onChange={(file) => setResume(file as File | null)}
          accept=".pdf,.doc,.docx"
          required
          description="Upload your resume in PDF or Word format"
        />
        
        <FileInput
          label="Supporting Documents"
          placeholder="Upload additional documents"
          value={documents}
          onChange={(files) => setDocuments(files as File[])}
          multiple
          clearable
          description="Upload any supporting documents"
          showOptional
        />
        
        <div style={{ 
          padding: '12px', 
          backgroundColor: 'var(--mantine-color-gray-0)',
          borderRadius: '8px',
          border: '1px solid var(--mantine-color-gray-3)'
        }}>
          <Text size="sm" fw={500} mb="xs">Selected Files:</Text>
          <Text size="sm">Profile Image: {profileImage?.name || 'None'}</Text>
          <Text size="sm">Resume: {resume?.name || 'None'}</Text>
          <Text size="sm">Documents: {documents.length} file(s)</Text>
        </div>
      </Stack>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of controlled FileInput components with state management.',
      },
    },
  },
};

export const FormExample: Story = {
  render: () => (
    <Stack gap="md" w={450}>
      <Title order={3} size="md" fw={500} mb="xs">Job Application Form</Title>
      
      <FileInput
        label="Resume"
        placeholder="Upload your resume"
        accept=".pdf,.doc,.docx"
        required
        description="Upload your resume in PDF or Word format"
      />
      
      <FileInput
        label="Cover Letter"
        placeholder="Upload cover letter"
        accept=".pdf,.doc,.docx,.txt"
        description="Optional cover letter"
        showOptional
      />
      
      <FileInput
        label="Portfolio"
        placeholder="Upload portfolio files"
        multiple
        accept="image/*,.pdf"
        description="Upload images or PDF files showcasing your work"
        showOptional
      />
      
      <FileInput
        label="References"
        placeholder="Upload reference letters"
        multiple
        accept=".pdf,.doc,.docx"
        description="Upload reference letters from previous employers"
        showOptional
      />
      
      <FileInput
        label="Certifications"
        placeholder="Upload certificates"
        multiple
        accept="image/*,.pdf"
        description="Upload any relevant certifications or licenses"
        showOptional
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of FileInput components used in a job application form.',
      },
    },
  },
};

export const UseCases: Story = {
  render: () => (
    <Stack gap="lg" w={500}>
      <Title order={3} size="md" fw={500} mb="xs">Common Use Cases</Title>
      
      <Stack gap="md">
        <FileInput
          label="Avatar Upload"
          placeholder="Choose profile picture"
          accept="image/jpeg,image/png"
          clearable
          leftIcon={<RiImageLine size={16} />}
          description="Upload a profile picture (JPEG or PNG, max 5MB)"
        />
        
        <FileInput
          label="Document Verification"
          placeholder="Upload ID document"
          accept="image/*,.pdf"
          required
          leftIcon={<RiFileTextLine size={16} />}
          description="Upload a photo of your ID or passport"
        />
        
        <FileInput
          label="Bulk File Upload"
          placeholder="Select multiple files"
          multiple
          clearable
          leftIcon={<RiUploadLine size={16} />}
          description="Upload multiple files for batch processing"
        />
        
        <FileInput
          label="Invoice Upload"
          placeholder="Upload invoice"
          accept=".pdf,.jpg,.jpeg,.png"
          leftIcon={<RiFilePdfLine size={16} />}
          description="Upload invoice as PDF or image"
        />
        
        <FileInput
          label="Data Import"
          placeholder="Upload CSV file"
          accept=".csv,.xlsx,.xls"
          leftIcon={<RiFileTextLine size={16} />}
          description="Upload spreadsheet for data import"
        />
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of FileInput usage in different application contexts.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    label: 'Interactive FileInput',
    placeholder: 'Choose file...',
    size: 'md',
    clearable: false,
    multiple: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls below to interact with the FileInput and see different combinations.',
      },
    },
  },
}; 