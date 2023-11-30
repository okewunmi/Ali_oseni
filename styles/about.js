import styled from 'styled-components'

export const Wrapper = styled.div `

color: black;
.timeline {
  margin-bottom: 30px;
}

.timeline .title-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}

.timeline-list {
  font-size: 1rem;
  margin-left: 45px;
}

.timeline-item {
  position: relative;
}

.timeline-item:not(:last-child) {
  margin-bottom: 20px;
}

.timeline-item-title {
  font-size: 1rem;
  line-height: 1.3;
  margin-bottom: 7px;
}

.timeline-list span {
  color: gold;
  font-weight: 400;
  line-height: 1.6;
}

.timeline-item:not(:last-child)::before {
  content: "";
  position: absolute;
  top: -25px;
  left: -30px;
  width: 1px;
  height: calc(100% + 50px);
  background: black;
}

.timeline-item::after {
  content: "";
  position: absolute;
  top: 5px;
  left: -33px;
  height: 6px;
  width: 6px;
  background: yellow;
  border-radius: 50%;
  box-shadow: 0 0 0 4px black;
}

.timeline-text {
  color: gray;
  font-weight: 300;
  line-height: 1.6;
}

`