import React from 'react';
import PropTypes from 'prop-types';
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
        <FeatureText>
          R$ <strong>{features.salary}</strong>
        </FeatureText>
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

JobDescription.propTypes = {
  employer: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  features: PropTypes.shape({
    period: PropTypes.string.isRequired,
    contract: PropTypes.string.isRequired,
    remote: PropTypes.bool.isRequired,
    salary: PropTypes.string.isRequired,
    englishLevel: PropTypes.number.isRequired,
    lowSalary: PropTypes.bool.isRequired,
  }).isRequired,
};

export default JobDescription;
