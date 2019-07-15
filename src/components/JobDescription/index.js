import React from 'react';
import MaterialIcon from 'material-icons-react';
import {
  Wrapper,
  CompanyWrapper,
  CompanyLogo,
  CompanyName,
  FeaturesList,
  FeatureItem,
  FeatureIcon,
  FeatureText,
} from './styles';

const JobDescription = ({ employer, features }) => (
  <Wrapper>
    <CompanyWrapper>
      <CompanyLogo alt={employer.name} src={employer.logo} />
      <CompanyName>{employer.name}</CompanyName>
    </CompanyWrapper>
    <FeaturesList>
      <FeatureItem>
        <FeatureIcon>
          <MaterialIcon icon="card_travel" color="#ACACAC" size={15} />
        </FeatureIcon>
        <FeatureText>{features.contract}</FeatureText>
      </FeatureItem>
      <FeatureItem>
        <FeatureIcon>
          <MaterialIcon icon="attach_money" color="#ACACAC" size={15} />
        </FeatureIcon>
        <FeatureText>{features.salary}</FeatureText>
      </FeatureItem>
      <FeatureItem>
        <FeatureIcon>
          <MaterialIcon icon="g_translate" color="#ACACAC" size={15} />
        </FeatureIcon>
        <FeatureText>{features.englishLevel}</FeatureText>
      </FeatureItem>
    </FeaturesList>
  </Wrapper>
);

export default JobDescription;
