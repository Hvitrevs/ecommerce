import React from 'react'
import { Metadata } from 'next'

import { Gutter } from '../../_components/Gutter'
import LogoAnima from '../../_components/LogoAnima'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { RecoverPasswordForm } from './RecoverPasswordForm'

import classes from './index.module.scss'

export default async function RecoverPassword() {
  return (
    <section className={classes.recoverPassword}>
      <div className={classes.wrap}>
        <LogoAnima />
      </div>
      <div className={classes.formWrapper}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <h3>Recover Password</h3>
          </div>
          <RecoverPasswordForm />
        </div>
      </div>
    </section>
  )
}

export const metadata: Metadata = {
  title: 'Recover Password',
  description: 'Enter your email address to recover your password.',
  openGraph: mergeOpenGraph({
    title: 'Recover Password',
    url: '/recover-password',
  }),
}
