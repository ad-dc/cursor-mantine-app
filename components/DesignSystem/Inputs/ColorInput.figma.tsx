import { figma } from '@figma/code-connect';
import { ColorInput } from './ColorInput';

// Main connection — targets the "Ⓜ️ Input/Color" component (1373:6404).
//
// The ColorInput in Figma wraps an Input/Text Input instance with a
// color swatch in the left section. All input props are read from
// the nested instance via nestedProps.
figma.connect(
  ColorInput,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=1373-6404',
  {
    props: {
      inputProps: figma.nestedProps('Input/Text Input', {
        size: figma.enum('size', { xs: 'xs', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' }),
        label: figma.string('label'),
        description: figma.boolean('hasDescription', {
          true: figma.string('description'),
          false: undefined,
        }),
        required: figma.boolean('required'),
        showOptional: figma.boolean('showOptional'),
        hasHelpIcon: figma.boolean('hasHelpIcon'),
        placeholder: figma.enum('state', {
          default: figma.string('placeholder'),
        }),
        value: figma.enum('state', {
          filled: figma.string('value'),
          disabled: figma.string('value'),
          error: figma.string('value'),
        }),
        disabled: figma.enum('state', { default: undefined, filled: undefined, disabled: true, error: undefined }),
        error: figma.enum('state', { default: undefined, filled: undefined, disabled: undefined, error: true }),
        errorMessage: figma.string('error'),
      }),
    },
    example: ({ inputProps }) => (
      <ColorInput
        format="hex"
        size={inputProps.size}
        label={inputProps.label}
        placeholder={inputProps.placeholder}
        value={inputProps.value}
        description={inputProps.description}
        required={inputProps.required}
        showOptional={inputProps.showOptional}
        hasHelpIcon={inputProps.hasHelpIcon}
        helpIconLabel="More information"
        disabled={inputProps.disabled}
        error={inputProps.error}
        errorCaption={inputProps.errorMessage}
      />
    ),
  }
);
