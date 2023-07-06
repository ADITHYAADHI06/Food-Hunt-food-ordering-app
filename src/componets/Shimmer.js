import React from 'react'
import styled from 'styled-components'

const Shimmer = () => {
    const Wrapper = styled.section`
         display: flex;
         flex-wrap: wrap;
         padding-right: 1.5rem;
         justify-content: space-between;
         align-items: center;
         .shimmer-card{
            width: 250px;
            height: 240px;
            box-shadow: ${({ theme }) => theme.colors.res_card__shadow};
            margin: 15px;
            border-radius: 4px;
         }
   `
    return (
        <Wrapper>
            <div className='shimmer-card'></div>
            <div className='shimmer-card'></div>
            <div className='shimmer-card'></div>
            <div className='shimmer-card'></div>
            <div className='shimmer-card'></div>
            <div className='shimmer-card'></div>
            <div className='shimmer-card'></div>
            <div className='shimmer-card'></div>
            <div className='shimmer-card'></div>
            <div className='shimmer-card'></div>
            <div className='shimmer-card'></div>
            <div className='shimmer-card'></div>
            <div className='shimmer-card'></div>
            <div className='shimmer-card'></div>
        </Wrapper>
    )
}

export default Shimmer