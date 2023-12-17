import styled from 'styled-components'

export const Wrapper = styled.div `
background: radial-gradient(50% 50% at 50% 50%, #00FFFF 0%, rgba(0, 0, 0, 0) 50%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
radial-gradient(50% 50% at 50% 50%, #1E90FF 0%, rgba(0, 0, 0, 0) 50%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
radial-gradient(50% 50% at 50% 50%, #32CD32 0%, rgba(0, 0, 0, 0) 50%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
radial-gradient(50% 50% at 50% 50%, #800080 0%, rgba(0, 0, 0, 0) 50%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
radial-gradient(50% 50% at 50% 50%, #FF4500 0%, rgba(0, 0, 0, 0) 50%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
radial-gradient(50% 50% at 50% 50%, #FF69B4 0%, rgba(0, 0, 0, 0) 50%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
radial-gradient(50% 50% at 50% 50%, #FFFF00 0%, rgba(0, 0, 0, 0) 50%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;



color: black;

.dark{
  background-color: #020A13;
  color: white;
}
.white{
  background: white;

}

.timeline {
 padding: 2rem 15rem;
 text-align: justify;

 h3{
  padding-left:1rem ;
  font-family: Nunito Sans;
  font-size: 47px;
  font-weight: 900;
  line-height: 59px;

 }
  

}

.timeline .title-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 2rem 0;
}

.timeline-list {
  font-size: 1rem;
  margin-left: 45px;
}

.timeline-item {
  position: relative;
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;


  .head{
    display: flex;
    justify-content: space-between;

    .link{
      border-bottom:1px solid black ;
      font-family: Inter;
      font-size: 15px;
      font-weight: 600;
      line-height: 22px;
      transition: all .3s;

      &:hover{
        
      }

    }
  }
}

.timeline-item:not(:last-child) {
  margin-bottom: 20px;
}

.timeline-item-title {
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  padding-bottom: .8rem;

}

.timeline-list span {
  color: gold;
  font-weight: 400;
  line-height: 1.6;
}

.timeline-item-dark::before {
  content: "";
  position: absolute;
  top: -25px;
  left: -30px;
  width: 2px;
  height: calc(100% + 50px);
  background: white;
}

.timeline-item-dark::after {
  content: "";
  position: absolute;
  top: 5px;
  left: -34px;
  height: 10px;
  width: 10px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 0 4px black;
}
.timeline-item::before {
  content: "";
  position: absolute;
  /* top: -25px; */
  left: -30px;
  width: 2px;
  height: calc(100% + 50px);
  background: black;
}

.timeline-item::after {
  content: "";
  position: absolute;
  top: 3px;
  left: -36px;
  height: 15px;
  width: 15px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 0 3px black;
}

.timeline-text {
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  line-height: 30px;
  /* padding-bottom: 1.5rem; */

}
.sub{
  font-family: Inter;
  font-size: 19px;
  font-weight: 600;
  line-height: 23px;
  padding-left:1rem ;
  margin: 4rem 0 2rem 0;


}
.date{
  display: flex;
  align-items: center;
  gap: .7rem;

  h5{
    color: black;
    font-weight: 600;
  }
 
}
.social{
  margin-top: 5rem;
  padding: 1rem ;
  display: flex;
  flex-direction: column;

  &__icon{
    display: flex;
    align-items: center;

    p{
      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
      line-height: 21px;

    }
    span{
      padding-left: 1.2rem;
    }
    &--box{
      margin-top: 4rem;
      display: flex;
      gap: 1.5rem;

    }
  }
}

`