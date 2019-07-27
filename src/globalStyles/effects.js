import styled from 'styled-components';

export const RightEffect = styled.div`
  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 35%;
  }
`;

export const LeftEffect = styled.div`
  img {
    position: absolute;
    top: 0;
    left: -65px;
    width: 53%;
    transform: rotate(270deg);
  }
`;

export const BottomEffect = styled.div`
  width: 100%;
  margin: 0 auto;
  img {
    position: absolute;
    bottom: 0;
    left: calc(50% - 250px);
  }

  @media screen and (max-width: 748px) {
    img {
      width: 280px;
      position: absolute;
      bottom: 0;
      left: calc(50% - 140px);
    }
  }
`;
