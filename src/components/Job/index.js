import 'bootstrap-4-grid/css/grid.css';
import React from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from 'material-icons-react';
import JobDescription from '@components/JobDescription';
import { Col } from '@components/Grid';
import {
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
} from './styles';

const Job = ({
  title,
  description,
  employer,
  features,
  period,
  contract,
  remote,
  lowSalary,
}) => {
  return (
    <Wrapper>
      <Col xs={12} sm={9}>
        <BoxDescription>
          <Col xs={12} md={8}>
            <InfoTitle>{title}</InfoTitle>
            <InfoDescription>{description}</InfoDescription>
          </Col>
          <Col xs={12} md={4}>
            {lowSalary && (
              <LowSalary>
                <LowSalaryIcon>
                  <MaterialIcon icon="warning" color="#FF9F4B" size={25} />
                </LowSalaryIcon>
                <LowSalaryText>
                  Esta vaga tem o salário abaixo da média para o regime de
                  contratação.
                </LowSalaryText>
              </LowSalary>
            )}
            <JobDescription employer={employer} features={features} />
          </Col>
        </BoxDescription>
      </Col>
      <Col xs={12} md={3} style={{ padding: 0 }}>
        <FeatureList>
          <>
            <Feature>
              <FeatureTitle>Período</FeatureTitle>
              <FeatureDescription>{period}</FeatureDescription>
            </Feature>
            <Feature>
              <FeatureTitle>Tipo de contratação</FeatureTitle>
              <FeatureDescription>{contract}</FeatureDescription>
            </Feature>
          </>
          <>
            <RemoteBadge>
              <span>
                {remote === true ? (
                  <span>
                    Aceita remoto{' '}
                    <MaterialIcon icon="favorite" size={15} color="#673AB7" />
                  </span>
                ) : (
                  <span>Não aceita remoto</span>
                )}
              </span>
            </RemoteBadge>
          </>
        </FeatureList>
      </Col>
    </Wrapper>
  );
};

Job.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
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
  period: PropTypes.string.isRequired,
  contract: PropTypes.string.isRequired,
  remote: PropTypes.bool.isRequired,
  lowSalary: PropTypes.bool.isRequired,
};

export default Job;
