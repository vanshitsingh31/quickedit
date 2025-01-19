import React, { useEffect, useState } from 'react'
import {motion} from 'motion/react'
import styled from 'styled-components'
import Button from '../../../global/Buttons/Button'

const StyledWrapper = styled.div`
  background: #8E1616;
  position: relative;
  > div > *:not(:last-child){
    margin-bottom: 32px;
  }
  & *{
    color: white;
    text-align: center;
  }
  h1{ 
    text-align: center;
  }
  .buttons{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
`

const Topfold2 = (props) => {

  const [data, setData] = useState({
    heading: "A Modern SaaS Template",
    para: "Cally is an extensive Framer template tailored for SaaS <br/> businesses that covers all the pages and sections you need.",
    mainBtn: "Hello"
  });


  function updateData(e) {
    let newData = data;
    if(e.target.className == "heading"){
      newData.heading = e.target.innerHTML
    } else if(e.target.className == "para"){
      newData.para = e.target.innerHTML
    } else if(e.target.className == "mainBtn"){
      newData.mainBtn = e.target.innerHTML
    }
    setData((prev)=>{
      localStorage.setItem('topfold', JSON.stringify(newData))
      return newData;
    })
  }

  return (
    <StyledWrapper {...props} style={{ overflow: "hidden" }} > 
        <div className='maxWidth paddingVer paddingHor'>
          <h2 className='heading' onInput={ (e)=>{updateData(e)}} onBlur={(e)=>{ console.log(data) }} contentEditable="true" suppressContentEditableWarning={true} > 
            {data.heading}
          </h2>
          <div className='buttons'>
            <Button className="mainBtn" contentEditable="true" suppressContentEditableWarning={true} > Buy Now </Button>
            <Button $outline className="mainBtn" contentEditable="true" suppressContentEditableWarning={true}> Login </Button>
          </div>
          <p className="para" contentEditable="true" suppressContentEditableWarning={true}> Cally is an extensive Framer template tailored for SaaS <br /> businesses that covers all the pages and sections you need. </p>
        </div>
    </StyledWrapper>
  )
}

export default Topfold2
