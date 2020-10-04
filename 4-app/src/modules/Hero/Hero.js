import React from 'react';
import Icon from '../../components/Icon/Icon';
import './Hero.scss';

function Hero(props) {
  const content = props.content;
  const cssClass = 'Hero';
  const uiConfig = {
    'icon': 'cuaternary'
  }

  return (
    <div className={cssClass}>
      <div className={`${cssClass}-icon`}>
        <Icon icon={content.icon} type={uiConfig.icon} />
      </div>
      <h1 className={`${cssClass}-title`}>
        {content.title}
      </h1>
      <h2 className={`${cssClass}-subtitle`}>
        {content.subtitle}
      </h2>
    </div>
  );
}

export default Hero;