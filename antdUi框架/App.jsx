import React, { Component } from 'react'
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import './App.css';
 
export default class App extends Component {
  render() {
    return (
      <div>
        adasd
        <button>点我</button>
        <Button type="primary" shape="round" icon={<DownloadOutlined />}>
          Download
        </Button>
      </div>
    )
  }
}
