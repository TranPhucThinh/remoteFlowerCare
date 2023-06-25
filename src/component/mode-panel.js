import React from 'react'
import { Col, Row, Switch } from 'antd'
import { ref, update } from 'firebase/database'
import { database } from '../firebaseConfig'

const ModePanel = () => {
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
    <div className="switch-wrapper">
      <div className="switch-title">
        <p className="control-tittle">Điều khiển</p>
        <Row>
          <Col span={1}></Col>
          <Col span={11}>
            <Switch
              style={{ backgroundColor: '#ccc' }}
              defaultChecked={false}
              onChange={(isChecked) => {
                onChange('AUTO', isChecked)
              }}
            />
            <span className="mode-title" style={{ textTransform: 'uppercase' }}>
              Tự động
            </span>
          </Col>
          <Col span={11}></Col>
          <Col span={1}></Col>
        </Row>
      </div>
      <div className="switch-content">
        <Row>
          <Col span={1}></Col>
          <Col span={11}>
            <Switch
              style={{ backgroundColor: '#ccc' }}
              defaultChecked={false}
              onChange={(isChecked) => {
                onChange('DEN', isChecked)
              }}
            />
            <span className="mode-title" style={{ textTransform: 'uppercase' }}>
              Đèn
            </span>
          </Col>
          <Col span={11}>
            <Switch
              style={{ backgroundColor: '#ccc' }}
              defaultChecked={false}
              onChange={(isChecked) => {
                onChange('PHUN_NUOC', isChecked)
              }}
            />
            <span className="mode-title" style={{ textTransform: 'uppercase' }}>
              Phun nước
            </span>
          </Col>
          <Col span={1}></Col>
        </Row>
      </div>
      <div className="switch-content">
        <Row>
          <Col span={1}></Col>
          <Col span={11}>
            <Switch
              style={{ backgroundColor: '#ccc' }}
              defaultChecked={false}
              onChange={(isChecked) => {
                onChange('QUAT', isChecked)
              }}
            />
            <span className="mode-title" style={{ textTransform: 'uppercase' }}>
              Quạt
            </span>
          </Col>
          <Col span={11}>
            <Switch
              style={{ backgroundColor: '#ccc' }}
              defaultChecked={false}
              onChange={(isChecked) => {
                onChange('PHUN_SUONG', isChecked)
              }}
            />
            <span className="mode-title" style={{ textTransform: 'uppercase' }}>
              Phun sương
            </span>
          </Col>
          <Col span={1}></Col>
        </Row>
      </div>
    </div>
  )
}

export default ModePanel
