import React, { useContext } from 'react'
import { useSpring, animated } from 'react-spring'
import useWindowDimensions from '../hooks/useWindowDimensions'
import { OffsetContect } from './context'
import { cats } from './data'

function Content() {
  const { offset } = useContext(OffsetContect);
  const { height, width } = useWindowDimensions();

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

  const contentMobile = useSpring({
    to: { filter: `brightness(${1 - progress / 4})` }
  })
  const contentTitleMobile = useSpring({
    to: { y: progress * -(height / 4) }
  })
  const contentItemsMobile = useSpring({
    to: { transform: `scale(${1 - (progress / 10)})`, y: progress * -(height / 4) }
  })

  return (
    <animated.div className="content" style={width > 1024 ? content : contentMobile}>
      <animated.h1 style={width > 1024 ? contentTitle : contentTitleMobile}>Ну приветики!<br />это мой <span>котячий</span> блог <span>Kate.Shmidt!</span></animated.h1>
      <div className="contentCats">
        {cats.map((cat, index) => {
          const { name, image } = cat;

          return <animated.div className="item" style={width > 1024 ? contentItems : contentItemsMobile} key={index}>
            <img src={image} alt={name} />
            <p>{name}</p>
          </animated.div>
        })}
      </div>
    </animated.div>
  )
}

export default Content
