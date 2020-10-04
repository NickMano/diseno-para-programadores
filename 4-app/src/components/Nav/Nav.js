import React from 'react';
import Cta from '../Cta/Cta';
import './Nav.scss';

function Nav(props) {
  const content = props.content;
  const cssClass = 'Nav';
  const uiConfig = {
    cta: 'terciary',
    icon: 'secondary'
  }

  return (
    <div className={`${cssClass} ${cssClass}--${props.type}`}>
      <div className="grid">
        <div className={`${cssClass}-button`}>
          <Cta type={uiConfig.cta} icon={content.icon} iconType={uiConfig.icon} />
        </div>
      </div>
    </div>
  );
}

export default Nav;