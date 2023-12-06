import React from 'react'
import { ButtonT } from './ButtonT'

const Button = (props: ButtonT) => {
  const { variant, size, ...cleanProps } = props

  return (
    <button
      {...cleanProps}
      className={`${'btn'} ${cleanProps.className ?? ''} ${`btn-${variant ?? 'primary'}`} ${`btn-${size ?? 'md'}`}`}
    />
  )
}

export default Button
