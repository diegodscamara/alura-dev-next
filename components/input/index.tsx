import { InputStyle } from './styles'
import { Props } from './types'
import React from 'react'

const Input: React.FC<Props> = ({ placeHolder, type, value, alt, name }) => {
  return (
    <InputStyle placeholder={placeHolder} type={type} value={value} alt={alt} name={name} />
  )
}

export default Input
