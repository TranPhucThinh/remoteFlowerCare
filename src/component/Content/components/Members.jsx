import { Col, Row } from 'antd'

import avaThinh from '../../../assets/images/cut.png'
import avaDuc from '../../../assets/images/duc.jpg'
import avaTeacher from '../../../assets/images/thsHVV.jpg'

const Members = () => {
  return (
    <Row justify="space-around">
      <Col xs={24} sm={12} md={8} lg={6} xl={5}>
        <div className="member__details">
          <div className="member__img">
            <img src={avaTeacher} alt="ThS. Hồ Viết Việt" />
          </div>
          <div className="member__text">
            <p className="member__rule">Giảng Viên Hướng Dẫn</p>
            <p className="member__name">ThS. Hồ Viết Việt</p>
            <p>
              <span style={{ fontSize: 12, opacity: 0.9 }}>Giảng viên CN:</span>{' '}
              Kỹ thuật máy tính
            </p>
          </div>
        </div>
      </Col>

      <Col xs={24} sm={12} md={8} lg={6} xl={5}>
        <div className="member__details">
          <div className="member__img">
            <img src={avaDuc} alt="ThS. Hồ Viết Việt" />
          </div>
          <div className="member__text">
            <p className="member__rule">Thành Viên 1</p>
            <p className="member__name">
              <span style={{ fontSize: 12, opacity: 0.9 }}>Họ và tên:</span> Lê
              Hoàng Đức
            </p>
            <p className="member__code">
              <span style={{ fontSize: 12, opacity: 0.9 }}>Mã sinh viên:</span>{' '}
              106190007
            </p>
            <p>
              <span style={{ fontSize: 12, opacity: 0.9 }}>Chuyên ngành:</span>{' '}
              Kỹ thuật máy tính
            </p>
          </div>
        </div>
      </Col>

      <Col xs={24} sm={12} md={8} lg={6} xl={5}>
        <div className="member__details">
          <div className="member__img">
            <img src={avaThinh} alt="ThS. Hồ Viết Việt" />
          </div>
          <div className="member__text">
            <p className="member__rule">Thành Viên 2</p>
            <p className="member__name">
              <span style={{ fontSize: 12, opacity: 0.9 }}>Họ và tên:</span>{' '}
              Trần Phúc Thịnh
            </p>
            <p className="member__code">
              <span style={{ fontSize: 12, opacity: 0.9 }}>Mã sinh viên:</span>{' '}
              106190037
            </p>
            <p>
              <span style={{ fontSize: 12, opacity: 0.9 }}>Chuyên ngành:</span>{' '}
              Kỹ thuật máy tính
            </p>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Members
