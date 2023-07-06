import { CiLight } from 'react-icons/ci'
import { Col, Row } from 'antd'
import { BsMoisture } from 'react-icons/bs'
import { FaTemperatureLow } from 'react-icons/fa'
import { SiRainmeter } from 'react-icons/si'

import '../content.scss'

const StatItems = (props) => {
  return (
    <Row justify="space-around">
      <Col xs={24} sm={12} md={8} lg={6} xl={5}>
        <div className="stat-desc">
          <div className="stat-title">
            <span>NHIỆT ĐỘ</span>
            <span className="icon icon-stat">
              <FaTemperatureLow />
            </span>
          </div>
          <p className="stat-value">{props.tempValue}&#8451;</p>
        </div>
      </Col>

      <Col xs={24} sm={12} md={8} lg={6} xl={5}>
        <div className="stat-desc">
          <div className="stat-title">
            <span>ĐỘ ẨM KHÔNG KHÍ</span>
            <span className="icon icon-air">
              <SiRainmeter />
            </span>
          </div>
          <p className="stat-value">{props.humiValue}%</p>
        </div>
      </Col>

      <Col xs={24} sm={12} md={8} lg={6} xl={5}>
        <div className="stat-desc">
          <div className="stat-title">
            <span>ĐỘ ẨM ĐẤT</span>
            <span className="icon icon-soil">
              <BsMoisture />
            </span>
          </div>
          <p className="stat-value">{props.moistureValue} %</p>
        </div>
      </Col>

      <Col xs={24} sm={12} md={8} lg={6} xl={5}>
        <div className="stat-desc">
          <div className="stat-title">
            <span>ĐỘ SÁNG</span>
            <span className="icon icon-light">
              <CiLight />
            </span>
          </div>
          <p className="stat-value">{props.lightValue} lux</p>
        </div>
      </Col>
    </Row>
  )
}

export default StatItems
