import React from 'react';
import './ContactBox.scss';
import Icon from '../../components/Icon/Icon';

function ContactBox(props) {
  const content = props.content;
  const cssClass = 'ContactBox';
  const uiConfig = {
    'icon': 'primary'
  }

  const List = (() => {
    return content.map((item, index) => {
      return (
        <li key={index} className={`${cssClass}-block`}>
          {item.icon && <Icon icon={item.icon} type={uiConfig.iconType} />}
          <p className={`${cssClass}-description`}>
            {item.subtitle}
          </p>
        </li>
      )
    })
  })();

  return (
    <ul className={cssClass}>
      {List}
    </ul>
  );
}

export default ContactBox;