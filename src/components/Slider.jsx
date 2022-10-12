import { MinusOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Progress } from "antd"
import React, { useState } from "react"

const Slider = ({ percent, setPercent }) => {


  return (
    <>
      <Progress percent={percent} showInfo={false} />
    </>
  );
};

export default Slider
