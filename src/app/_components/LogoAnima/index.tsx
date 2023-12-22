import React from 'react'
import Link from 'next/link'

import classes from './index.module.scss'

const LogoAnima = () => {
  return (
    <Link href="/">
      <h3 className={classes.text}>|l|HiTechLoLife</h3>
    </Link>
  )
}

export default LogoAnima
