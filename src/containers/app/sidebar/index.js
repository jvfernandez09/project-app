import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import { Layout, Menu, Icon } from 'antd'
import { ReactComponent as Logo } from '../../../logo.svg'
const { Sider } = Layout 

const SideBarContainer = ({ history }) => {
  const linkTo = route => history.push(route)

  useEffect(() => {
    if (history.location.pathname === '/') {
       history.push('/home')
    }
  })

  return(
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <Logo />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" onClick={() => linkTo('/home')}>
          <Icon type="user" />
          <span className="nav-text">Home</span>
        </Menu.Item>
        <Menu.Item key="3" onClick={() => linkTo('/inventory')}>
          <Icon type="user" />
          <span className="nav-text">Inventory</span>
        </Menu.Item>
        <Menu.Item key="4" onClick={() => linkTo('/purchase')}>
          <Icon type="user" />
          <span className="nav-text">Purchase</span>
        </Menu.Item>
        <Menu.Item key="5" onClick={() => linkTo('/sales')}>
          <Icon type="user" />
          <span className="nav-text">Sales</span>
        </Menu.Item>
        <Menu.Item key="6" onClick={() => linkTo('/product')}>
          <Icon type="user" />
          <span className="nav-text">Product</span>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default withRouter(SideBarContainer)
