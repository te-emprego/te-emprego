import React from 'react';
import Job from '@components/Job';

const FAKE_STORE = [
  {
    info: {
      id: '1',
      title: 'Desenvolvedor front-end pleno',
      description:
        'A Nubank precisa de um desenvolvedor Front-end pleno. Necessário conhecimento sólido em algum framework JavaScript, como React, Angular ou Vue.',
    },
    features: {
      period: 'Full Time',
      contract: 'CLT',
      remote: true,
      salary: '7.000,00 / mês',
      englishLevel: 1,
    },
    employer: {
      logo:
        'https://media.licdn.com/dms/image/C4D0BAQHjEUDRqOSTww/company-logo_200_200/0?e=2159024400&v=beta&t=4eWRj749bgD1kM4MZ4aVV0KheFemCPV2OQ0Rf99o0OY',
      name: 'Lyncas',
    },
  },
  {
    info: {
      id: '2',
      title: 'DevOps Engineer Sênior',
      description:
        'A Nubank precisa de um DevOps Engineer Sênio. Necessário conhecimento sólido em CI/CD, Amazon AWS, Google Cloud ou Microsoft Azure.',
    },
    features: {
      period: 'Full Time',
      contract: 'CLT',
      remote: false,
      salary: '14.400,00 / mês',
      englishLevel: 0,
    },
    employer: {
      logo: 'https://nubank.com.br/images/nu-icon.png',
      name: 'Nubank',
    },
  },
  {
    info: {
      id: '3',
      title: 'Estagiário de Desenvolvimento',
      description:
        'A Google precisa de um Estagiário de Desenvolvimento Web. Nenhum conhecimento prévio é necessário.',
    },
    features: {
      period: 'Full Time',
      contract: 'Estágio',
      remote: false,
      salary: '4.200,00 / mês',
      englishLevel: 0,
    },
    employer: {
      logo:
        'data:image/png;base64,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',
      name: 'Google',
    },
  },
  {
    info: {
      id: '4',
      title: 'Desenvolvedor Front-End Sênior',
      description:
        'A pag! precisa de um Desenvolvedor Front-End Sênior. Necessário amplo conhecimento em React.js e metodologias ágeis.',
    },
    features: {
      period: 'Full Time',
      contract: 'CLT',
      remote: false,
      salary: '7.800,00 / mês',
      englishLevel: 0,
    },
    employer: {
      logo:
        'data:image/png;base64,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',
      name: 'pag!',
    },
  },
  {
    info: {
      id: '5',
      title: 'Desenvolvedor Web Escravo',
      description:
        'Precisamos de um desenvolvedor que aceite ser totalmente submisso aos nossos desejos, e que não tenha uma pretensão salarial muito alta, afinal, não damos a mínima.',
    },
    features: {
      period: 'Full Time',
      contract: 'PJ',
      remote: false,
      salary: '1.800,00 / mês',
      englishLevel: 0,
      lowSalary: true,
    },
    employer: {
      logo:
        'https://www.logogarden.com/wp-content/uploads/lg-logo-samples/Marketing-Communications-Logo-1.png',
      name: 'Lorem',
    },
  },
  {
    info: {
      id: '6',
      title: 'Desenvolvedor front-end pleno',
      description:
        'A Nubank precisa de um desenvolvedor Front-end pleno. Necessário conhecimento sólido em algum framework JavaScript, como React, Angular ou Vue.',
    },
    features: {
      period: 'Full Time',
      contract: 'CLT',
      remote: true,
      salary: '7.000,00 / mês',
      englishLevel: 1,
    },
    employer: {
      logo:
        'https://media.licdn.com/dms/image/C4D0BAQHjEUDRqOSTww/company-logo_200_200/0?e=2159024400&v=beta&t=4eWRj749bgD1kM4MZ4aVV0KheFemCPV2OQ0Rf99o0OY',
      name: 'Lyncas',
    },
  },
  {
    info: {
      id: '7',
      title: 'DevOps Engineer Sênior',
      description:
        'A Nubank precisa de um DevOps Engineer Sênio. Necessário conhecimento sólido em CI/CD, Amazon AWS, Google Cloud ou Microsoft Azure.',
    },
    features: {
      period: 'Full Time',
      contract: 'CLT',
      remote: false,
      salary: '14.400,00 / mês',
      englishLevel: 0,
    },
    employer: {
      logo: 'https://nubank.com.br/images/nu-icon.png',
      name: 'Nubank',
    },
  },
  {
    info: {
      id: '8',
      title: 'Estagiário de Desenvolvimento',
      description:
        'A Google precisa de um Estagiário de Desenvolvimento Web. Nenhum conhecimento prévio é necessário.',
    },
    features: {
      period: 'Full Time',
      contract: 'Estágio',
      remote: false,
      salary: '4.200,00 / mês',
      englishLevel: 0,
    },
    employer: {
      logo:
        'data:image/png;base64,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',
      name: 'Google',
    },
  },
  {
    info: {
      id: '9',
      title: 'Desenvolvedor Front-End Sênior',
      description:
        'A pag! precisa de um Desenvolvedor Front-End Sênior. Necessário amplo conhecimento em React.js e metodologias ágeis.',
    },
    features: {
      period: 'Full Time',
      contract: 'CLT',
      remote: false,
      salary: '7.800,00 / mês',
      englishLevel: 0,
    },
    employer: {
      logo:
        'data:image/png;base64,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',
      name: 'pag!',
    },
  },
  {
    info: {
      id: '10',
      title: 'Desenvolvedor Web Escravo',
      description:
        'Precisamos de um desenvolvedor que aceite ser totalmente submisso aos nossos desejos, e que não tenha uma pretensão salarial muito alta, afinal, não damos a mínima.',
    },
    features: {
      period: 'Full Time',
      contract: 'PJ',
      remote: false,
      salary: '1.800,00 / mês',
      englishLevel: 0,
      lowSalary: true,
    },
    employer: {
      logo:
        'https://www.logogarden.com/wp-content/uploads/lg-logo-samples/Marketing-Communications-Logo-1.png',
      name: 'Lorem',
    },
  },
];

const JobList = () => {
  return (
    <>
      {FAKE_STORE.map(job => (
        <Job
          key={job.info.id}
          title={job.info.title}
          description={job.info.description}
          employer={job.employer}
          features={job.features}
          period={job.features.period}
          contract={job.features.contract}
          remote={job.features.remote}
          lowSalary={job.features.lowSalary}
        />
      ))}
    </>
  );
};

export default JobList;
