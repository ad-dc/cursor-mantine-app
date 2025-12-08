import { figma } from '@figma/code-connect';
import { Dropzone, Text } from '@mantine/dropzone';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';

figma.connect(
  Dropzone,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1868-11698&t=y0IJ175mkJJcYKZp-4',
  {
    props: {
      // TODO: Restore bindings once the Figma dropzone exposes matching props/layers
      // title: figma.string('title'),
      // description: figma.string('description'),
      // accept: figma.children('accepted mime types'),
      // disabled: figma.boolean('disabled'),
    },
    example: () => (
      <Dropzone onDrop={() => undefined} onReject={() => undefined} maxSize={5 * 1024 ** 2} accept={['image/png', 'image/jpeg']}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, minHeight: 80 }}>
          <Dropzone.Accept>
            <IconUpload size={32} stroke={1.5} />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX size={32} stroke={1.5} color="red" />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto size={32} stroke={1.5} />
          </Dropzone.Idle>
          <div>
            <Text size="md" fw={500} mb={4}>
              Drag and drop files here
            </Text>
            <Text size="sm" c="dimmed">
              Attach multiple files, each up to 5MB
            </Text>
          </div>
        </div>
      </Dropzone>
    ),
  }
);

