import React, { useState } from 'react';
import TogglableButton from '@components/TogglableButton';
import {
  FiltersWrapper,
  SidebarWrapper,
  ButtonsWrapper,
  Block,
} from './styles';

const Sidebar = () => {
  const [filters] = useState({
    pj: true,
    clt: true,
    estagio: true,
    freelance: true,
  });

  const changeValue = value => {
    console.log(value);
  };

  return (
    <SidebarWrapper>
      <FiltersWrapper>
        <Block>
          Tipo de contratação:
          <ButtonsWrapper>
            <TogglableButton
              text="PJ"
              value={filters.pj}
              changeValue={changeValue}
            />
            <TogglableButton
              text="CLT"
              value={filters.clt}
              changeValue={changeValue}
            />
            <TogglableButton
              text="Estágio"
              value={filters.estagio}
              changeValue={changeValue}
            />
            <TogglableButton
              text="Freelance"
              value={filters.freelance}
              changeValue={changeValue}
            />
          </ButtonsWrapper>
        </Block>
        <Block>
          Nível de experiência:
          <ButtonsWrapper>
            <TogglableButton text="Júnior" changeValue={changeValue} />
            <TogglableButton text="Pleno" changeValue={changeValue} />
            <TogglableButton text="Sênior" changeValue={changeValue} />
          </ButtonsWrapper>
        </Block>
      </FiltersWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
