import { motion } from 'motion/react'
import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  all: unset;
  background: ${props => props.$outline ? props.theme.color.light : props.theme.color.main}; 
  color: ${props => props.$outline ? props.theme.color.dark : props.theme.color.light }!important;
  padding: 0.8rem 1.5rem;
  min-width: 150px;
  border-radius: 4px;
  font-weight: 500;
  border: 0px solid ${props => props.theme.color.main};
  border-width: ${props => props.$outline ? "1px" : 0};
  &:hover{
    opacity: 0.8;
  }
`

const Button = (props) => {

  return (
    <StyledButton {...props} as={motion.button} initial={{ opacity: 1 }} whileHover={{ scale: 0.98, opacity: 0.8 }} >
      {props.children}
    </StyledButton>
  )
}

export default Button
