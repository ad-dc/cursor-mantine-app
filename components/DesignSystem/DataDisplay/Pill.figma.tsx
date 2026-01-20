import { figma } from '@figma/code-connect';
import { Pill } from './Pill';

figma.connect(
  Pill,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=5155-495&t=ZTnFBet9bu3PlTXo-11',
  {
    props: {
      size: figma.enum('size', {
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
        xl: 'xl',
      }),
      withRemoveButton: figma.boolean('withRemoveButton'),
      children: figma.string('children'),
    },
    example: (props) => (
      <Pill size={props.size} withRemoveButton={props.withRemoveButton}>
        {props.children}
      </Pill>
    ),
  }
);

