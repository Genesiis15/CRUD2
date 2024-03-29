import styled from 'styled-components'
export const Content = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 1px solid silver;
    box-sizing: border-box;
    overflow: hidden;
    padding: 10px;
    @media (min-width: 724px) {
        font-size:5rem;
  }
`
export const ImgStyle = styled.img`
    object-fit: contain;
    width:100%;
    height:100%;
`