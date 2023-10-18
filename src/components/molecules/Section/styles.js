import styled from 'styled-components'

export const SectionStyle = styled.section`
    border-radius: 20px;
    border:${(props) => props.solid ?  '2px solid gray' : 'none'};
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`