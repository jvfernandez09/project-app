import React, { Suspense }  from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'

import { Layout } from 'antd'
import SideBarContainer from 'app/sidebar'

const HomeContainer = React.lazy(() => import('app/home')) 
const SalesContainer = React.lazy(() => import('app/sales')) 
const PurchaseContainer = React.lazy(() => import('app/purchase')) 
const ProductContainer = React.lazy(() => import('app/product')) 
const InventoryContainer = React.lazy(() => import('app/inventory')) 


const { Content } = Layout 

const ModuleContainer = () => {
  return (
    <Layout>
      <SideBarContainer />
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: '24px 16px 0'}}>
          <div style={{ padding: 24, background: '#fff', minHeight: 800, marginTop: 0, marginBottom: 20 }}>
            <Suspense fallback={<div> loading... </div>}>
              <Switch>
                <Route path='/home' component={HomeContainer} />
                <Route path='/sales' component={SalesContainer} />
                <Route path='/purchase' component={PurchaseContainer} />
                <Route path='/product' component={ProductContainer} />
                <Route path='/inventory' component={InventoryContainer} />
              </Switch>
            </Suspense>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default withRouter(ModuleContainer)
