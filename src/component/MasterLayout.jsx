import React from 'react'
import Weather from './Weather/index.jsx'
import Control from './Control/index.jsx'
import Content from './Content/index.jsx'
import '../assets/styles.scss'
import { Col, Row } from 'antd'

const MasterLayout = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <Row justify="space-around" className="wrapper__align--center">
          <Col span={4}>
            <Row>
              <Col span={12}>
                <Weather />
              </Col>
              <Col span={12}>
                <Control />
              </Col>
            </Row>
          </Col>
          <Col span={19}>
            <Content />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default MasterLayout
