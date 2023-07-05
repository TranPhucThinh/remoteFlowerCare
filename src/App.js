import React from 'react'
import MasterLayout from './component/MasterLayout'

const App = () => {
  const getPositionTab = () => {
    if (window.innerWidth >= 480) {
      return 'left'
    }
    return 'top'
  }

  return (
    // <div className="container">
    //   <Weather />
    //   <Clock />
    //   <div className="content-wrapper">
    //     <Tabs defaultActiveKey="1" tabPosition={getPositionTab()}>
    //       <Tabs.TabPane
    //         tab={<span style={{ color: 'white' }}>Giới thiệu</span>}
    //         key="1"
    //       >
    //         <Information />
    //       </Tabs.TabPane>
    //       <Tabs.TabPane
    //         tab={<span style={{ color: 'white' }}>Theo dõi & Điều khiển</span>}
    //         key="2"
    //       >
    //         <InfoPanel />
    //         <ModePanel />
    //       </Tabs.TabPane>
    //     </Tabs>
    //   </div>
    //   <Footer />
    // </div>
    <MasterLayout />
  )
}

export default App
