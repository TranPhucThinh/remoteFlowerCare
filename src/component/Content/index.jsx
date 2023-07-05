import React from 'react'
import { Card } from 'antd'

import './content.scss'
import HeaderContent from './HeaderContent'
import Stats from './Stats'
import Introduce from './Introduce'

const Content = () => {
  return (
    <Card
      style={{
        width: '100%',
        borderRadius: 12,
        backgroundColor: '#40a9ff',
        boxShadow: 'rgb(64, 169, 255) 3px 4px 16px 0px',
      }}
    >
      <HeaderContent />
      <Stats />
      <Introduce />
    </Card>
  )
}

export default Content
