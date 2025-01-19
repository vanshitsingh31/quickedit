import React from 'react'
import styled from 'styled-components'
import {GoGoal} from "react-icons/go";

const StyledCard = styled.div`
  &:has(p){
    padding: 2rem;
    border-radius: 1rem;
  }
  &:not(:has(p)){
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    padding: 0.5rem 1.2rem;
    gap: 0.5rem;
    svg{
      box-shadow: unset;
      font-size: 1rem;
      padding: 0;
      border-radius: 0;
      margin: 0!important;
    }
    h3{
      font-weight: 400;
      font-size: 1.1rem;
    }
  } 
  background: ${props => props.theme.color.light};
  & > *:not(:last-child){
    margin-bottom: 0.5rem;
  }
  & *:not(svg){
    color: ${props => props.theme.color.dark};
  }
  svg{
    background: ${props => props.theme.color.light};
    padding: 0.8rem;
    font-size: 4rem;
    box-shadow: 1px 1px 8px -5px ${props => props.theme.color.lightDark};
    border-radius: 1rem;
  }
  svg *{
    color: ${props => props.theme.color.main};
  }
`

// console.log(icons)

const CardsA = (props) => {
  return (
    <StyledCard>
      <props.icon/>
      <h3> {props.heading} </h3>
      {props.text ? <p> {props.text} </p> : <></> }
    </StyledCard>
  )
}

export default CardsA
