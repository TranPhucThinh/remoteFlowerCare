import { Col, Row } from 'antd'
import React from 'react'
import '../App.css'
import logo from '../images/image002.png'
import logo1 from '../images/logokhoa.png'
import ava1 from '../images/cut1.png'
import ava2 from '../images/duc.jpg'
import ava3 from '../images/thsHVV.jpg'
import imgPrj from '../images/temp.png'

const Information = () => {
  return (
    <>
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
                HỆ THỐNG THEO DÕI VÀ CHĂM SÓC HOA CÚC TỪ XA
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
      <div className="scrollable-content">
        <div className="body-wrapper">
          <div className="mentor">
            <Col>
              <p className="title-mentor">GIÁO VIÊN HƯỚNG DẪN</p>
            </Col>
            <div className="info-mentor">
              <div className="mentor-img">
                <img src={ava3} alt="Thay Ho Viet Viet" />
              </div>
              <div className="mentor-desc">
                <div>
                  <span className="desc-title">Ths.</span>
                  <span> Hồ Viết Việt</span>
                </div>
              </div>
            </div>
          </div>
          <div className="members">
            <Col>
              <p className="title-member">THÀNH VIÊN</p>
            </Col>
            <Col className="member">
              <div className="member-img">
                <img src={ava1} alt="Tran Phuc Thinh" />
              </div>
              <div className="member-desc">
                <div>
                  <span className="desc-title">Tên:</span>
                  <span> Trần Phúc Thịnh</span>
                </div>
                <div>
                  <span className="desc-title">Mã SV:</span>
                  <span> 106190037</span>
                </div>
                <div>
                  <span className="desc-title">Chuyên ngành:</span>
                  <span> Kỹ thuật máy tính</span>
                </div>
              </div>
            </Col>
            <Col className="member">
              <div className="member-img">
                <img src={ava2} alt="Le Hoang Duc" />
              </div>
              <div className="member-desc">
                <div>
                  <span className="desc-title">Tên:</span>
                  <span> Lê Hoàng Đức</span>
                </div>
                <div>
                  <span className="desc-title">Mã SV:</span>
                  <span> 106190007</span>
                </div>
                <div>
                  <span className="desc-title">Chuyên ngành:</span>
                  <span> Kỹ thuật máy tính</span>
                </div>
              </div>
            </Col>
          </div>
        </div>
      </div>
      <div className="desc-project">
        <Col>
          <p className="title-project">GIỚI THIỆU ĐỀ TÀI</p>
        </Col>
        <div className="info-project">
          <div className="project-img">
            <img src={imgPrj} alt="prj" />
          </div>
          <div className="project-desc">
            <div style={{ marginBottom: 8 }}>
              <span className="desc-title">Tên đề tài:</span>
              <span> Hệ thống theo dõi và chăm sóc hoa cúc từ xa</span>
            </div>
            <div style={{ marginBottom: 8 }}>
              <span className="desc-title">Chức năng:</span>
              <span>
                {' '}
                Cảm biến, thu thập các giá trị của môi trường sống đồng thời
                điều khiển các thiết bị đặt tại nơi trồng hoa cúc sao cho đảm
                bảo điều kiện đáp ứng điều kiện sinh trưởng của hoa cúc. Đặt
                biệt có thể trồng hoa tại nơi không có internet nhờ vào công
                nghệ LoraWan.
              </span>
            </div>
            <div style={{ marginBottom: 8 }}>
              <span className="desc-title">Công nghệ sử dụng:</span>
              <span>
                {' '}
                Sử dụng các cảm biến như: Độ ẩm không khí/đất, nhiệt độ, ánh
                sáng. Module ESP32 DevKit. Và Mạch thu phát Lora.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Information
