import React, { useContext } from 'react'
import { useSpring, animated } from 'react-spring'
import { OffsetContect } from './context'
import { cats } from './data'

function Content() {
  const { offset } = useContext(OffsetContect);
  var width = window.innerWidth;

  var progress = offset / (width - (width / 3))

  const content = useSpring({
    to: { filter: `brightness(${1 - progress / 1.5})` }
  })

  const contentItems = useSpring({
    to: { transform: `scale(${1 - (progress / 10)})`, x: progress * (width / 4) }
  })

  const contentTitle = useSpring({
    to: { x: progress * (width / 4) }
  })

  return (
    <animated.div className="content" style={content}>
      <animated.h1 style={contentTitle}>Ну приветики!<br />это мой <span>котячий</span> блог <span>Kate.Smidt!</span></animated.h1>
      <div className="contentCats">
        {cats.map((cat, index) => {
          const { name, image } = cat;

          return <animated.div className="item" style={contentItems} key={index}>
            <img src={image} alt={name} />
            <p>{name}</p>
          </animated.div>
        })}
      </div>
    </animated.div>
  )
}

export default Content
