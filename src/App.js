import React from 'react';
import Maincontext from './context/MainContext';
import Table from './components/Table';
import Search from './components/Search';

export default function App() {
  return (
    <Maincontext>
      <div className='container'>
      <Search/>
      <Table />

      </div>
    </Maincontext>
  );
}
