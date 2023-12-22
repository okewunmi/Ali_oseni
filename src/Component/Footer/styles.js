import styled from "styled-components";
export const Content = styled.div`

background:#1C2540;

display:flex;
flex-direction:column;
align-items:center;


.footer{
    padding: 4rem 12rem 2rem 12rem;
    display:flex;
    justify-content:center;
    gap:6rem;

    @media only screen and (max-width: 1100px) {
        padding: 4rem 1rem 2rem 1rem;
        gap:3rem;
    }
    @media only screen and (max-width: 900px) {
        padding: 4rem .6rem 2rem .6rem;
        gap:3rem;
    }
    @media only screen and (max-width: 680px) {
        flex-direction: column;
        padding: 4rem 4rem 2rem 4rem;
        
    }

    &__box{
        display:flex;
        flex-direction:column;
        gap:1.2rem;
        width:30%;
        @media only screen and (max-width: 680px) {
                width: 100%;
    }

        form{
            display:flex;
            flex-direction: column;
            gap:.5rem;

            label{
                font-family: var(--font-nunito-Sans), sans-serif;
                font-size: 16px;
                font-weight: 400;
                line-height: 21px;
                color: #FFFFFFB2;

                @media only screen and (max-width: 1000px) {
            font-size: 14px;
            }
            
            }


            input{
            background:#F9FAFB;
            color:#000;
            padding:.5rem 1rem;
            width:18rem;
            outline: none;
            border: none;
            border-radius:2rem;
            @media only screen and (max-width: 1000px) {
                width:14rem;
                padding:.2rem 1rem;
            }

            }
            button{
                background:#893168;
                padding:.5rem 1rem;
                width:18rem;
                border-radius:2rem;
                color:#FFFFFFB2;
                @media only screen and (max-width: 1000px) {
                width:14rem;
                padding:.2rem .6rem;
            }
            }
        }
    }
    &__txt{
        font-family: var(--font-nunito-Sans), sans-serif;
        font-size: 16px;
        font-weight: 300;
        line-height: 26px;
        color:#FFFFFF;
        @media only screen and (max-width: 1000px) {
            font-size: 14px;
            }
            @media only screen and (max-width: 680px) {
                font-size: 14px;
    }
    }
    &__icon{
        display:flex;
        gap:.8rem;
        color:#FFFFFF;
        
        .links{
            transition:all .3s;

            &:hover{
            transform: scale(1.4);
            color:#893168;
        }
        }

        

    }

    &__link{
        display:flex;
        flex-direction: column;
        color:#FFFFFF;
        gap:.7rem;

        &-head{
            font-family: var(--font-nunito-Sans), sans-serif;
            font-size: 18px;
            font-weight: 600;
            line-height: 24px;
            color:#FFFFFF;
            margin-bottom:.5rem;

            @media only screen and (max-width: 1000px) {
            font-size: 16px;
            }

        }
        Link{
            font-family: var(--font-nunito-Sans), sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 26px;
            color:#FFFFFF;
            @media only screen and (max-width: 1000px) {
            font-size: 14px;
            }
        }
    }
    &__copyRight{
        padding:5rem 0 2rem 0;
        font-family: var(--font-nunito-Sans), sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        color:#FFFFFF;

        @media only screen and (max-width: 1000px) {
            padding:2rem 0 2rem 0;
            }

    }
    &__white{
        background:#FFFFFF;
        height:13rem;
        width:100%
    }
}
`