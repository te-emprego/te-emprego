import React from 'react';

import { FiltersWrapper, SidebarWrapper } from './styles';
import Content from './content';

const Sidebar = () => {
  const changeValue = value => {
    console.log(value);
  };

  return (
    <SidebarWrapper>
      <FiltersWrapper>
        <Content changeValue={changeValue} />
      </FiltersWrapper>
    </SidebarWrapper>
  );
};

export { Sidebar };
export default Sidebar;
