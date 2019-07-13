import React from 'react';
import MaterialIcon from 'material-icons-react';
import JobDescription from '../JobDescription/JobDescription.component';
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
  LowSalary
} from './Job.style';

const Job = ({
  title,
  description,
  employer,
  features,
  period,
  contract,
  remote,
  lowSalary
}) => {

  return (
    <Wrapper>
      <InfoContent>
        <InfoTitle>{title}</InfoTitle>
        <InfoDescription>{description}</InfoDescription>
      </InfoContent>
      <EmployerContent>
        <JobDescription
          employer={employer}
          features={features}
        />
      </EmployerContent>

      { lowSalary && (
        <LowSalary>
          <LowSalaryIcon>
            <MaterialIcon icon="warning" color="#FF9F4B" size={25}/>
          </LowSalaryIcon>
          <LowSalaryText>Esta vaga tem o salário abaixo da média para o regime de contratação.</LowSalaryText>
        </LowSalary>
      ) }

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
            {
              remote === true
                ? (<span>Aceita remoto <MaterialIcon icon="thumb_up" size={15} color={'#673AB7'}/></span>)
                : (<span>Não aceita remoto</span>)
            }
          </span>
        </RemoteBadge>
      </FeatureList>
    </Wrapper>
  )
}

export default Job;