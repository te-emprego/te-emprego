import styled from 'styled-components';
import colors from '@/globalStyles/colors';

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

const FeatureList = styled.div`
  color: #ffffff;
  background: linear-gradient(
    to bottom left,
    ${colors.darken},
    ${colors.primary}
  );
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 15px 20px;
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  transition: 0.25s ease;

  @media screen and (max-width: 576px) {
    justify-content: space-between;
    position: relative;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 10px;
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

const BoxDescription = styled.div`
  display: flex;
  background-color: white;
  padding: 15px 0;

  @media screen and (max-width: 576px) {
    display: block;
  }
`;

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  position: relative;
  display: flex;
  transition: 0.25s ease;
  min-height: 150px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:hover {
    ${FeatureList} {
      margin-left: -1.2vw;
    }
  }

  @media screen and (max-width: 576px) {
    display: block;
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
`;

const LowSalaryText = styled.div`
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
  position: absolute;
  right: 0.6vw;
  top: 20px;
  cursor: default;

  @media screen and (max-width: 576px) {
    top: 10px;
  }
`;

export {
  Wrapper,
  InfoTitle,
  InfoDescription,
  FeatureList,
  BoxDescription,
  Feature,
  FeatureTitle,
  FeatureDescription,
  RemoteBadge,
  LowSalaryText,
  LowSalaryIcon,
  LowSalary,
};
