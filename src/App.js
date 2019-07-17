import React from 'react';

// import Main from '@pages/main';
import Login from '@pages/login';

import GlobalStyle from '@/globalStyles/global';

const App = () => (
  <>
    <GlobalStyle />
    {/*
      Uncomment Main to see the main page
      <Main />
     */}
    <Login />
  </>
);

export default App;
