'use client';

import React, { useState } from 'react';
import { Container, Title, Grid, Paper, Stack, Group, Code, Button, Text } from '@mantine/core';
import { Badge } from '@/components/DesignSystem';

export default function BadgeTestPage() {
  const [figmaImage, setFigmaImage] = useState<string | null>(null);
  const [figmaCode, setFigmaCode] = useState<string | null>(null);
  const [selectedNodeId, setSelectedNodeId] = useState<string>('');

  // Test different Badge variants
  const badgeVariants = [
    { variant: 'filled' as const, color: 'default' as const, children: 'Default' },
    { variant: 'filled' as const, color: 'info' as const, children: 'Info' },
    { variant: 'filled' as const, color: 'success' as const, children: 'Success' },
    { variant: 'filled' as const, color: 'danger' as const, children: 'Danger' },
    { variant: 'filled' as const, color: 'pending' as const, children: 'Pending' },
    { variant: 'outline' as const, color: 'default' as const, children: 'Default' },
    { variant: 'outline' as const, color: 'info' as const, children: 'Info' },
    { variant: 'outline' as const, color: 'success' as const, children: 'Success' },
    { variant: 'outline' as const, color: 'danger' as const, children: 'Danger' },
    { variant: 'outline' as const, color: 'pending' as const, children: 'Pending' },
  ];

  const handleGetFigmaImage = () => {
    // Real Figma image from MCP function result
    setFigmaImage('http://localhost:3845/assets/05d501af24c405199ebbe46530cd6c4dbd4a99fc.svg');
  };

  const handleGetFigmaCode = () => {
    // Real generated code from Figma (dev mode, not Code Connect)
    setFigmaCode(`// Generated from Figma Dev Mode (not Code Connect)
interface BadgeProps {
    type?: 'info' | 'success' | 'danger' | 'pending' | 'default';
    variant?: 'filled' | 'default';
}

function Badge({ type = "info", variant = "default" }: BadgeProps) {
    return (
        <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative size-full">
            <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-row gap-[5px] h-[18px] items-center justify-center px-2 py-0 relative rounded shrink-0">
                <div className="absolute border border-[#326fde] border-solid inset-0 pointer-events-none rounded"/>
                <div className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#326fde] text-[10px] text-left text-nowrap tracking-[0.156px] uppercase">
                    <p className="adjustLetterSpacing block leading-[16px] whitespace-pre">BADGE</p>
                </div>
            </div>
        </div>
    );
}`);
  };

  return (
    <Container size="xl" py="xl">
      <Stack gap="xl">
        {/* Header */}
        <div>
          <Title order={1} mb="md">Badge Component Test</Title>
          <Text c="dimmed">
            Test the Badge component Figma Code Connect integration by comparing Figma designs with rendered components.
          </Text>
        </div>

        {/* Figma Integration Section */}
        <Paper p="md" withBorder>
          <Title order={2} size="h3" mb="md">Figma Integration Test</Title>
          
          <Grid>
            <Grid.Col span={6}>
              <Stack>
                <Group>
                  <Button onClick={handleGetFigmaImage} variant="outline">
                    Get Figma Image
                  </Button>
                  <Button onClick={handleGetFigmaCode} variant="outline">
                    Get Figma Code
                  </Button>
                </Group>
                
                {figmaImage && (
                  <div>
                    <Text fw={500} mb="xs">Figma Design:</Text>
                    <img 
                      src={figmaImage} 
                      alt="Figma Badge Design" 
                      style={{ border: '1px solid #e0e0e0', borderRadius: '4px' }}
                    />
                  </div>
                )}
                
                {figmaCode && (
                  <div>
                    <Text fw={500} mb="xs">Generated Code:</Text>
                    <Code block>{figmaCode}</Code>
                  </div>
                )}
              </Stack>
            </Grid.Col>
            
                         <Grid.Col span={6}>
               <Stack>
                 <Text fw={500}>Rendered Component (Design System):</Text>
                 <Group>
                   <Badge variant="outline" color="info">
                     BADGE
                   </Badge>
                 </Group>
                 
                 <Text fw={500} mt="md">Expected Code Connect Result:</Text>
                 <Code block>{`<Badge variant="outline" color="info">
   BADGE
 </Badge>`}</Code>
                 
                 <Text fw={500} mt="md" c="orange">Analysis:</Text>
                 <Text size="sm" c="dimmed">
                   The MCP get_code function returned Figma Dev Mode code (Tailwind + custom components) 
                   instead of Code Connect results (Design System components). This suggests the Code Connect 
                   integration may need additional configuration.
                 </Text>
               </Stack>
             </Grid.Col>
          </Grid>
        </Paper>

        {/* All Badge Variants */}
        <Paper p="md" withBorder>
          <Title order={2} size="h3" mb="md">All Badge Variants</Title>
          
          <Stack gap="lg">
            <div>
              <Text fw={500} mb="sm">Filled Variants:</Text>
              <Group gap="sm">
                {badgeVariants.filter(b => b.variant === 'filled').map((badge, index) => (
                  <Badge 
                    key={index}
                    variant={badge.variant}
                    color={badge.color}
                  >
                    {badge.children}
                  </Badge>
                ))}
              </Group>
            </div>
            
            <div>
              <Text fw={500} mb="sm">Outline Variants:</Text>
              <Group gap="sm">
                {badgeVariants.filter(b => b.variant === 'outline').map((badge, index) => (
                  <Badge 
                    key={index}
                    variant={badge.variant}
                    color={badge.color}
                  >
                    {badge.children}
                  </Badge>
                ))}
              </Group>
            </div>
          </Stack>
        </Paper>

        {/* Instructions */}
        <Paper p="md" withBorder bg="blue.0">
          <Title order={3} size="h4" mb="sm">How to Test Figma Integration:</Title>
          <Stack gap="xs">
            <Text size="sm">
              <strong>1.</strong> Open your Badge component in Figma and select it
            </Text>
            <Text size="sm">
              <strong>2.</strong> In Cursor, use the MCP Figma functions:
            </Text>
            <Code block mt="xs">
{`// Get the Figma design image
mcp_Figma_get_image({
  clientName: "cursor",
  clientLanguages: "typescript",
  clientFrameworks: "react"
})

// Get the generated code from Code Connect
mcp_Figma_get_code({
  clientName: "cursor", 
  clientLanguages: "typescript",
  clientFrameworks: "react"
})`}
            </Code>
            <Text size="sm">
              <strong>3.</strong> Compare the Figma design with the rendered React component above
            </Text>
            <Text size="sm">
              <strong>4.</strong> Verify that the generated code matches your expected React code
            </Text>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
} 