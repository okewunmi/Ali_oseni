import styled from "styled-components";

export const Content = styled.div`
margin-top: 10rem;
.header{
display: flex;
background: #fff;
color: #000;
min-height: 80vh;


justify-content: space-between;
  
&__work{
    background: #EBF4F6;
    padding: 5rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    /* justify-content:center; */
 
    form{
     display:flex;
     flex-direction:column;
     margin-top:4rem;
     align-items:center;
     gap:2rem;
 
     label{
         font-family: var(--font-nunito-Sans), sans-serif;
         font-size: 16px;
         font-weight: 600;
         line-height: 24px;
     }
 
     .form-box{
         display:flex;
         flex-direction:column;
         gap:.4rem;
     }
     .form-icon{
         display:flex;
         align-items:center;
 .icons{
     border-right: 1px solid #D1D5DB;
     padding-right:.3rem;
     margin-right:-2.5rem;
     z-index:1;
     height:100%;
 }
         .icon{
             font-size:1.7rem; 
             
         }
     }
         
     input{
         width:35rem;
         padding: .4rem 1rem .4rem 3rem;
         outline:none;
         border:1px solid #D1D5DB;
         color:#6B7280;
         border-radius:1rem;
         transition:all .3s;
 
         /* &:focus{
             width:38rem;
             border:1px solid #242E4C;
 
         } */
     }
     textarea{
         width: 35rem;
         height:10rem;
         padding: .8rem;
         outline:none;
         border:1px solid #D1D5DB;
         color:#D1D5DB;
         border-radius:1rem;
     }
 
     .send__btn{
     background:#1C2540;
     color:#FFFF;
     padding: .7rem;
     width: 34rem;
     border: 1px solid #1C2540;
     box-shadow: 0px 1px 1px 0px #171F3813;
     box-shadow: 0px 1px 0px 1px #FFFFFF26 inset;
     border-radius:2rem;
     font-family: var(--font-nunito-Sans), sans-serif;
     font-size: 16px;
     font-weight: 600;
     transition: all .3s;
     
 
     &:hover{
         outline:4px solid #1C2540;
        /* background: rgba(28, 37, 64, .9); */
        outline-offset: 3px;
        
     }
 
 }
 
    }
 
 }
}
`