import React from 'react'
import styled from 'styled-components'
import CardsA from './Cards/CardsA'
import { GoGoal } from 'react-icons/go'
import { FaBan, FaLock, FaRegListAlt, FaRegMoneyBillAlt, FaStar, FaUserCheck } from 'react-icons/fa'

const StyledWrapped = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
`

const StyledLabels = styled.div`
  display: flex;
  margin-top: 1.5rem;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
`

const Content = [
  {
    icon: GoGoal,
    heading: 'Financial Goals',
    text: 'Set achievable financial goals with our intuitive tool, paving your path towards financial freedom.'
  },
  {
    icon: FaRegListAlt,
    heading: 'Expense Tracker',
    text: 'Monitor your spending efficiently and & accurately with our comprehensive, Expense Tracker.'
  },
  {
    icon: FaRegMoneyBillAlt,
    heading: 'Financial Education',
    text: 'Empower your journey with our Financial Education resources, fostering informed decisions.'
  },{
    icon: GoGoal,
    heading: 'Financial Goals',
    text: 'Set achievable financial goals with our intuitive tool, paving your path towards financial freedom.'
  },
  {
    icon: FaRegListAlt,
    heading: 'Expense Tracker',
    text: 'Monitor your spending efficiently and & accurately with our comprehensive, Expense Tracker.'
  },
  {
    icon: FaRegMoneyBillAlt,
    heading: 'Financial Education',
    text: 'Empower your journey with our Financial Education resources, fostering informed decisions.'
  },
  {
    label: true,
    icon: FaLock,
    heading: "Secure"
  },
  {
    label: true,
    icon: FaUserCheck,
    heading: "Investment Assistance"
  },
  {
    label: true,
    icon: FaStar,
    heading: "Trusted by 10k+ Users"
  },
  {
    label: true,
    icon: FaBan,
    heading: "No Hidden Charges"
  }
]

const CardsWrapper = () => {
  return (
    <>
    
      <StyledWrapped>
        { Content.map((content, index)=>{
          return !content.label ? <CardsA key={"sectionCard" + index } icon={content.icon} heading={content.heading} text={content.text}  /> : null
        }) }
      </StyledWrapped>
      
      <StyledLabels>
        { Content.map((content, index)=>{
          return content.label ? <CardsA key={"sectionCard" + index } icon={content.icon} heading={content.heading}  /> : null
        }) }
      </StyledLabels>
      
    </>
  )
}

export default CardsWrapper
