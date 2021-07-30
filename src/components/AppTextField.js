import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { OutlinedInput } from '@material-ui/core';

const styles = {
  root: {
    backgroundColor: 'hsla(196, 100%, 100%, 1)',
    borderRadius: '18px'
  },
  input: props => ({
    padding: '8px 18px',
    fontSize: '14px',
    lineHeight: '20px',
    height: 'auto'
  }),
  adornedStart: {
    paddingLeft: '18px',
    '& .MuiSvgIcon-root': {
      width: '18px',
      height: '18px'
    }
  }
};

const AppTextField = React.forwardRef(function AppTextField(props, ref) {
  const { classes, label, ...othersProps } = props;
  return (
    <OutlinedInput
      ref={ref}
      classes={{
        root: classes.root,
        input: classes.input,
        adornedStart: classes.adornedStart
      }}
      {...othersProps}
    />
  );
});

AppTextField.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { name: 'AppTextField' })(AppTextField);
