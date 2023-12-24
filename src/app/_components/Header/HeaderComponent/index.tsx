'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Header } from '../../../../payload/payload-types'
import { noHeaderFooterUrls } from '../../../constants'
import { Gutter } from '../../Gutter'
import LogoAnima from '../../LogoAnima'
import { HeaderNav } from '../Nav'

import classes from './index.module.scss'

const HeaderComponent = ({ header }: { header: Header }) => {
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const pathname = usePathname()
  return (
    <nav
      className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter className={classes.wrap}>
        <div className={classes.logo}>
          <LogoAnima />
        </div>
        <HeaderNav header={header} />
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
