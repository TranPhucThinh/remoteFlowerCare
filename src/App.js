import { Col, Row, Tabs, Typography } from 'antd'
import React from 'react'
import './App.css'
import Clock from './component/clock'
import Footer from './component/footer'
import InfoPanel from './component/info-panel'
import ModePanel from './component/mode-panel'
import logo from './images/image002.png'
import logo1 from './images/logokhoa.png'

const { Title } = Typography

const App = () => {
  return (
    <div className="container">
      <div className="header-wrapper">
        <Row className="header">
          <Col span={6} className="title-wrapper">
            <div className="school-logo-wrapper">
              <img src={logo} className="school-logo" alt="Logo DUT" />
            </div>
          </Col>
          <Col span={12}>
            <div className="header-title">
              <p className="title-text">
                HỆ THỐNG TRỒNG HOA CÚC TRONG NHÀ KÍNH
              </p>
            </div>
          </Col>
          <Col span={6} className="title-wrapper">
            <div className="school-logo-wrapper">
              <img src={logo1} className="faculty-logo" alt="Logo ETE" />
            </div>
          </Col>
        </Row>
      </div>
      <Clock />
      <div className="content-wrapper">
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Thông tin chung" key="1">
            <InfoPanel />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Điều khiển" key="2">
            <ModePanel />
          </Tabs.TabPane>
        </Tabs>
      </div>
      <Footer />
    </div>
  )
}

export default App
