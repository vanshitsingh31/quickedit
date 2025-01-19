import React, { Component, useEffect, useRef, useState } from "react";
import ButtonEdit from "../../../global/Buttons/ButtonEdit";
import {
  AnimatePresence,
  motion,
  useAnimate,
  useIsPresent,
} from "motion/react";
import styled from "styled-components";
import SectionPreviews from "../../../global/Previews/SectionPreviews";
import Topfold2 from "./Topfold2";
import Topfold1 from "./Topfold1";
import Topfold3 from "./Topfold3";

const StyledWrapped = styled.div`
  position: relative;
`;

const StyledPreview = styled(motion.div)`
  display: flex;
  overflow: scroll;
  & > div{
    min-width: 100vw;
  }
`

const TemplateList = [Topfold1, Topfold2, Topfold3];

const RenderTopfold = () => {

  const [edit, toggleEdit] = useState(false);
  const [preview, showPreview] = useState(false);
  const [previewTemplate, setPreviewTemplate] = useState(TemplateList[0].name)
  const [activeTemplate, setActivateTemplate] = useState(TemplateList[0].name);
  const ref = useRef();

  function changeTemplate() {
    showPreview(true);
    toggleEdit(false);
  }

  useEffect(()=>{
    showPreview(false);
  },[activeTemplate])

  useEffect(()=>{
    if (ref.current) {
      ref.current.childNodes.forEach(element => {
        if (element.className.includes('active')) {
          console.log(element.offsetLeft)
          ref.current.scrollLeft = element.offsetLeft;
        }
      });
    }
  }, [previewTemplate])

  return (
    <StyledWrapped
      onHoverStart={()=>{ !edit && !preview ? toggleEdit(true) : null }}
      onHoverEnd={() => {
        toggleEdit(false);
        showPreview(false);
      }}
      as={motion.div}
    >
      {edit ? <ButtonEdit onClick={changeTemplate} /> : <></> }
      {preview ? <SectionPreviews ref={ref} active={activeTemplate} click={setActivateTemplate} hover={setPreviewTemplate} templateList={TemplateList} /> : <></> }

      { preview ?  
        <StyledPreview className="cont" ref={ref}>
          { TemplateList.map((value, index)=>{
            let CompName = value;
            return preview ? <CompName value={value.name} className={previewTemplate == value.name ? "active" : ''} as={motion.div} animate={{ scale: 0.98, borderRadius: "12px" }} key={value.name + (index + 1)} /> : null
          }) }
        </StyledPreview> : <></> }

      {  TemplateList.map((value, index)=>{
        let Template = value;
        return Template.name == activeTemplate && !preview ? <Template as={motion.div} initial={{scale: 0.98, borderRadius: "12px"}} animate={{scale: 1, borderRadius: 0}} key={'active' + Template.name + (index + 1)} /> : null
      }) }
    </StyledWrapped>
  );
};

export default RenderTopfold;
