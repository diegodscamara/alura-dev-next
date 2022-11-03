import { ButtonStyle } from './styles'
import Image from 'next/image'
import { Props } from './types'
import React from 'react'

const Button: React.FC<Props> = ({ content, icon, ...props }) => {
  return (
    <ButtonStyle {...props}>
      <span>{content}</span>
      {icon && <Image src={icon} alt='Icon' width={20} height={20} />}
    </ButtonStyle>
  )
}

export default Button
