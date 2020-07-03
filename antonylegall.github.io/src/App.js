import React from 'react';
import Layout from '../src/components/Layout/Layout'
import Banner from '../src/views/Home/Banner/Banner'
import Hoc from '../src/hoc/Hoc';

function App() {
  return (
    <Hoc>
      <Layout/>
      <Banner/>
    </Hoc>
  );
}

export default App;