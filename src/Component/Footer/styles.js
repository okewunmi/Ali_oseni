import styled from "styled-components";
export const Wrapper = styled.div`

background:#1C2540;

display:flex;
flex-direction:column;
align-items:center;


.footer{
    padding: 4rem 12rem 2rem 12rem;
    display:flex;
    /* align-items:center; */
    justify-content:center;
    gap:6rem;

    &__box{
        display:flex;
        flex-direction:column;
        gap:1.2rem;
        width:30%;

        form{
            display:flex;
            flex-direction: column;
            gap:.5rem;

            label{
                font-family: Nunito Sans;
                font-size: 16px;
                font-weight: 400;
                line-height: 21px;
                color: #FFFFFFB2;
            }


            input{
            background:#F9FAFB;
            color:#000;
            padding:.5rem 1rem;
            width:18rem;
            outline: none;
            border: none;
            border-radius:2rem;

            }
            button{
                background:#893168;
                padding:.5rem 1rem;
                width:18rem;
                border-radius:2rem;
                color:#FFFFFFB2;
            }
        }
    }
    &__txt{
        font-family: Nunito Sans;
        font-size: 16px;
        font-weight: 300;
        line-height: 26px;
        color:#FFFFFF;
     
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
            font-family: Nunito Sans;
            font-size: 18px;
            font-weight: 600;
            line-height: 24px;
            color:#FFFFFF;
            margin-bottom:.5rem

        }
        Link{
            font-family: Nunito Sans;
            font-size: 16px;
            font-weight: 400;
            line-height: 26px;
            color:#FFFFFF;

        }
    }
    &__copyRight{
        padding:5rem 0 2rem 0;
        font-family: Nunito Sans;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        color:#FFFFFF;

    }
    &__white{
        background:#FFFFFF;
        height:13rem;
        width:100%
    }
}
`