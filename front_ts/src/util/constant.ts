interface styleProps {
  display: string;
  position: string;
  top: string;
  left: string;
  width: string;
  height: string;
  padding: string;
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

export const COORDINATE = {
  startX: 0,
  startY: 0,
  bgPosX: 0,
  bgPosY: 0,
  movePosX: 0,
  movePosY: 0,
};
