import React, { Suspense }  from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'

import { Layout, Menu, Breadcrumb } from 'antd';
import SideBarContainer from 'app/sidebar'
import './ModuleContainer.scss'

const HomeContainer = React.lazy(() => import('app/home'))
const SalesContainer = React.lazy(() => import('app/sales'))
const PurchaseContainer = React.lazy(() => import('app/purchase'))
const ProductContainer = React.lazy(() => import('app/products'))
const InventoryContainer = React.lazy(() => import('app/inventory'))
const SampleList = React.lazy(() => import('app/sample'))

const { Header, Content, Footer } = Layout;

const ModuleContainer = () => {
  return (
    <Layout className="layout">
      <Header>
        <SideBarContainer />
      </Header>
      <Content style={{ margin: '24px 16px 0'}}>
        <div style={{ padding: 60, background: '#fff', minHeight: 800, marginTop: 0, marginBottom: 20 }}>
          <Suspense fallback={<div> loading... </div>}>
            <Switch>
              <Route path='/home' component={HomeContainer} />
              <Route path='/sales' component={SalesContainer} />
              <Route path='/purchase' component={PurchaseContainer} />
              <Route path='/products' component={ProductContainer} />
              <Route path='/inventory' component={InventoryContainer} />
              <Route path='/sample' component={SampleList} />
            </Switch>
          </Suspense>
        </div>
      </Content>
    </Layout>
  )
}

export default withRouter(ModuleContainer)
