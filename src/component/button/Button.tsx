import React from 'react'
import { ButtonT } from './ButtonT'

const Button = (props: ButtonT) => {
  const { variant, size, lIcon, rIcon, children, ...cleanProps} = props

  return (
    <button
      {...cleanProps}
      className={`${'btn '}${cleanProps.className ?? ' '}${`btn-${variant ?? 'primary'}`} ${`btn-${size ?? 'md'}`}`}
    >
      {lIcon}
      {children}
      {rIcon}
    </button>
  )
}

export default Button
