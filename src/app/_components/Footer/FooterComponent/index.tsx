'use client'

import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { inclusions, noHeaderFooterUrls } from '../../../constants'
import { Gutter } from '../../Gutter'

import classes from './index.module.scss'

const FooterComponent = () => {
  const pathname = usePathname()

  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <Gutter>
        <ul className={classes.inslussions}>
          {inclusions.map(inclusion => (
            <li key={inclusion.title}>
              <Image
                src={inclusion.icon}
                alt={inclusion.title}
                width={36}
                height={36}
                className={classes.icon}
              />
              <h6 className={classes.title}>{inclusion.title}</h6>
              <p>{inclusion.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>
    </footer>
  )
}

export default FooterComponent
