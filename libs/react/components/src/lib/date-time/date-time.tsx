import './date-time.scss';

import { DateTimeFormat, convertToMoment } from '@kleeen/i18n';
import React, { useEffect, useState } from 'react';
import { pathOr } from 'ramda';

import DateFnsUtils from '@date-io/moment';
import { DateTimePicker } from './components';
import { DateTimeProps } from './date-time.model';
import { KUIConnect } from '@kleeen/core-react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from 'moment';
import { useStyles } from './date-time.styles';
import { Maybe } from '@kleeen/types';
import MuiTooltip from '@material-ui/core/Tooltip';

function DateTimeBase({ translate, ...props }: DateTimeProps): JSX.Element {
  const classes = useStyles();
  const onChange = (date: moment.Moment) => {
    props?.handleOnChange?.(date);
  };
  const localization = {
    defaultLabel: translate('app.datetime.label') || '',
  };
  const disabled = pathOr(false, ['disabled'], props);
  const variant = pathOr('inline', ['inline'], props);
  const label = pathOr(localization.defaultLabel, ['label'], props);

  const [value, setHasValue] = useDefaultDateTimeValue({ onChange, defaultValue: props?.defaultValue });

  return (
    <MuiTooltip title={moment(value).format(DateTimeFormat.DEFAULT_DATE_TIME)} placement="top-start">
      <div className={classes.container}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker
            disabled={disabled}
            format={DateTimeFormat.DEFAULT_DATE_TIME}
            label={label}
            onChange={(date) => {
              const newDate = new Date(date.toDate());
              onChange(convertToMoment(newDate));
              setHasValue();
            }}
            value={value}
            variant={variant}
          />
        </MuiPickersUtilsProvider>
      </div>
    </MuiTooltip>
  );
}

export const DateTime = React.memo(KUIConnect(({ translate }) => ({ translate }))(DateTimeBase));

function useDefaultDateTimeValue({
  defaultValue,
  onChange,
}: {
  defaultValue: Date;
  onChange: (t: moment.Moment) => void;
}): [Maybe<moment.Moment>, () => void] {
  const [isValueEmpty, setIsValueEmpty] = useState(false);
  const defaultValueAsMoment = convertToMoment(defaultValue);
  const setHasValue = () => setIsValueEmpty(false);

  useEffect(() => {
    if (!defaultValueAsMoment) {
      const now = new Date();
      onChange(convertToMoment(now));
      setIsValueEmpty(true);
    }
  }, []);

  return [isValueEmpty ? undefined : defaultValueAsMoment, setHasValue];
}
