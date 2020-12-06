import React from 'react';
import Cta from '../Cta/Cta';
import Icon from '../Icon/Icon';
import './Nav.scss';

function Nav(props) {
  const content = props.content;
  const cssClass = 'Nav';
  const uiConfig = {
    cta: 'transparent',
    icon: 'primary'
  }

  return (
    <div className={`${cssClass} ${cssClass}--${props.type}`}>
      <div className="grid">
        <div className={`${cssClass}-button`}>
          <Icon icon={content.icon} type={uiConfig.icon} />
        </div>
      </div>
    </div>
  );
}

export default Nav;