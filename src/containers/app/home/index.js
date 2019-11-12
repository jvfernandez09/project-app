import React, { useState } from 'react'
import {
  Card,
  Col,
  Row,
  Icon,
  Button,
  Input,
  Tooltip
} from 'antd'

const { Search, Password } = Input

const HomeContainer = () => {
  const [value, setValue] = useState({})
  const [search, setSearch] = useState()
  function handleChange(event){
    event.persist()
    setValue(value => ({ ...value, [event.target.name]: event.target.value }))
  }

  return (
    <div>
      <h1> Samples from Antd </h1>
      <div style={{ bordered: '1'}}>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Basic Usage Input">
              <Input
                name="name"
                onChange={handleChange}
                style={{ marginBottom: '20px' }}
              />
              Output: {value.name}

              <Password
                name="password"
                onChange={handleChange}
                style={{ marginBottom: '20px' }}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Search Input">
              <Search
                placeholder="input search text"
                enterButton="Search"
                name="search"
                onSearch={value => setSearch(value)}
                style={{ marginBottom: '20px'}}
              />
              Output: {search}
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                enterButton
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Prefix and Suffix">
              <Input
                name="prefix"
                placeholder="Enter your username"
                onChange={handleChange}
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                suffix={
                  <Tooltip title="Extra information">
                    <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                  </Tooltip>
                }
                style={{ marginBottom: '20px'}}
              />

              Output: {value.prefix}

              <Input
                name="suffix"
                prefix="￥"
                suffix="RMB"
                style={{ marginBottom: '20px'}}
                onChange={handleChange}
              />

            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Card>

            </Card>
          </Col>
          <Col span={8}>
            <Card>
            </Card>
          </Col>
          <Col span={8}>
            <Card>

            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}


export default HomeContainer
