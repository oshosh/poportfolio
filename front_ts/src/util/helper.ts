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
