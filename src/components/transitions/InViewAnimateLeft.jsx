import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const InViewAnimateLeft = ({duration,delay,children}) => {
  const {ref, inView} = useInView();
  const animation = useAnimation();

  React.useEffect(()=> {
    if(inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "tween", duration: duration ? duration : 1.4, delay: delay ? delay : 0.2
        }
      });
    }
    if(!inView) {
      animation.start({
        x: "-100vw",
        opacity: 0,
      }, [inView]);
    }
  })

  return (
    <div ref={ref} style={{overflowX:"hidden"}} >
      <motion.div animate={animation} >{children} </motion.div>
    </div>
  )
}

export default InViewAnimateLeft