import React from 'react'
import { ButtonT } from './ButtonT'

const Button = (props: ButtonT) => {
  const { variant, size, lIcon, rIcon, children, isDestructive, ...cleanProps} = props

  return (
    <button
      {...cleanProps}
      className={`${'btn '}${cleanProps.className ?? ' '}${`btn-${variant ?? 'primary'}${isDestructive ? '-destructive' : ''}`} ${`btn-${size ?? 'md'}`}`}
    >
      {lIcon}
      {children}
      {rIcon}
    </button>
  )
}

export default Button
