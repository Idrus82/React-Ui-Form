import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import capitalize from '@material-ui/core/utils/capitalize';
import clsx from 'clsx';

const styles = {
  root: {
    border: '1px solid hsla(227, 36%, 24%, 0.48)',
    borderRadius: '18px',
    fontSize: '14px',
    lineHeight: '24px',
    padding: '5px 17px',
    textTransform: 'none',
    boxShadow: 'none'
  },
  outlined: {
    color: 'hsla(228, 35%, 24%, 0.72)'
  },
  contained: {
    border: '1px solid transparent'
  },
  sizeSmall: {
    fontSize: '12px',
    lineHeight: '18px',
    padding: '5px 16px'
  }
};

const AppButton = React.forwardRef(function AppButton(props, ref) {
  const { classes, variant = 'outlined', size = 'medium' } = props;
  return (
    <Button
      ref={ref}
      className={clsx(classes.root, classes[variant], {
        [classes[`size${capitalize(size)}`]]: size !== 'medium'
      })}
      variant={variant}
      {...props}
    >
      {props.children}
    </Button>
  );
});

AppButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { name: 'AppButton' })(AppButton);
