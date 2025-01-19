import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`

`

const Wrapper = (props) => {
  return (
    <StyledWrapper className='maxWidth paddingHor paddingVer'>
      {props.children}
    </StyledWrapper>
  )
}

export default Wrapper
