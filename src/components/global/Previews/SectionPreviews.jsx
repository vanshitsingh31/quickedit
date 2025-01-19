import { motion } from 'motion/react'
import React from 'react'
import styled from 'styled-components'

const StyledPreview = styled(motion.div)`
  border: 2px solid lightgrey;
  border-radius: 6px;
  padding: 4px;
  background: white;
  display: flex;
  gap: 4px;
  width: fit-content;
  z-index: 1;
   > div{
    padding: 8px 24px;
    border: 2px solid lightgrey;
    text-align: center;
    color: black;
    border-radius: 4px;
    &:hover{
      background: lightgrey;
      cursor: pointer;
    }
    &.active{
      border-color: black;
    }
   }
`

const SectionPreviews = React.forwardRef((props, ref) => {

  function handleHover(e) {
    props.hover(e.target.attributes[1].value)
  }

  return (
    <div style={{position: "absolute", width: "100%", textAlign: "center", display: "flex", justifyContent: "center", top: "10px"}}>
      <StyledPreview onHoverEnd={props.onHoverEnd}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        key="sectionPreview" 
      >
        { props.templateList.map((value, index)=>{
          return <div role='button' value={value.name} position={index} onClick={(e)=>{ props.click(e.target.attributes[1].value) }} onMouseEnter={handleHover} key={'preview' + value.name + index} > {index + 1} </div>
        }) }
      </StyledPreview>
    </div>
  )
})

export default SectionPreviews
