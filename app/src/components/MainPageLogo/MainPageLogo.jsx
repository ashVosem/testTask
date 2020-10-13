import React from "react"

import { useSpring, animated } from 'react-spring'

import FlyIcons from '../FlyIcons/FlyIcons'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`

const MainPageLogo = () => {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  
    return (
        <div className="main-logo" 
            onMouseEnter={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
            onMouseLeave={() => set({ xy: [0, 0] })}
        >
            <animated.div className="big_logo" style={{ transform: props.xy.interpolate(trans1) }} />
            <FlyIcons set={set}/>
        </div>
        
    )
}

export default MainPageLogo