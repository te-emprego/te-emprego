import React from 'react';
import styled from 'styled-components';

import { AppView } from '@sdk/body';
import { Container, Row, Col } from '@sdk/grid';
import { Sidebar, Job, Header } from '@components';
import { Overlay } from '@components/Overlay';

const FAKE_STORE = [
  {
    id: 1,
    title: 'Desenvolvedor Front-end Pleno',
    description:
      'A Lyncas precisa de um desenvolvedor Front-end pleno. Necessário conhecimento sólido em algum framework JavaScript, como React, Angular ou Vue.',
    features: {
      period: 'Full Time',
      contract: 'CLT',
      remote: true,
      salary: 7000,
      englishLevel: 1,
    },
    employer: {
      logo:
        'https://media.licdn.com/dms/image/C4D0BAQHjEUDRqOSTww/company-logo_200_200/0?e=2159024400&v=beta&t=4eWRj749bgD1kM4MZ4aVV0KheFemCPV2OQ0Rf99o0OY',
      name: 'Lyncas',
    },
  },
  {
    id: 2,
    title: 'Desenvolvedor Front-end Pleno',
    description:
      'A Lyncas precisa de um desenvolvedor Front-end pleno. Necessário conhecimento sólido em algum framework JavaScript, como React, Angular ou Vue.',
    features: {
      period: 'Full Time',
      contract: 'CLT',
      remote: true,
      salary: 7000,
      englishLevel: 1,
    },
    employer: {
      logo:
        'https://media.licdn.com/dms/image/C4D0BAQHjEUDRqOSTww/company-logo_200_200/0?e=2159024400&v=beta&t=4eWRj749bgD1kM4MZ4aVV0KheFemCPV2OQ0Rf99o0OY',
      name: 'Lyncas',
    },
  },
  {
    id: 3,
    title: 'Desenvolvedor Front-end Pleno',
    description:
      'A Lyncas precisa de um desenvolvedor Front-end pleno. Necessário conhecimento sólido em algum framework JavaScript, como React, Angular ou Vue.',
    features: {
      period: 'Full Time',
      contract: 'CLT',
      remote: true,
      salary: 7000,
      englishLevel: 1,
    },
    employer: {
      logo:
        'https://media.licdn.com/dms/image/C4D0BAQHjEUDRqOSTww/company-logo_200_200/0?e=2159024400&v=beta&t=4eWRj749bgD1kM4MZ4aVV0KheFemCPV2OQ0Rf99o0OY',
      name: 'Lyncas',
    },
  },
  {
    id: 14,
    title: 'Desenvolvedor Front-end Pleno',
    description:
      'A Lyncas precisa de um desenvolvedor Front-end pleno. Necessário conhecimento sólido em algum framework JavaScript, como React, Angular ou Vue.',
    features: {
      period: 'Full Time',
      contract: 'CLT',
      remote: true,
      salary: 7000,
      englishLevel: 1,
    },
    employer: {
      logo:
        'https://media.licdn.com/dms/image/C4D0BAQHjEUDRqOSTww/company-logo_200_200/0?e=2159024400&v=beta&t=4eWRj749bgD1kM4MZ4aVV0KheFemCPV2OQ0Rf99o0OY',
      name: 'Lyncas',
    },
  },
  {
    id: 31312423423521,
    title: 'Desenvolvedor Front-end Pleno',
    description:
      'A Lyncas precisa de um desenvolvedor Front-end pleno. Necessário conhecimento sólido em algum framework JavaScript, como React, Angular ou Vue.',
    features: {
      period: 'Full Time',
      contract: 'CLT',
      remote: true,
      salary: 7000,
      englishLevel: 1,
    },
    employer: {
      logo:
        'https://media.licdn.com/dms/image/C4D0BAQHjEUDRqOSTww/company-logo_200_200/0?e=2159024400&v=beta&t=4eWRj749bgD1kM4MZ4aVV0KheFemCPV2OQ0Rf99o0OY',
      name: 'Lyncas',
    },
  },
  {
    id: 234234234123141251,
    title: 'Desenvolvedor Front-end Pleno',
    description:
      'A Lyncas precisa de um desenvolvedor Front-end pleno. Necessário conhecimento sólido em algum framework JavaScript, como React, Angular ou Vue.',
    features: {
      period: 'Full Time',
      contract: 'CLT',
      remote: true,
      salary: 7000,
      englishLevel: 1,
    },
    employer: {
      logo:
        'https://media.licdn.com/dms/image/C4D0BAQHjEUDRqOSTww/company-logo_200_200/0?e=2159024400&v=beta&t=4eWRj749bgD1kM4MZ4aVV0KheFemCPV2OQ0Rf99o0OY',
      name: 'Lyncas',
    },
  },
  {
    id: 3123,
    title: 'Desenvolvedor Front-end Pleno',
    description:
      'A Lyncas precisa de um desenvolvedor Front-end pleno. Necessário conhecimento sólido em algum framework JavaScript, como React, Angular ou Vue.',
    features: {
      period: 'Full Time',
      contract: 'CLT',
      remote: true,
      salary: 7000,
      englishLevel: 1,
    },
    employer: {
      logo:
        'https://media.licdn.com/dms/image/C4D0BAQHjEUDRqOSTww/company-logo_200_200/0?e=2159024400&v=beta&t=4eWRj749bgD1kM4MZ4aVV0KheFemCPV2OQ0Rf99o0OY',
      name: 'Lyncas',
    },
  },
  {
    id: 1253453,
    title: 'Desenvolvedor Front-end Pleno',
    description:
      'A Lyncas precisa de um desenvolvedor Front-end pleno. Necessário conhecimento sólido em algum framework JavaScript, como React, Angular ou Vue.',
    features: {
      period: 'Full Time',
      contract: 'CLT',
      remote: true,
      salary: 7000,
      englishLevel: 1,
    },
    employer: {
      logo:
        'https://media.licdn.com/dms/image/C4D0BAQHjEUDRqOSTww/company-logo_200_200/0?e=2159024400&v=beta&t=4eWRj749bgD1kM4MZ4aVV0KheFemCPV2OQ0Rf99o0OY',
      name: 'Lyncas',
    },
  },
  {
    id: 1123123542,
    title: 'Desenvolvedor Front-end Pleno',
    description:
      'A Lyncas precisa de um desenvolvedor Front-end pleno. Necessário conhecimento sólido em algum framework JavaScript, como React, Angular ou Vue.',
    features: {
      period: 'Full Time',
      contract: 'CLT',
      remote: true,
      salary: 7000,
      englishLevel: 1,
    },
    employer: {
      logo:
        'https://media.licdn.com/dms/image/C4D0BAQHjEUDRqOSTww/company-logo_200_200/0?e=2159024400&v=beta&t=4eWRj749bgD1kM4MZ4aVV0KheFemCPV2OQ0Rf99o0OY',
      name: 'Lyncas',
    },
  },
  {
    id: 3123123141,
    title: 'Desenvolvedor Front-end Pleno',
    description:
      'A Lyncas precisa de um desenvolvedor Front-end pleno. Necessário conhecimento sólido em algum framework JavaScript, como React, Angular ou Vue.',
    features: {
      period: 'Full Time',
      contract: 'CLT',
      remote: true,
      salary: 7000,
      englishLevel: 1,
    },
    employer: {
      logo:
        'https://media.licdn.com/dms/image/C4D0BAQHjEUDRqOSTww/company-logo_200_200/0?e=2159024400&v=beta&t=4eWRj749bgD1kM4MZ4aVV0KheFemCPV2OQ0Rf99o0OY',
      name: 'Lyncas',
    },
  },
  {
    id: 34534121,
    title: 'Desenvolvedor Front-end Pleno',
    description:
      'A Lyncas precisa de um desenvolvedor Front-end pleno. Necessário conhecimento sólido em algum framework JavaScript, como React, Angular ou Vue.',
    features: {
      period: 'Full Time',
      contract: 'CLT',
      remote: true,
      salary: 7000,
      englishLevel: 1,
    },
    employer: {
      logo:
        'https://media.licdn.com/dms/image/C4D0BAQHjEUDRqOSTww/company-logo_200_200/0?e=2159024400&v=beta&t=4eWRj749bgD1kM4MZ4aVV0KheFemCPV2OQ0Rf99o0OY',
      name: 'Lyncas',
    },
  },
  {
    id: 13143225634,
    title: 'Desenvolvedor Front-end Pleno',
    description:
      'A Lyncas precisa de um desenvolvedor Front-end pleno. Necessário conhecimento sólido em algum framework JavaScript, como React, Angular ou Vue.',
    features: {
      period: 'Full Time',
      contract: 'CLT',
      remote: true,
      salary: 7000,
      englishLevel: 1,
    },
    employer: {
      logo:
        'https://media.licdn.com/dms/image/C4D0BAQHjEUDRqOSTww/company-logo_200_200/0?e=2159024400&v=beta&t=4eWRj749bgD1kM4MZ4aVV0KheFemCPV2OQ0Rf99o0OY',
      name: 'Lyncas',
    },
  },
  {
    id: 345363,
    title: 'Desenvolvedor Front-end Pleno',
    description:
      'A Lyncas precisa de um desenvolvedor Front-end pleno. Necessário conhecimento sólido em algum framework JavaScript, como React, Angular ou Vue.',
    features: {
      period: 'Full Time',
      contract: 'CLT',
      remote: true,
      salary: 7000,
      englishLevel: 1,
    },
    employer: {
      logo:
        'https://media.licdn.com/dms/image/C4D0BAQHjEUDRqOSTww/company-logo_200_200/0?e=2159024400&v=beta&t=4eWRj749bgD1kM4MZ4aVV0KheFemCPV2OQ0Rf99o0OY',
      name: 'Lyncas',
    },
  },
];

const JobsList = styled(Col)``;
const SidebarWapper = styled(Col)``;

const RowSystem = styled(Row)`
  @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;

    ${SidebarWapper} {
      margin-bottom: 20px;
    }
  }
`;

const Jobs = () => (
  <AppView>
    <Header />
    <Overlay />
    <Container>
      <RowSystem>
        <JobsList sizes={['xl-9']}>
          {FAKE_STORE.map(job => (
            <Job key={job.id} {...job} />
          ))}
        </JobsList>
        <SidebarWapper sizes={['xl-3']}>
          <Sidebar />
        </SidebarWapper>
      </RowSystem>
    </Container>
  </AppView>
);

export { Jobs };
export default Jobs;
