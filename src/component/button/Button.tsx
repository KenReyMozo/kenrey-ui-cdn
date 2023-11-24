import React from 'react'
import { Colorable } from '../component'

type ButtonT = Colorable & React.ComponentProps<'button'>

const Button = (props: ButtonT) => {
  const { shade, variant, ...cleanProps } = props

  return (
    <button
      {...cleanProps}
      className={`${'btn'} ${cleanProps.className ?? ''} ${
        variant ? `${variant}${shade ? `-${shade}` : ''}` : ''
      }`}
    />
  )
}

export default Button
