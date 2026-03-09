import { figma } from '@figma/code-connect';
import { TextInput } from './TextInput';

// Main connection — targets the "Input/Text Input" component set (574:2048).
//
// Figma property names (verified against component):
//   size (variant): xs | sm | md | lg | xl
//   state (variant): default | filled | disabled | error
//   label (text): input label
//   placeholder (text): placeholder text shown in the default state
//   value (text): input value shown in the filled/disabled/error states
//   hasDescription (boolean): toggles description visibility
//   description (text): description text below the input
//   error (text): error caption text (independent of state)
//   required (boolean)
//   showOptional (boolean)
//   hasHelpIcon (boolean)
//   hasLeftSection (boolean): toggles left section visibility
//   hasRightSection (boolean): toggles right section visibility
//
// Code Connect does NOT support ternaries or conditional spreads.
// Use nested figma helpers (e.g. figma.string inside figma.enum) for
// conditional prop resolution.
figma.connect(
  TextInput,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=574-2048',
  {
    props: {
      size: figma.enum('size', { xs: 'xs', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' }),
      label: figma.string('label'),
      description: figma.boolean('hasDescription', {
        true: figma.string('description'),
        false: undefined,
      }),
      required: figma.boolean('required'),
      showOptional: figma.boolean('showOptional'),
      hasHelpIcon: figma.boolean('hasHelpIcon'),
      hasLeftSection: figma.boolean('hasLeftSection'),
      hasRightSection: figma.boolean('hasRightSection'),
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
    },
    example: ({ size, label, placeholder, value, description, required, showOptional, hasHelpIcon, hasLeftSection, hasRightSection, disabled, error, errorMessage }) => (
      <TextInput
        size={size}
        label={label}
        placeholder={placeholder}
        value={value}
        description={description}
        required={required}
        showOptional={showOptional}
        hasHelpIcon={hasHelpIcon}
        helpIconLabel="More information"
        leftSection={hasLeftSection}
        rightSection={hasRightSection}
        disabled={disabled}
        error={error}
        errorCaption={errorMessage}
      />
    ),
  }
);

// Subcomponent stubs — suppress Figma's fallback auto-generated code when designers
// click into internal layers. Each stub maps the inner component set to a minimal
// TextInput example so Dev Mode always shows DS code.

// Ⓜ️ Input/Label (558:2196)
figma.connect(
  TextInput,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=558-2196',
  { example: () => <TextInput label="Label" /> }
);

// .Input/Text Input Container (502:742)
figma.connect(
  TextInput,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=502-742',
  { example: () => <TextInput /> }
);

// .Input/Caption Text (502:700)
figma.connect(
  TextInput,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=502-700',
  { example: () => <TextInput /> }
);

// .Input/Text Input Core (596:8466)
figma.connect(
  TextInput,
  'https://www.figma.com/design/rXvD5jPC1i02ZIma87Qcbl/ADDS-Admin-Mantine-Core?node-id=596-8466',
  { example: () => <TextInput /> }
);
