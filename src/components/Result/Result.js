import React from 'react'
import classes from './Result.module.scss'

const Result = () => {
  return (
    <div className={classes.results}>
          <div class={classes.results__title}>Your Result</div>
          <div class={classes.results__score}>
            <span>76</span> of 100</div>
          <div class={classes.results__subtitle}>Great</div>
          <div class={classes.results__description}>
            You scored higher than 65% of the people who have taken these tests.
          
        </div>
    </div>
  )
}

export default Result