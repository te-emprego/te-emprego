import React from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from 'material-icons-react';
import { Row } from '@components/Grid';
import {
  Wrapper,
  CompanyWrapper,
  CompanyLogo,
  CompanyName,
  FeaturesList,
  FeatureIcon,
  FeatureText,
} from './styles';

const JobDescription = ({ employer, features }) => (
  <Wrapper>
    <FeaturesList>
      <Row>
        <CompanyWrapper>
          <CompanyLogo alt={employer.name} src={employer.logo} />
          <CompanyName>{employer.name}</CompanyName>
        </CompanyWrapper>
      </Row>
      <Row>
        <FeatureIcon>
          <MaterialIcon icon="card_travel" color="#ACACAC" size={15} />
        </FeatureIcon>
        <FeatureText>{features.contract}</FeatureText>
      </Row>
      <Row>
        <FeatureIcon>
          <MaterialIcon icon="attach_money" color="#ACACAC" size={15} />
        </FeatureIcon>
        <FeatureText>{features.salary}</FeatureText>
      </Row>
      <Row>
        <FeatureIcon>
          <MaterialIcon icon="g_translate" color="#ACACAC" size={15} />
        </FeatureIcon>
        <FeatureText>{features.englishLevel}</FeatureText>
      </Row>
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
