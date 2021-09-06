// 반응형 디자인을 위한 픽셀 컨버팅 함수
const pixelToRem = (size) => `${size / 16}rem`;

const deviceSizes = {
    mobile: "768px",
    laptop: "1024px",
};
const device = {
    mobile: `screen and (max-width: ${deviceSizes.mobile})`,
    laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};

// font size를 객체로 반환해주자.
const fontSizes = {
    title: pixelToRem(60),
    subtitle: pixelToRem(30),
    paragraph: pixelToRem(18),
};

const colors = {
    titleColor: "#1d1720",
    purple: "#a2a1dc",
    darkPurple: "#514862",
};

const common = {
    InlineBlockSpanUnderLine: `
        display: inline-block;
        content: '';
        width: 80%;
        height: 2px;
        background: ${colors.purple};
    `,
    Overlay: `
        box-sizing: border-box;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    `
};

const theme = {
    fontSizes,
    colors,
    common,
    device,
};

export default theme;