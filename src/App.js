import React, { useState } from "react";
import "./App.css";
import { Col, Row, Tabs, InputNumber } from "antd";
import logo from "./images/image002.png";
import logo1 from "./images/logokhoa.png";
import { ref, update } from "firebase/database";
import { database } from "./firebaseConfig";
import InfoPanel from "./component/info-panel";
import ModePanel from "./component/mode-panel";
import Footer from "./component/footer";
import Clock from "./component/clock";

const App = () => {
  const [alarmOff, setAlarmOff] = useState(0);
  const [alarmOn, setAlarmOn] = useState(23);
  const [lowTemp, setLowTemp] = useState(25);
  const [highTemp, setHighTemp] = useState(35);
  const [lowHumi, setLowHumi] = useState(80);
  const [highHumi, setHighHumi] = useState(90);
  const [lowLight, setLowLight] = useState(10);
  const [highLight, setHighLight] = useState(30);

  function writeNewPost (newVal, selectedMode) {
    // A post entry.
    const postData = newVal;
    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates[`${selectedMode}`] = postData;
    return update(ref(database), updates);
  }

  const alarmOffChange = (value, selectedMode) => {
    setAlarmOff(value);
    writeNewPost(`${value}`, `${selectedMode}`)
  }

  const alarmOnChange = (value, selectedMode) => {
    setAlarmOn(value);
    writeNewPost(`${value}`, `${selectedMode}`)
  }

  const lowTempChange = (value, selectedMode) => {
    setLowTemp(value);
    writeNewPost(`${value}`, `${selectedMode}`)
  }

  const highTempChange = (value, selectedMode) => {
    setHighTemp(value);
    writeNewPost(`${value}`, `${selectedMode}`)
  }

  const lowHumiChange = (value, selectedMode) => {
    setLowHumi(value);
    writeNewPost(`${value}`, `${selectedMode}`)
  }

  const highHumiChange = (value, selectedMode) => {
    setHighHumi(value);
    writeNewPost(`${value}`, `${selectedMode}`)
  }

  const lowLightChange = (value, selectedMode) => {
    setLowLight(value);
    writeNewPost(`${value}`, `${selectedMode}`)
  }

  const highLightChange = (value, selectedMode) => {
    setHighLight(value);
    writeNewPost(`${value}`, `${selectedMode}`)
  }

  return (
    <div className="container">
      <div className="header-wrapper">
        <Row className="header">
          <Col span={6} className="title-wrapper">
            <div className="school-logo-wrapper">
              <img src={logo} className="school-logo" alt="Logo DUT"></img>
            </div>
          </Col>
          <Col span={12}>
            <div className="header-title">
              <p className="title-text">HỆ THỐNG TRỒNG HOA CÚC TRONG NHÀ KÍNH</p>
            </div>
          </Col>
          <Col span={6} className="title-wrapper">
            <div className="school-logo-wrapper">
              <img src={logo1} className="faculty-logo" alt="Logo ETE"></img>
            </div>
          </Col>
        </Row>
      </div>
      <Clock />
      <div className="content-wrapper">
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="General Info" key="1">
            <InfoPanel />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Mode Settings" key="2">
            <ModePanel />
          </Tabs.TabPane>
          {/* <Tabs.TabPane tab="Alarm Settings" key="3">
            <div className="switch-wrapper">
              <div className="switch-content">
                <Row>
                  <Col span={1}></Col>
                  <Col span={11}>
                    <InputNumber value={alarmOn} min={0} max={24} step={0.5} onChange={e => alarmOnChange(e.valueOf(), 'Giobatloa')} />
                    <span className="mode-title">Set speaker on time</span>
                  </Col>
                  <Col span={11}>
                    <InputNumber value={alarmOff} min={0} max={24} step={0.5} onChange={e => alarmOffChange(e.valueOf(), 'Giotatloa')} />
                    <span className="mode-title">Set speaker off time</span>
                  </Col>
                  <Col span={1}></Col>
                </Row>
              </div>
              <div className="switch-content">
                <Row>
                  <Col span={1}></Col>
                  <Col span={11}>
                    <InputNumber value={lowTemp} min={20} max={30} step={0.5} onChange={e => lowTempChange(e.valueOf(), 'GH_NhietDo_Low')} />
                    <span className="mode-title">Lowest Temperature Limit</span>
                  </Col>
                  <Col span={11}>
                    <InputNumber value={highTemp} min={30} max={40} step={0.5} onChange={e => highTempChange(e.valueOf(), 'GH_NhietDo_High')} />
                    <span className="mode-title">Highest Temperature Limit</span>
                  </Col>
                  <Col span={1}></Col>
                </Row>
              </div>
              <div className="switch-content">
                <Row>
                  <Col span={1}></Col>
                  <Col span={11}>
                    <InputNumber value={lowHumi} min={75} max={85} step={0.5} onChange={e => lowHumiChange(e.valueOf(), 'GH_DoAm_Low')} />
                    <span className="mode-title">Lowest Humidity Limit</span>
                  </Col>
                  <Col span={11}>
                    <InputNumber value={highHumi} min={85} max={95} step={0.5} onChange={e => highHumiChange(e.valueOf(), 'GH_DoAm_High')} />
                    <span className="mode-title">Highest Humidity Limit</span>
                  </Col>
                  <Col span={1}></Col>
                </Row>
              </div>
              <div className="switch-content">
                <Row>
                  <Col span={1}></Col>
                  <Col span={11}>
                    <InputNumber value={lowLight} min={0.2} max={50} step={0.2} onChange={e => lowLightChange(e.valueOf(), 'GH_AS_Low')} />
                    <span className="mode-title">Lowest Light Condition Limit</span>
                  </Col>
                  <Col span={11}>
                    <InputNumber value={highLight} min={0.2} max={50} step={0.2} onChange={e => highLightChange(e.valueOf(), 'GH_AS_High')} />
                    <span className="mode-title">Highest Light Condition Limit</span>
                  </Col>
                  <Col span={1}></Col>
                </Row>
              </div>
            </div>
          </Tabs.TabPane> */}
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default App;
