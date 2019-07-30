import styled from 'styled-components';
import colors from '@/globalStyles/colors';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CompanyWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CompanyLogo = styled.img`
  margin-right: 10px;
  border-radius: 40px;
  width: 30px;
  height: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.55);
`;

const CompanyName = styled.p`
  color: ${colors.darkText};
`;

const FeaturesList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 576px) {
    padding: 15px;
  }
`;

const FeatureIcon = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const FeatureText = styled.p`
  font-size: 15px;
  font-family: 'Nunito', sans-serif;
  color: #646464;
`;

export {
  Wrapper,
  CompanyWrapper,
  CompanyLogo,
  CompanyName,
  FeaturesList,
  FeatureIcon,
  FeatureText,
};
