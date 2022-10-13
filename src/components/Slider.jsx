import {Progress } from "antd"
import React from "react"

const Slider = ({ percent, setPercent }) => {


  return (
    <>
      <Progress percent={percent} showInfo={false}/>
    </>
  );
};

export default Slider
