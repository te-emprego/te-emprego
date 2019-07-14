import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import JobList from '../../components/JobList';

import { MainContainer, MainWrapper } from './styles';

const Main = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <MainWrapper>
          <JobList />
        </MainWrapper>
        <Sidebar />
      </MainContainer>
    </>
  );
};

export default Main;
