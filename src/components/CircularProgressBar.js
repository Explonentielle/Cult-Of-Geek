import React from 'react'
import { Progress } from 'antd';

const CircularProgressBar = ({ percentage }) => { 
  let color = ""
  console.log(percentage)
  if (percentage < 50) {
    color = "red"
  }
  else {
    color = "green"
  }
    return (
        <div className='progessContainer'>
          <Progress type="circle" trailColor={'white'} percent={percentage} strokeColor={color}   textStyle={'white'}  />
        </div>
      );
}

export default CircularProgressBar