import React, { useState } from 'react'
import {
  Card,
  Col,
  Row,
  Icon,
  Input,
  Tooltip,
  Select,
  DatePicker,
  Cascader,
  Button
} from 'antd'

const { Search, Password } = Input
const { Option } = Select

const HomeContainer = () => {
  const [value, setValue] = useState({})
  const [search, setSearch] = useState()
  const [select, setSelect] = useState()
  const [date, setDate] = useState()
  const [cascade, setCascade] = useState()
  const [loading, setLoading] = useState(false)
  const options = [
  {
    value: 'Philippines',
    label: 'Philippines',
    children: [
      {
        value: 'Metro Manila',
        label: 'Metro Manila',
        children: [
          {
            value: 'Pasig',
            label: 'Pasig',
          },
        ],
      },
    ],
  }
];

  function handleChange(event){
    event.persist()
    setValue(value => ({ ...value, [event.target.name]: event.target.value }))
  }

  return (
    <div>
      <h1> Samples from Antd </h1>
      <div style={{ bordered: '1'}}>
        <Row style={{ marginBottom: '20px'}} gutter={16}>
          <Col span={8}>
            <Card title="Basic Usage Input">
              <div style={{ padding: '0 0 42px'}}>
                <Input
                  name="name"
                  onChange={handleChange}
                  style={{ marginBottom: '20px' }}
                  allowClear
                />
                Output: {value.name}

                <Password
                  name="password"
                  onChange={handleChange}
                />
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Search Input">
              <div style={{ padding: '0 0 42px'}}>
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
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Prefix and Suffix">
              <div style={{ padding: '0 0 42px'}}>
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
                  onChange={handleChange}
                />
              </div>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginBottom: '20px'}} gutter={16}>
          <Col span={8}>
            <Card title="Basic Select and DatePicker">
              <Select
                placeholder="Select"
                style={{ width: 350, marginBottom: '20px'}}
                onChange={value => setSelect(value)}
              >
                <Option value="Foo">Foo</Option>
                <Option value="Bar">Jack</Option>
                <Option value="John">John</Option>
                <Option value="Doe">Doe</Option>
              </Select>
                Output: {select}

              <DatePicker
                style={{ width: 350, marginBottom: '20px'}}
                onChange={(date, dateString) => setDate(dateString)} />
                Output: {date}
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Cascader / Cascading">
              <div style={{ padding: '0 0 42px'}}>
                <Cascader
                  style={{ width: 350, marginBottom:  '20px' }}
                  options={options}
                  onChange={value => setCascade(value)}
                  placeholder="Please select"
                  changeOnSelect
                 />
                <Input
                  disabled
                  style={{ width: 350, marginBottom:  '20px' }}
                  value={cascade ? cascade.join(' / ') : ' '}
                />
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Sample Button">
            <div style={{ padding: '0 0 35px'}}>
              <Button style={{ marginBottom: '5px'}} type="primary" block>
                Primary
              </Button>
              <Button style={{ marginBottom: '5px'}}type="danger" block>
                Danger
              </Button>
              <Button
                onClick={_ => setLoading(true)}
                style={{ marginBottom: '5px'}}
                type="primary"
                block
                loading={loading}
              >
                Loading
              </Button>
            </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}


export default HomeContainer
