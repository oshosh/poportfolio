interface styleProps {
  display: string;
  position: string;
  top: string;
  left: string;
  width: string;
  height: string;
  padding: string;
}

export interface Skill {
  id?: number;
  name: string;
  content: string;
}

export const delayLetter = (): Promise<void> => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 200);
  });
};

export const delayWord = (): Promise<void> => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

export const postCodeStyle: styleProps = {
  display: 'block',
  position: 'absolute',
  // top: "50%",
  top: '-200%',
  left: '-10%',
  width: '400px',
  height: '500px',
  padding: '7px',
};

export const mainKeywordArray: string[] = [
  '깊이있게 탐구하는',
  '끈기있게 노력하는',
  '문서화를 잘하는',
];

export const introduce = `저는 프론트엔드 개발자로 현업 경험이 있습니다.
각 포지션에 있어서 업무 시, UI 개발에 대한 궁금증,
비즈니스 로직 및 전사적 플로우 시스템에 대한 궁금증을 꼬리에 물고
단순히 호기심에서 그치지 않고 빠르게 파악 함으로서
같은 팀원으로 녹아들 수 있는 프론트엔드 개발자 되겠습니다.

사용자가 사용하기 편리한 웹서비스를 만들어
사람들에게 도움을 주고싶습니다.

그러기 위해 구성원으로써 능동적으로 의견을 내고 들을 것이며,
테크 기술에 대하여 공유 할 수 있는 공생 관계를 유지할 것입니다.

명목적인 회사가 동료가 아닌 서로 성장 할 수 있는 일원이 되길 희망합니다.`;

export const mySkill: Array<Skill> = [
  {
    id: 1,
    name: 'Markup',
    content: `웹 표준과 웹 접근성을 지향합니다.
    시멘틱 태그를 활용하여 용도 명확하게 전달 할 수 있도록 구성합니다.`,
  },
  {
    id: 2,
    name: 'CSS',
    content: `오픈소스를 활용한 디자인 컴포넌트 사용 혹은 CSS in JS (Styled-Components) 사용하여 구애 받지 않는 스타일링 구현이 가능합니다.`,
  },
  {
    id: 3,
    name: 'JavaScript',
    content: `코딩 컨벤션을 준수하고 ES6을 활용하여 유연한 데이터 처리 및 관리가 가능합니다.
    또한 HOC + Class Component 기반의 React 실무 프로젝트 경험이 있습니다.
    Hook 또한 경험이 있으며 최근 SSR의 접근성을 고려하여 Next.JS를 공부하고 있습니다.`,
  },
  {
    id: 4,
    name: 'Server',
    content: `Django, C# WCF에서 실무 경험을 기반으로하여 Restful API한 환경을 이해하고 있습니다.
    최근 미니 프로젝트를 진행하면서 Node Express를 공부하고 있습니다.
    번복적 수정을 최대한 줄여 작업 요구 사항을 같이 제시하여 Backend와의 적극적인 소통을 도모하겠습니다.`,
  },
  {
    id: 5,
    name: 'DevOps',
    content: `Production 배포를 돌아가면서 담당한 경험이 있습니다. GitLab, SourceTree ,Jenkins를 활용하여 프로젝트를 배포를 하였습니다.
    실수가 발생하지 않도록 최대한 긴장을 늦추지 않고 있습니다.`,
  },
  {
    id: 6,
    name: 'ETC',
    content: `  Confluence WIKI를 통하여 공통 로직 및 공통 컴포넌트에 대한 문서를 정의하여 공유하고 의견을 취합하여 반영 할 수 있는 문서 작성 능력을 갖추고 있습니다.`,
  },
];
