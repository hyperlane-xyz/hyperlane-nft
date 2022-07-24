import { Field } from 'formik';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof Field> & {
  options: Array<{ value: string; display: string }>;
};

export function SelectField(props: Props) {
  const { options, ...passThruProps } = props;
  return (
    <Field
      as="select"
      className="w-100 mt-2 p-2 text-sm border border-color-gray-800 rounded focus:outline-none"
      {...passThruProps}
    >
      {options.map((o, i) => (
        <option key={`option-${i}`} value={o.value}>
          {o.display}
        </option>
      ))}
    </Field>
  );
}
