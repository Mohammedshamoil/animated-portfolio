import React from 'react'
import './about.scss'
import{motion} from "framer-motion"

const textvariants={
  initial: {
    y: 10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
}

const About = () => {
  return (
    <><div className="about">
        <motion.div  variants={textvariants} initial="initial" animate="animate" exit={{ opacity: 0, transition: { duration: 1 } }} className="main">
            <motion.img whileHover={{}} src="/heropic.JPG"  alt="" />
            <motion.div variants={textvariants} className="about-text">
              <motion.h2 variants={{ initial: { opacity: 0, y: -20 },animate: {opacity:1,y:0}}}>About Me</motion.h2>
              <h5>Developer</h5>
              <p>jbjkbjdbvbbkx
                lcndcvdcbdcb
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iste rerum, esse sit quibusdam eos autem soluta repudiandae dicta, neque officia, accusamus eligendi fugit tempore blanditiis molestias error ea aperiam!
                Illum iure repellat repudiandae veniam perferendis tempora non sunt nisi quas accusantium enim dicta dolores magnam, laboriosam temporibus quae corrupti explicabo laudantium eaque. Voluptatibus doloribus repudiandae debitis, nobis magnam ipsum.
                Facilis mollitia nam quis adipisci quae doloremque facere nostrum magni officia veniam et neque delectus, in amet saepe rem culpa quisquam? Maiores placeat illum sequi, molestiae modi perspiciatis quisquam delectus!
              </p>
            </motion.div>

        </motion.div>
        </div></>
  )
}

export default About