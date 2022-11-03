import { ButtonHTMLAttributes } from 'react'

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined' | 'icon' | 'menu' | 'reaction' | 'user'
  content?: string
  icon?: string
}
