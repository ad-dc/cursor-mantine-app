import { figma } from '@figma/code-connect';
import { Alert } from '@/components/DesignSystem/DataDisplay/Alert';

figma.connect(
  Alert,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=5724-914',
  {
    props: {
      title: figma.string('title'),
      children: figma.string('children'),
      color: figma.enum('color', {
        info: 'info',
        pending: 'pending',
        success: 'success',
        danger: 'danger',
        default: 'default',
      }),
      withCloseButton: figma.boolean('withCloseButton'),
    },
    example: (props) => (
      <Alert
        title={props.title}
        color={props.color}
        withCloseButton={props.withCloseButton}
      >
        {props.children}
      </Alert>
    ),
  }
);
