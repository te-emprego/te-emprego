import React from 'react';

import Header from '@components/Header';
import Sidebar from '@components/Sidebar';
import JobList from '@components/JobList';

import { MainBackground, MainContainer, MainWrapper } from './styles';

const Main = () => (
  <>
    <MainBackground>
      <Header />
      <MainContainer>
        <MainWrapper>
          <JobList />
        </MainWrapper>
        <Sidebar />
      </MainContainer>
    </MainBackground>
  </>
);

export default Main;
