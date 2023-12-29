import styled from "styled-components";

export const Content = styled.div`

background:linear-gradient(170.1deg, rgba(173, 206, 214, 0.89) 1.17%, rgba(199, 199, 199, 0) 90.49%);


width: 60%;
display: flex;
position: relative;
margin-top: -37.3rem;
align-self: flex-end;

flex-direction: column;
gap: 2rem;
padding-bottom: 2rem;

@media only screen and (max-width: 1023px) {
    margin-top: -54rem;      
    
}
@media only screen and (max-width: 863px) {
    margin-top: -57rem; 
    width     : 70%;
    background: linear-gradient(170.1deg, rgba(173, 206, 214, 1) 1.17%, rgba(199, 199, 199, 1) 90.49%);

   
 
}
@media only screen and (max-width: 767px) {
    margin-top: -71rem; 
    width     : 100%;
    align-self: center;
    
}
@media only screen and (max-width: 454px) {
    margin-top: -73.5rem; 
    
}


.head{
    border-bottom:1px solid #FFFFFF;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    width: 100%;

    .link{
        font-family: var(--font-nunito-Sans), sans-serif;
        font-size: 25px;
        font-weight: 700;
        line-height: 59px;

        @media only screen and (max-width: 767px) {
   font-size: 16px;
    
}
@media only screen and (max-width: 467px) {
   font-size: 14px;
    
}


    }
}
.image{
    display: flex;
    align-self: center;
}
.cont{
    padding: 0 2rem;
    display: flex;
    gap: .7rem;
    flex-direction: column;
    padding-bottom: 1rem;

    .icon{
        display: flex;
        gap: .1rem;
        padding:1.5rem 0;
        border-bottom: 1px solid #3A3A3A;
        
    }
    .box{
        border: 2px solid #C7C7C7;
        background:#EBEBEB;
        height: 4rem;
        display:flex ;
        align-items: center;
        padding-left:1rem ;
       

        p{
            font-family: var(--font-inter), sans-serif;
            font-size: 20px;
            font-weight: 400;
            line-height: 32px;

        }
    }

    h1{
        font-family: var(--font-nunito-Sans), sans-serif;
        font-size: 36px;
        font-weight: 700;
        line-height: 49px;
        color: #1C2540;
        @media only screen and (max-width: 767px) {
   font-size: 26px;
    
}
@media only screen and (max-width: 467px) {
   font-size: 20px;
    
}

    }
    h2{
        font-family: var(--font-nunito-Sans), sans-serif;
        font-size: 24px;
        font-weight: 700;
        line-height: 33px;
        @media only screen and (max-width: 767px) {
   font-size: 18px;
    
}
@media only screen and (max-width: 467px) {
   font-size: 16px;
    
}

    }
    p{
        font-family: var(--font-inter), sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 32px;
        @media only screen and (max-width: 767px) {
   font-size: 18px;
    
}
@media only screen and (max-width: 467px) {
   font-size: 15px;
    
}

       

    }
    .line{
       
        border-bottom:1px solid #3A3A3A;
        padding-top: 1rem;
        
    }
    .line-1{
        border-bottom:1px solid #3A3A3A
    }
    .line-2{
        border-bottom:1px solid #0000;
    }
}
.btn--box{
    border-top: 1px solid #868686;
    padding: 2rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 617px) {
   flex-direction: column;
   align-items: center;
   gap: 1rem;


}



    .btn-color{
        background: #000B1D;
        color: #ffff;
        span{
            padding-left: 1rem;
            border-left: 1px solid #ffff;
            margin-left: .7rem;
        }
        .icon{
            font-size: 2rem;
        }
        
        
    }
    .btn-white{
        color: #000B1D;
        border: 3px solid #1C2540;
        justify-content: center;

        &:hover{
            background: #000B1D;
            color: #ffff;
            border: none;
        }
         
    }

    .btn{
        display: flex;
        align-items: center;
       
        outline: none;
        width: 17rem;
        padding: 1.2rem ;

        @media only screen and (max-width: 617px) {
            width:95%;
   

}
        &:hover{
          
            
        }
    }
}
.header {

&__ux{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.3rem 0;

 

    @media only screen and (max-width: 700px) {
        padding: 2rem 0;
    
}
@media only screen and (max-width: 864px) {
        /* margin-top: 13rem; */
    
}
@media only screen and (max-width: 425px) {
        /* margin-top: -7rem; */
        display: none;
    
}

    &__head{
    font-family: var(--font-nunito-Sans), sans-serif;
    font-size: 56px;
    font-weight: 600;
    line-height: 73px;
    margin-bottom: .2rem;
    @media only screen and (max-width: 900px) {
        font-size: 40px; 
}
@media only screen and (max-width: 700px) {
    font-size: 35px; 
}
@media only screen and (max-width: 700px) {
    font-size: 20px; 

}

   }
   &__txt{
    font-family: var(--font-nunito-Sans), sans-serif;
    font-size: 20px;
    font-weight: 300;
    line-height: 32px;
    text-align:center;

    @media only screen and (max-width: 900px) {
        font-size: 18px;
}
@media only screen and (max-width: 600px) {
    margin-top:-1rem;
    width: 80%;
}
}
.margin-top{
    margin-top: 4rem;
}

.container{
    display: flex;
    padding: 0 2rem;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    @media only screen and (max-width: 425px) {
        /* margin-top: -7rem; */
        display: none;
    
}

}
.box{
    margin-top: 1.3rem;
    padding: 1rem;
    width: 19rem;
    height: 16rem;
    background: #EEEEEE;
    display: flex;
    flex-direction: column;
    gap: .8rem;
   
    @media only screen and (max-width: 1016px) {
        width: 21rem;
        height: 17rem;
    }
    @media only screen and (max-width: 762px) {
        width: 19rem;
        height: 16rem;
    }
    @media only screen and (max-width: 425px) {
        /* margin-top: -7rem; */
        display: none;
    
}
  
}
.title{
    font-family: var(--font-nunito-Sans), sans-serif;
    font-size: 16px;
    font-weight: 200;
    line-height: 19px;
    letter-spacing: -0.23999999463558197px;
    color: #111111;

}
.txt{
    font-family: var(--font-nunito-Sans), sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 19px;
    color:#666666;

}
.links{
    padding-top: 3rem;
    font-family: var(--font-nunito-Sans), sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
    transition: all .3s;
    
&:hover{
    transform: scale(1.1) ;
    color:#666666;

}


}

}
}

`

