import styled from "styled-components";

export const Content =styled.div`

background:linear-gradient(170.1deg, rgba(173, 206, 214, 0.89) 1.17%, rgba(199, 199, 199, 0) 90.49%);
width: 60%;
display: flex;
position: relative;
margin-top: -37.3rem;
align-self: flex-end;
flex-direction: column;
gap: 2rem;
padding-bottom: 2rem;


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
        border: 1px solid #C7C7C7;
        background:#C7C7C7;
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
    }
    h2{
        font-family: var(--font-nunito-Sans), sans-serif;
        font-size: 24px;
        font-weight: 700;
        line-height: 33px;
    }
    p{
        font-family: var(--font-inter), sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 32px;
       

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

        
        &:hover{
          
            
        }
    }
}

`