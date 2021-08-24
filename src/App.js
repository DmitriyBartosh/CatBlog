import React, { useState } from 'react';
import Content from './component/content'
import useWindowDimensions from './hooks/useWindowDimensions'
import Menu from './component/menu'
import MenuMobile from './component/menuMobile'
import { OffsetContect } from './component/context'

import './style/style.scss'
import './style/reset.scss'

function App() {
  const [offset, setOffset] = useState(0);
  const { width } = useWindowDimensions();

  return (
    <OffsetContect.Provider value = {{ offset, setOffset }}>
      <section className="container">
        {width > 1024 ? <Menu /> : <MenuMobile />}
        <Content />
      </section>
    </OffsetContect.Provider>
  )
}

export default App;
