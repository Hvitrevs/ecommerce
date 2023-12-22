import React from 'react'
import Link from 'next/link'

import classes from './index.module.scss'

const LogoAnima = () => {
  return (
    <div className={classes.wrap}>
      <Link href="/">
        <h3 className={classes.text}>|l|HiTechLoLife</h3>
        <span className={classes.parag}>Your Favourite Tech Store🕹️</span>
      </Link>
    </div>
  )
}

export default LogoAnima
