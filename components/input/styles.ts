import styled from 'styled-components'
import theme from '../../styles/theme'

export const InputStyle = styled.input`
  border: none;
  width: 100%;
  height: ${theme.spacing.xx3large};
  background: ${theme.colors.general.gray200};
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.xsmall};
  font-weight: ${theme.font.weight.regular};
  font-size: ${theme.font.size.xsmall};
  line-height: ${theme.font.lineHeight.xlarge};
  color: ${theme.colors.general.white};
  opacity: ${theme.opacity.opacity600};
  
  ::placeholder {
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.size.xsmall};
    line-height: ${theme.font.lineHeight.xlarge};
    color: ${theme.colors.general.white};
    opacity: ${theme.opacity.opacity600};
  }

  &:hover {
    background: ${theme.colors.general.gray400};
  }
`