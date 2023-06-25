import React from "react";
import { Col, Row, Switch } from "antd";
import { ref, update } from "firebase/database";
import { database } from "../firebaseConfig";

const ModePanel = () => {
  function writeNewPost(newVal, selectedMode) {
    // A post entry.
    const postData = newVal;
    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates[`${selectedMode}`] = postData;
    return update(ref(database), updates);
  }
  const onChange = (selectedMode, checked) => {
    writeNewPost(`${checked}`, `${selectedMode}`);
  };
  return (
    <div className="switch-wrapper">
      <div className="switch-content">
        <Row>
          <Col span={1}></Col>
          <Col span={11}>
            <Switch
              defaultChecked={false}
              onChange={(isChecked) => {
                onChange("AUTO", isChecked);
              }}
            />
            <span className="mode-title" style={{ textTransform: "uppercase" }}>Tự động</span>
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
              defaultChecked={false}
              onChange={(isChecked) => {
                onChange("DEN", isChecked);
              }}
            />
            <span className="mode-title" style={{ textTransform: "uppercase" }}>Đèn</span>
          </Col>
          <Col span={11}>
            <Switch
              defaultChecked={false}
              onChange={(isChecked) => {
                onChange("PHUN_NUOC", isChecked);
              }}
            />
            <span className="mode-title" style={{ textTransform: "uppercase" }}>Phun nước</span>
          </Col>
          <Col span={1}></Col>
        </Row>
      </div>
      <div className="switch-content">
        <Row>
          <Col span={1}></Col>
          <Col span={11}>
            <Switch
              defaultChecked={false}
              onChange={(isChecked) => {
                onChange("QUAT", isChecked);
              }}
            />
            <span className="mode-title" style={{ textTransform: "uppercase" }}>Quạt</span>
          </Col>
          <Col span={11}>
            <Switch
              defaultChecked={false}
              onChange={(isChecked) => {
                onChange("PHUN_SUONG", isChecked);
              }}
            />
            <span className="mode-title" style={{ textTransform: "uppercase" }}>Phun sương</span>
          </Col>
          <Col span={1}></Col>
        </Row>
      </div>
      {/* <div className="switch-content">
        <Row>
          <Col span={1}></Col>
          <Col span={11}>
            <Switch
              defaultChecked={false}
              onChange={(isChecked) => {
                onChange("Keo_man_che_len", isChecked);
              }}
            />
            <span className="mode-title" style={{ textTransform: "uppercase" }}>Open roof</span>
          </Col>
          <Col span={11}>
            <Switch
              defaultChecked={false}
              onChange={(isChecked) => {
                onChange("Keo_man_che_xuong", isChecked);
              }}
            />
            <span className="mode-title" style={{ textTransform: "uppercase" }}>Close roof</span>
          </Col>
          <Col span={1}></Col>
        </Row>
      </div> */}
    </div>
  );
};

export default ModePanel;
