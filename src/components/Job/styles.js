import styled from 'styled-components';

const InfoContent = styled.div`
  width: 415px;
`;

const InfoTitle = styled.p`
  font-size: 18px;
  color: #646464;
  font-weight: 800;
  font-family: 'Nunito', sans-serif;
  margin-bottom: 10px;
`;

const InfoDescription = styled.span`
  font-size: 14px;
  color: #707070;
  line-height: 20px;
  font-family: 'Nunito', sans-serif;
`;

const EmployerContent = styled.div`
  width: 150px;

  @media screen and (max-width: 990px) {
    margin-top: 20px;
  }
`;

const FeatureList = styled.div`
  color: #ffffff;
  background-image: linear-gradient(to top right, #673ab7, #8f54f8);
  background-color: #673ab7;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 15px 20px;
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  width: 200px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  transition: 0.25s ease;

  @media screen and (max-width: 990px) {
    position: relative;
    width: calc(100% + 40px) !important;
    /* margin: 20px -20px -20px; */
    border-radius: 10px;
    margin-top: 20px;
    /* border-top-left-radius: 0;
    border-top-right-radius: 0; */
  }
`;

const Feature = styled.div`
  width: 100%;
`;

const FeatureTitle = styled.div`
  font-size: 15px;
  font-family: 'Raleway', sans-serif;
`;

const FeatureDescription = styled.div`
  font-size: 18px;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
`;

const Wrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  width: 100%;
  border-radius: 10px;
  position: relative;
  display: flex;
  transition: 0.25s ease;
  min-height: 140px;

  @media screen and (max-width: 990px) {
    flex-wrap: wrap;
    border-radius: 12px;
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  /* fix white border bug in chrome */
  border-bottom-right-radius: 13px;
  border-top-right-radius: 13px;

  &:hover {
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.25);
    position: relative;
    ${FeatureList} {
      width: 220px;
    }
  }
`;

const RemoteBadge = styled.div`
  display: inline-block;
  background-color: #ffffff;
  color: #673ab7;
  padding: 3px 5px;
  border-radius: 5px;
  font-weight: 700;
  font-size: 15px;
  user-select: none;

  i {
    transform: translateY(2px);
  }
`;

const LowSalaryText = styled.div`
  width: 280px;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  padding: 10px;
  background-color: #ffffff;
  z-index: 2;
  position: absolute;
  top: -100px;
  left: calc(50% - 140px);
  text-align: center;
  opacity: 0;
  visibility: hidden;
  transition: 0.25s ease;
`;

const LowSalaryIcon = styled.div`
  &:hover + ${LowSalaryText} {
    opacity: 1;
    visibility: visible;
  }
`;

const LowSalary = styled.div`
  position: relative;
  right: 0px;
  cursor: default;
`;

export {
  Wrapper,
  InfoContent,
  InfoTitle,
  InfoDescription,
  EmployerContent,
  FeatureList,
  Feature,
  FeatureTitle,
  FeatureDescription,
  RemoteBadge,
  LowSalaryText,
  LowSalaryIcon,
  LowSalary,
};
