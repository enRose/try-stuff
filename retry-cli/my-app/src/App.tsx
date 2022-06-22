import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css'
import './App.css';
import {goofyFun} from './eth-hunt'
import { Typography, Divider, Layout, Table } from 'antd'
import errors from './cif-error.json'
import locks from './cif-lock.json'

const { Header, Footer, Sider, Content } = Layout
const { Title, Paragraph, Text, Link } = Typography


function App() {
  const [data, setData] = useState<any>()

  useEffect(() => {
    const hits = goofyFun()

    const da = hits.map((hit, idx) => ({
      key: idx,
      cif: hit.cif,
      lock: hit.lockTime,
      error: hit.errorTimes.toString()
    }))

    setData(da)
  },[])

  const columns = [
    {
      title: 'Cif',
      dataIndex: 'cif',
      key: 'cif',
    },
    {
      title: 'Lock',
      dataIndex: 'lock',
      key: 'lock',
    },
    {
      title: 'Error',
      dataIndex: 'error',
      key: 'error',
    },
  ]

  return (
    <div className="App">
      <Layout>
      <Header style={{color: 'white'}}>
        <p>correlation {data?.length} | error {errors.length} | lock {locks.length}</p>
      </Header>
      <Content> 
        <Table columns={columns} dataSource={data} pagination={false} /> 
        </Content>
      <Footer></Footer>
    </Layout>
    </div>
  );
}

export default App;
