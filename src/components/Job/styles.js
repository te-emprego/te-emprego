import styled from 'styled-components';

const InfoContent = styled.div`
  width: 445px;
  @media (max-width: 767px) {
    padding: 20px;
    width: 100%;
  }
`;

const InfoTitle = styled.p`
  font-size: 22px;
  color: #646464;
  font-weight: 800;
  font-family: 'Nunito', sans-serif;
  margin-bottom: 10px;
`;

const InfoDescription = styled.span`
  font-size: 15px;
  color: #707070;
  line-height: 24px;
  font-family: 'Nunito', sans-serif;
`;

const EmployerContent = styled.div`
  width: 180px;
  @media (max-width: 767px) {
    padding: 20px;
  }
`;

const FeatureList = styled.div`
  color: #ffffff;
  background-color: #673ab7;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 15px 20px;
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  width: 215px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  transition: 0.25s ease;
  @media (max-width: 767px) {
    position: relative;
    width: 100%;
    border-radius: 0px 0px 10px 10px;
  }
`;

const Feature = styled.div`
  @media (max-width: 767px) {
    padding-bottom: 20px;
    width: 100%;
  }
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
  padding: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  width: 100%;
  border-radius: 10px;
  position: relative;
  display: flex;
  transition: 0.25s ease;
  min-height: 150px;
  @media (max-width: 767px) {
    display: block;
    padding: 0px;
  }
  &:not(:last-child) {
    margin-bottom: 20px;
    @media (max-width: 767px) {
      background-color: #ffffff;
    }
  }

  &:hover {
    ${FeatureList} {
      width: 230px;
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
  @media (max-width: 767px) {
    padding: 10px;
    margin-top: 20px;
    position: absolute;
    right: 0;
    margin-right: 20px;
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
