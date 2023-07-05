import React from 'react'
import { Card, Col, Row, Switch } from 'antd'
import { ref, update } from 'firebase/database'
import { database } from '../../firebaseConfig'

import './control.scss'

const Control = () => {
  function writeNewPost(newVal, selectedMode) {
    const postData = newVal
    const updates = {}
    updates[`${selectedMode}`] = postData
    return update(ref(database), updates)
  }
  const onChange = (selectedMode, checked) => {
    writeNewPost(`${checked}`, `${selectedMode}`)
  }

  return (
    <Card
      style={{
        width: 240,
        borderRadius: 12,
        backgroundColor: '#40a9ff',
        marginTop: 12,
        boxShadow: 'rgb(64, 169, 255) 3px 4px 16px 0px',
      }}
    >
      <div className="control__wrapper">
        <div className="control__header">
          <h2>ĐIỀU KHIỂN</h2>
          <p>Bấm công tắc để bật thiết bị</p>
        </div>
        <div className="control__content">
          <Row>
            <Col span={24} style={{ display: 'flex' }}>
              <Switch
                defaultChecked={false}
                onChange={(isChecked) => {
                  onChange('AUTO', isChecked)
                }}
              />
              <span
                className="mode-title"
                style={{
                  textTransform: 'uppercase',
                  fontSize: 12,
                  color: 'white',
                  marginLeft: 8,
                }}
              >
                Tự động
              </span>
            </Col>
          </Row>

          <Row style={{ marginTop: 12 }}>
            <Col span={24} style={{ display: 'flex' }}>
              <Switch
                defaultChecked={false}
                onChange={(isChecked) => {
                  onChange('DEN', isChecked)
                }}
              />
              <span
                className="mode-title"
                style={{
                  textTransform: 'uppercase',
                  fontSize: 12,
                  color: 'white',
                  marginLeft: 8,
                }}
              >
                Đèn
              </span>
            </Col>
          </Row>

          <Row style={{ marginTop: 12 }}>
            <Col span={24} style={{ display: 'flex' }}>
              <Switch
                defaultChecked={false}
                onChange={(isChecked) => {
                  onChange('PHUN_NUOC', isChecked)
                }}
              />
              <span
                className="mode-title"
                style={{
                  textTransform: 'uppercase',
                  fontSize: 12,
                  color: 'white',
                  marginLeft: 8,
                }}
              >
                Phun nước
              </span>
            </Col>
          </Row>

          <Row style={{ marginTop: 12 }}>
            <Col span={24} style={{ display: 'flex' }}>
              <Switch
                defaultChecked={false}
                onChange={(isChecked) => {
                  onChange('QUAT', isChecked)
                }}
              />
              <span
                className="mode-title"
                style={{
                  textTransform: 'uppercase',
                  fontSize: 12,
                  color: 'white',
                  marginLeft: 8,
                }}
              >
                Quạt
              </span>
            </Col>
          </Row>

          <Row style={{ marginTop: 12 }}>
            <Col span={24} style={{ display: 'flex' }}>
              <Switch
                defaultChecked={false}
                onChange={(isChecked) => {
                  onChange('PHUN_SUONG', isChecked)
                }}
              />
              <span
                className="mode-title"
                style={{
                  textTransform: 'uppercase',
                  fontSize: 12,
                  color: 'white',
                  marginLeft: 8,
                }}
              >
                Phun sương
              </span>
            </Col>
          </Row>
        </div>
      </div>
    </Card>
  )
}

export default Control
