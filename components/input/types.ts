import { InputHTMLAttributes } from 'react'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeHolder?: string
  type?: string 
  value?: string
  alt?: string
  name?: string
}
