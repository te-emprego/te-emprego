import React from 'react';
import Header from '@components/Header';
import Sidebar from '@components/Sidebar';
import JobList from '@components/JobList';
import { Col } from '@components/Grid';
import { Container, WrapperSidebar } from './styles';

const Main = () => (
  <>
    <Header />
    <Container>
      <Col xs={12} sm={10} lg={7}>
        <JobList />
      </Col>

      <WrapperSidebar>
        <Col lg={3}>
          <Sidebar />
        </Col>
      </WrapperSidebar>
    </Container>
  </>
);

export default Main;
