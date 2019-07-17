import React from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from 'material-icons-react';
import JobDescription from '@components/JobDescription';
import {
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
      <InfoContent>
        <InfoTitle>{title}</InfoTitle>
        <InfoDescription>{description}</InfoDescription>
      </InfoContent>
      <EmployerContent>
        <JobDescription employer={employer} features={features} />
      </EmployerContent>

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

      <FeatureList>
        <Feature>
          <FeatureTitle>Período</FeatureTitle>
          <FeatureDescription>{period}</FeatureDescription>
        </Feature>
        <Feature>
          <FeatureTitle>Tipo de contratação</FeatureTitle>
          <FeatureDescription>{contract}</FeatureDescription>
        </Feature>
        <RemoteBadge>
          <span>
            {remote === true ? (
              <span>
                Aceita remoto{' '}
                <MaterialIcon icon="thumb_up" size={15} color="#673AB7" />
              </span>
            ) : (
              <span>Não aceita remoto</span>
            )}
          </span>
        </RemoteBadge>
      </FeatureList>
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
