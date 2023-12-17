import styled from "styled-components";

export const Wrapper = styled.div  `
.bck-1{
    background: #ffff;
}
display: flex;
flex-direction: column;


.header{
display: flex;
background: #fff;
color: #000;
max-height: 80vh;
justify-content: space-between;  



.header__txt {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 58%;
    margin-top:6rem;
    /* gap: 1rem; */
   
    h1{
        font-size: 3.1rem;
        font-family: 'Nunito Sans', sans-serif; 
        
    }

    strike{
        font-weight: bold;
        font-weight :700 ;
    }

    .txt{
    // word-spacing: 1px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.9rem;
    /* word-spacing: 1px; */
    color: #1C2540;
    font-family: 'Inter', sans-serif;
    }
    
.txt-big{
        color:#E4E4E4;
        font-size: 200px;
        font-weight: 400;
        font-family:'Abril Fatface' sans-serif;
        margin-top:-3rem;
        
}
    &__box{
        padding-left: 122px;
        display:flex;
        gap:1rem;
        flex-direction: column;
    }
   
}
.header__img{
    padding-right: 5rem;
    align-self:center;
    // width: 5%;
}
.icon{
        display:flex;
        gap:1rem; 
        z-index: 1;     
    }
.links{
    cursor: pointer;
    transition: all .3s;

    &:hover{
        color: #1C2540;
        transform: scale(1.5);
        }}

&__details{
    background: #EBF4F6;
    /* height: 20vh; */
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 3rem;

    padding: 4rem 15rem 5rem 15rem;


    .box{
        display: flex;
        flex-direction: column;
        width: 30%;

    }
    .image__1, .h__1{
        align-self: flex-end;

    }
    .image__2{
        align-self: center;

    }
    .image__3, .h__3{
        align-self: flex-start;

    }
    .img__sign{
        padding-top:2rem ;
    }
    .heading{
        font-family: Nunito Sans;
        font-size: 24px;
        font-weight: 600;
        line-height: 31px;
        letter-spacing: 0em;
        text-align: center;
        color: #1C2540;
        padding-top:1rem;

    }
    .txt{
        padding-top: 5rem;
    }
    .txt__1{
        font-family: 'Nunito Sans' sans-serif;
        font-size: 16px;
        font-weight: 600;
        line-height: 32px;
        text-align: right;
    }
    .txt__2{
        margin-bottom: 2rem;
        font-family: Nunito Sans;
        font-size: 16px;
        font-weight: 300;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: left;
        color: #1F2937;

    }
    .txt__3{
        font-family: Nunito Sans;
        font-size: 16px;
        font-weight: 300;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: left;
        color: #1F2937;

    }

}
&__bring{
    padding: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.3rem;

   &__head{
    font-family: Nunito Sans;
    font-size: 31px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: -0.625px;
    text-align: center;
    color: #111111;

   }
   &__txt{
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;
    color: #666666;
   }
   &__box{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    place-items: center;
    gap: 1rem;

    &--container{
        padding: 1.5rem;
        max-width: 20rem;
        height: 15rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

       

        h3{
            font-family: Nunito Sans;
            font-size: 16px;
            font-weight: 600;
            line-height: 19px;
            letter-spacing: -0.23999999463558197px;
            text-align: left;
            color:#111111;

        }
        p{
            font-family: Inter;
            font-size: 13px;
            font-weight: 400;
            line-height: 20px;
            letter-spacing: 0em;
            text-align: left;
            color: #666666;

        }



    }
    .box__1{
            background:#EEEEEE;
        }
    .box__2{
            background:#EBF4F6;
        }
       
   }
}
&__skill{
    padding: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.3rem; 
    background:#EBF4F6; 

   &__head{
    font-family: Nunito Sans;
    font-size: 56px;
    font-weight: 600;
    line-height: 73px;
    letter-spacing: 0em;

   }
   &__txt{
    font-family: Nunito Sans;
    font-size: 20px;
    font-weight: 300;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 4rem;


   }
   &__box{
    display: flex;
    /* flex-direction: column; */
    justify-content: flex-start;
    gap: 7rem;

    .txt{
        

        h3{
            font-family: Nunito Sans;
            font-size: 28px;
            font-weight: 600;
            line-height: 36px;
            padding-bottom: 2rem;
            color:#1C2540;
        }
    }
    p{
        font-family: Nunito Sans;
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
        padding-bottom: .9rem;
        color:#58677D;
    }
   }
}
&__ux{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.3rem 0;

    &__head{
    font-family: Nunito Sans;
    font-size: 56px;
    font-weight: 600;
    line-height: 73px;
    margin-bottom: .2rem;

   }
   &__txt{
    font-family: Nunito Sans;
    font-size: 20px;
    font-weight: 300;
    line-height: 32px;
}
.margin-top{
    margin-top: 4rem;
}
.container{
    display: flex;
    padding: 0 5rem;
    gap: 1.2rem;
    align-items: center;

}
.box{
    margin-top: 1.3rem;
    padding: 1rem;
    background: #EEEEEE;
    display: flex;
    flex-direction: column;
    gap: .8rem;
   
  
}
.title{
    font-family: Nunito Sans;
    font-size: 16px;
    font-weight: 200;
    line-height: 19px;
    letter-spacing: -0.23999999463558197px;
    color: #111111;

}
.txt{
    font-family: Nunito Sans;
    font-size: 12px;
    font-weight: 400;
    line-height: 19px;
    color:#666666;

}
.links{
    padding-top: 3rem;
    font-family: Nunito Sans;
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
&__exp{
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #EBF4F6;
    padding: 4rem 0;

    &__box{
        margin: 4rem 0;
        width: 60%;
        border-radius: 1rem;
       
        .container{
            padding: 3rem 1.5rem;
            border-bottom: 1px solid #EBF4F6;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            
            .head{
                font-family: Nunito Sans;
                font-size: 20px;
                font-weight: 600;
                line-height: 26px;
                color: #1C2540;
                width: 33%;

            }
            .border{
                border-bottom: 1px solid #E5E7EB; 
            }

            .content{
                display: flex;
                flex-direction: column;
                align-self: self-start;
                 gap: 1rem;
                 width: 40%;
                 

                &-head{
                    font-family: Nunito Sans;
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 26px;
                }
                &-txt{
                    font-family: Nunito Sans;
                    font-size: 16px;
                    font-weight: 300;
                    line-height: 26px;
                    color:#1F2937;
                    
                }
            }
            .date{
                display: flex;
                align-items: center;
                

                p{
                    background: #242E4C;
                    border-radius: .5rem;
                    padding:  0.26rem 1rem;
                    color: #E5E7EB;
                    font-family: Nunito Sans;
                    font-size: 12px;
                    font-weight: 600;
                    line-height: 12px;
    
                }  }
        }
    }
}
&__contact{
    display:flex;
    padding: 3rem  0;
    align-items:center;
    justify-content:center;
    gap:6rem;

    &__box{
        gap:1.7rem;
        display:flex;
        align-items:center;
        flex-direction:column;
        color:#1F2937;
        width:13%;
       

        .big{
            font-family: Nunito Sans;
            font-size: 20px;
            font-weight: 600;
            line-height: 26px;


        }
        .text{
            font-family: Nunito Sans;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: center;
;

        }

    }
}
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
        font-family: Nunito Sans;
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
    font-family: Nunito Sans;
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