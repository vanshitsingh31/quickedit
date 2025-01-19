import { AnimatePresence, motion } from 'motion/react'
import React from 'react'
import styled from 'styled-components'

const StyledButton = styled(motion.button)`
  all: unset;
  background: white;
  color: black;
  border-radius: 4px;
  font-size: 1rem;
  padding: 4px 8px;
  border: 2px solid #dcdcdc;
  z-index: 1;
  position: relative;
  cursor: pointer;
`

const ButtonEdit = (props) => {
  return (
    <div style={{position: "absolute", width: "100%", textAlign: "center", display: "flex", justifyContent: "center", top: "0px"}}>
      <StyledButton 
        layout
        {...props}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, top: "10px" }}
        exit={{ opacity: 0, scale: 0 }}
        key="editButton" 
        className='sectionEdit'
      >
        Change Section
      </StyledButton>
    </div>
  )
}

export default ButtonEdit
