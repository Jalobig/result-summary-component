import React from 'react'
import classes from './Footer.module.scss'
const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.attribution}>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel='noreferrer' target="_blank"
          >Frontend Mentor</a
        >. Coded by <a href="https://github.com/Jalobig">Jason Alexis</a>.
      </div>
    </div>
  )
}

export default Footer