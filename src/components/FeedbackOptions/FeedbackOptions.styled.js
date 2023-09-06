import styled from 'styled-components'


export const ButtonsStyle=styled.div`
display: flex;
justify-content: space-evenly;
`
export const BtnStyle=styled.button`
font-weight: 500;
cursor: pointer;
border-style: none;
border: 2px solid #ccc;
border-radius: 5px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
margin: auto;
font-size: 20px;
padding: 10px 24px;
text-transform: uppercase;

transition-property: background-color,  box-shadow;
transition-duration: 250ms;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

&:hover{
    background-color: #de1e09;
    border: 2px solid #ccc;
}
`
