import { Card } from 'antd'
import React from 'react'

import HeaderContent from './HeaderContent'
import Stats from './Stats'
import './content.scss'

const Content = () => {
  return (
    <Card
      style={{
        width: '100%',
        borderRadius: 12,
        height: 600,
        backgroundColor: '#40a9ff',
        boxShadow: 'rgb(64, 169, 255) 3px 4px 16px 0px',
      }}
    >
      <HeaderContent />
      <Stats />
    </Card>
  )
}

export default Content
