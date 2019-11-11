import React from 'react'
import { Card, Col, Row, Icon, Button } from 'antd'
import { ReactComponent as Logo }  from '../../../logo.svg'

const ProductContainer = () => {
  return(
    <div>
      <h1> Products </h1>
      <div style={{ bordered: '1'}}>
        <Row gutter={16}>
          <Col span={8}>
            <Card>
              <Logo />
              <Button type="primary" block >
                Add to Cart <Icon type="shopping-cart" />
              </Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Logo />
              <Button type="primary" block >
                Add to Cart <Icon type="shopping-cart" />
              </Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Logo />
              <Button type="primary" block >
                Add to Cart <Icon type="shopping-cart" />
              </Button>
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Card>
              <Logo />
              <Button type="primary" block >
                Add to Cart <Icon type="shopping-cart" />
              </Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Logo />
              <Button type="primary" block >
                Add to Cart <Icon type="shopping-cart" />
              </Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Logo />
              <Button type="primary" block >
                Add to Cart <Icon type="shopping-cart" />
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ProductContainer
