import React from 'react';
import { mdiEyeOffOutline, mdiEyeOutline } from '@mdi/js';
import Icon from '@mdi/react';
import PropTypes from 'prop-types';

class PasswordInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isHidden: true,
    };
  }

  render () {
    const { isHidden } = this.state;

    return <label>
      <input type={isHidden
                   ? 'password'
                   : 'text'
      }/>
      <Icon onMouseDown={()=>{
        this.setState({
          isHidden: false,
                      })
      }} onMouseUp={()=>{
        this.setState({
          isHidden: true
                      })
      }} path={isHidden
      ? mdiEyeOutline
      : mdiEyeOffOutline} size={1}
      ></Icon>

    </label>;
  }
}

PasswordInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
}

PasswordInput.defaultProps = {

}

export default PasswordInput;