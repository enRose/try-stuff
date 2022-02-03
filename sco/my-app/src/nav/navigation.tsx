import { Routes, Route, NavLink, useLocation } from 'react-router-dom'
import { MenuPage } from '../page/menu'
import { RegisterCard } from '../page/register-card'
import css from './nav-style.module.css'
import { Layout, Menu, Input, Row, Col, Divider } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const { Header, Content, Footer } = Layout

const Navigation = () => {
  const location = useLocation()

  return (
    <Layout>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%'
        }}>
        <Row justify='space-between'>
          
          
          <Col>
            <Menu mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1"><NavLink to="/MenuPage">Menu</NavLink></Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
      <Content className={css['site-layout']} style={{ padding: '0 50px', marginTop: 64 }}>
        <div className={css['site-layout-background']} style={{ padding: 24, minHeight: 380 }}>
          <Routes>
            <Route path="/" element={<RegisterCard />} />
            <Route path="/MenuPage" element={<MenuPage />} />
          </Routes>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Scott Ogilvie ©2022 Created by SO | Icons by <a href='https://www.flaticon.com/authors/smashicons'>
          Flaticon</a>
      </Footer>
    </Layout>
  )
}

export default Navigation