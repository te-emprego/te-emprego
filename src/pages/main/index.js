import React from 'react';

import Header from '@components/Header';
import Sidebar from '@components/Sidebar';
import JobList from '@components/JobList';
//import Overlay from '@components/Overlay';

import { MainBackground, MainContainer, MainWrapper, Overlay } from './styles';

const Main = () => (
  <>
    <MainBackground>
      <Header />
      <MainContainer>
        <MainWrapper>
          <JobList />
        </MainWrapper>
        <Overlay />
        <Sidebar />
      </MainContainer>
    </MainBackground>
  </>
);

export default Main;
