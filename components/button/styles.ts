import styled, { css } from 'styled-components'

import { Props } from './types'
import theme from '../../styles/theme'

const ButtonVariants = {
  filled: css`
    background: ${theme.colors.general.blue300};
    border-radius: ${theme.borderRadius.medium};

    &:hover {
      background: ${theme.colors.general.blue200};
    }

    &:active {
      background: ${theme.colors.general.blue200};
      border: ${theme.borderRadius.small} solid ${theme.colors.general.blue300};
    }

    &:focus {
      background: ${theme.colors.general.blue100};
    }
  `,
  outlined: css`
    background: ${theme.colors.general.blue300};
    border-radius: ${theme.borderRadius.medium};

    &:hover {
      background: ${theme.colors.general.blue300};
      opacity: ${theme.opacity.opacity100};
    }

    &:active {
      background: ${theme.colors.general.blue300};
      border: ${theme.borderRadius.small} solid ${theme.colors.general.blue300};
    }

    &:focus {
      background: ${theme.colors.general.blue300};
      opacity: ${theme.opacity.opacity200};
    }
`,
  icon: css`
    background: transparent;
    border-radius: ${theme.borderRadius.large};
    width: 4.8rem;
    height: 4.8rem;

    &:hover {
      background: ${theme.colors.general.blue300};
    }

    &:active {
      background: ${theme.colors.general.blue300};
      opacity: ${theme.opacity.opacity100};
    }
  `,
  menu: css`
    background: ${theme.colors.general.blue300};
    border-radius: ${theme.borderRadius.large};
    opacity: ${theme.opacity.opacity100};

    &:hover {
      background: ${theme.colors.general.blue300};
      opacity: ${theme.opacity.opacity600};
    }

    &:active {
      background: ${theme.colors.general.blue300};
    }
`,
  reaction: css`
    background: transparent;
    border-radius: ${theme.borderRadius.large};

    &:hover {
      background: ${theme.colors.general.white};
      opacity: ${theme.opacity.opacity100};
    }

    &:active {
      background: ${theme.colors.general.white};
      opacity: ${theme.opacity.opacity200};
    }
  `,
  user: css`
    background: transparent;
    border-radius: ${theme.borderRadius.medium};

  &:hover {
    background: ${theme.colors.general.white};
    opacity: ${theme.opacity.opacity200};
  }
`,
}

export const ButtonStyle = styled.button<Props>`
  transition: ${theme.effect.transition.default};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:disabled {
    opacity: 50%;
    cursor: not-allowed;
  }

  span, 
  svg {
    cursor: pointer;
  }

  ${props => ButtonVariants[props.variant || 'filled']}
`
