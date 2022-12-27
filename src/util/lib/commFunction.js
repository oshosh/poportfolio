export const delayletter = () => {
    return new Promise((resolve) => setTimeout(resolve, 200));
}
export const delayWord = () => {
    return new Promise((resolve) => setTimeout(resolve, 1000));
};

export const mainKeywordArray = [
    '깊이있게 탐구하는',
    '끈기있게 노력하는',
    '문서화를 잘하는',
];

export const postCodeStyle = {
    display: "block",
    position: "absolute",
    // top: "50%",
    top: "-200%",
    left: "-10%",
    width: "400px",
    height: "500px",
    padding: "7px",
};
