import React from 'react'
import { Metadata } from 'next'

import LogoAnima from '../../_components/LogoAnima'
import { RenderParams } from '../../_components/RenderParams'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import LoginForm from './LoginForm'

import classes from './index.module.scss'

export default async function Login() {
  await getMeUser({
    validUserRedirect: `/account?warning=${encodeURIComponent('You are already logged in.')}`,
  })

  return (
    <section className={classes.login}>
      <div className={classes.wrap}>
        <LogoAnima />
      </div>
      <div className={classes.formWrapper}>
        <div className={classes.formContainer}>
          <RenderParams className={classes.params} />

          <div className={classes.formTitle}>
            <h5>Hi there!👋</h5>
          </div>
          <p>Enter your credentials</p>
          <LoginForm />
        </div>
      </div>
    </section>
  )
}

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login or create an account to get started.',
  openGraph: mergeOpenGraph({
    title: 'Login',
    url: '/login',
  }),
}
