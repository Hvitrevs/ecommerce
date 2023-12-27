import React from 'react'
import { Metadata } from 'next'

import { Gutter } from '../../_components/Gutter'
import LogoAnima from '../../_components/LogoAnima'
import { RenderParams } from '../../_components/RenderParams'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import CreateAccountForm from './CreateAccountForm'

import classes from './index.module.scss'

export default async function CreateAccount() {
  await getMeUser({
    validUserRedirect: `/account?warning=${encodeURIComponent(
      'Cannot create a new account while logged in, please log out and try again.',
    )}`,
  })

  return (
    <section className={classes.createAccount}>
      <div className={classes.wrap}>
        <LogoAnima />
      </div>
      <div className={classes.formWrapper}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <h3>Create Account</h3>
          </div>
          <RenderParams className={classes.params} />
          <CreateAccountForm />
        </div>
      </div>
    </section>
  )
}

export const metadata: Metadata = {
  title: 'Account',
  description: 'Create an account or log in to your existing account.',
  openGraph: mergeOpenGraph({
    title: 'Account',
    url: '/account',
  }),
}
