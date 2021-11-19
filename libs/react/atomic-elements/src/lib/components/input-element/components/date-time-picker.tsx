import { DateTime } from '@kleeen/react/components';
import { InputComponentProps } from '@kleeen/types';
import { Moment } from 'moment';

export function DateTimePicker({ setValue, value }: InputComponentProps) {
  return (
    <DateTime
      defaultValue={value}
      handleOnChange={(newValue: Moment) => {
        setValue(newValue);
      }}
      label={''} // TODO: @cafe set this as optional
    />
  );
}
