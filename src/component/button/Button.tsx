import React from 'react'
import styles from '../../index.module.css'
import { ButtonT } from './ButtonT'

const Button = (props: ButtonT) => {
  const { variant, ...cleanProps } = props

  return (
    <button
      {...cleanProps}
      className={`${styles['btn']} ${cleanProps.className ?? ''} ${
        variant ? styles[`btn-${variant ?? 'primary'}`] : ''
      }`}
    />
  )
}

export default Button
