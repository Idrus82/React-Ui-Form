import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormHelperText, InputLabel } from '@material-ui/core';

const useStyles = makeStyles(
  {
    root: props => ({
      display: 'flex',
      flexDirection: props.horizontal ? 'row' : 'column'
    }),
    label: props => ({
      fontSize: '14px',
      lineHeight: '24px',
      padding: props.horizontal ? '5px 12px 5px 0' : '0 0 0 18px',
      marginBottom: '4px',
      width: props.horizontal && props.labelWidth ? props.labelWidth : 'auto'
    }),
    wrapperInput: {
      flex: '1 1 auto',
      display: 'flex',
      flexDirection: 'column'
    },
    helperText: {
      fontSize: '12px',
      lineHeight: '16px',
      marginTop: '4px',
      paddingLeft: '18px'
    }
  },
  { name: 'AppFormControl' }
);

export default function AppFormControl(props) {
  const classes = useStyles(props);
  const {
    ref,
    children,
    helperText,
    id,
    label,
    labelWidth,
    ...othersProps
  } = props;
  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
  return (
    <div ref={ref} className={`AppFormControl ${classes.root}`}>
      {label && <InputLabel className={classes.label}>{label}</InputLabel>}
      <div className={classes.wrapperInput}>
        {children}
        {helperText && (
          <FormHelperText id={helperTextId} className={classes.helperText}>
            {helperText}
          </FormHelperText>
        )}
      </div>
    </div>
  );
}
