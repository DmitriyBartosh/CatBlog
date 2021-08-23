import React, { useState, useContext } from 'react'
import { useSpring, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import { OffsetContect } from './context'
import { IoClose, IoLogoVk, IoLogoInstagram } from "react-icons/io5";

import catFight from '../images/cat1.gif'
import catGif from '../images/cat.gif'

function MenuMobile() {
  const [open, setOpen] = useState(false)
  var height = window.innerHeight;
  const [{ y }, api] = useSpring(() => ({ y: 50 }))

  const { offset, setOffset } = useContext(OffsetContect);

  const props = useSpring({
    to: { opacity: open ? 1 : 0, scale: open ? 1 : .2 }
  })

  const contact = useSpring({
    to: {opacity: offset > height / 4 ? 1 : 0, scale: offset > 300 ? 1 : .8}
  })


  const bind = useGesture({
    onDrag: ({ movement: [my] }) => api.start({ y: !open && my < height - (height / 4) ? (my + 60) : null },
      !open && (my < height - (height / 4)) ? setOffset(my) : null
    ),
    onDragEnd: ({ movement: [my] }) => api.start({ y: !open ? ((my > height / 3) ? height - (height / 3) : 50) : null },
      my > height / 3 ? setOpen(!open) : open ? null : setOffset(0)
    )
  })

  const close = () => {
    setOffset(0);
    api.start({ y: 50 }, setOpen(false))
  }


  return (
    <animated.div className="menu" {...bind()} style={{ height: y }}>
      <div className="menuHint" style={{right: open ? 32 : 15}}>{open ? 'Ах ты любопытный котофей' : 'Лапкой тяни'}</div>
      <animated.img className="fight" style={contact} src={catFight} alt="Моя котячья фотка" />
      <animated.div style={contact} className="contact">
        <h2>Ладно, раз уж зашел</h2>
        <p>Это моё малёханький бложик, фоточки сюда кидаю, видосики!!</p>
        <p>Если душка хватит, подписывайся на мои соц сети!!!!</p>
        <div className="social">
          <a href="https://www.instagram.com/shmidt__art/" target="_blank" rel="noreferrer"><IoLogoInstagram />Котограм</a>
          <a href="https://vk.com/kateshmidt1" target="_blank" rel="noreferrer"><IoLogoVk />ВКотофейне</a>
        </div>
        <p>А если у тебя есть пирожочки маленькие, записывай!!!!<br/>Порисуем чего нибудь!!</p>
        <img className="please" src={catGif} alt="Запиши пирожочка!" />
      </animated.div>
      {open && (
        <animated.button style={props} className="close" onClick={close}>
          <IoClose />
        </animated.button>
      )}
    </animated.div>
  )
}

export default MenuMobile