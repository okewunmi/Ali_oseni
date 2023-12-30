import styled from "styled-components";

export const Wrapper = styled.div  `

display: flex;
justify-content: center;
position: relative;

.sidebar{
display: none;
width: 90%;
height: 30rem;
background: grey;
margin:0 2rem;
align-items: center;
position: fixed;
z-index: 100;
margin-top: 6.4rem;
border-radius: 1.5rem;

@media only screen and (max-width: 686px) {
   display: none;
        }
}
`