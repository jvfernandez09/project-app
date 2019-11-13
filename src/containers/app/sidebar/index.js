import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import { Menu, Icon } from 'antd'
import './index.scss'

const SideBarContainer = ({ history }) => {
  const linkTo = route => history.push(route)

  useEffect(() => {
    if (history.location.pathname === '/') {
       history.push('/home')
    }
  })

  return(
    <div className='sidebar-container'>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1" onClick={() => linkTo('/home')}>
          <Icon type="home" />
          <span className="nav-text">Home</span>
        </Menu.Item>
        <Menu.Item key="2" onClick={() => linkTo('/products')}>
          <Icon type="container" />
          <span className="nav-text">Products</span>
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
          <span className="nav-text"> |
          <Icon type="shopping-cart" onClick={() => alert("add to cart!")}/> 0 Item 0.00 PHP</span>
      </Menu>
    </div>
  )
}

export default withRouter(SideBarContainer)
