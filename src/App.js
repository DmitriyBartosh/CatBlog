import React, { useState } from 'react';
import Content from './component/content'
import Menu from './component/menu'
import { OffsetContect } from './component/context'

import './style/style.scss'
import './style/reset.scss'

function App() {
  const [offset, setOffset] = useState(0);

  return (
    <OffsetContect.Provider value = {{ offset, setOffset }}>
      <section className="container">
        <Menu />
        <Content />
      </section>
    </OffsetContect.Provider>
  )
}

export default App;
