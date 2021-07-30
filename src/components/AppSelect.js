import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const styles = {
  root: props => ({
    borderRadius: '18px',
    paddingLeft: '18px',
    '& .MuiSvgIcon-root': {
      width: '18px',
      height: '18px'
    }
  }),
  rootSelect: {
    fontSize: '14px',
    lineHeight: '20px',
    padding: '8px 0',
    paddingRight: '46px'
  },
  iconOutlined: {
    top: 'calc(50% - 9px)',
    right: '18px'
  }
};

const AppSelect = React.forwardRef(function AppSelect(props, ref) {
  const { classes, label, variant = 'outlined', ...othersProps } = props;
  return (
    <Select
      ref={ref}
      className={classes.root}
      classes={{
        root: classes.rootSelect,
        iconOutlined: classes.iconOutlined
      }}
      IconComponent={KeyboardArrowDownIcon}
      variant={variant}
      {...othersProps}
    />
  );
});

AppSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { name: 'AppSelect' })(AppSelect);
