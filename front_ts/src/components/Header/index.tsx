import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  COORDINATE,
  mainKeywordArray,
  delayLetter,
  delayWord,
} from "@util/constant";

import MyImg from "../../images/lilac-bg.jpg";

import { Main, Img, SpanMainKeyWord } from "./styles";
import { CoordinateState } from "./interface";

function Header() {
  const [coordinate, setCoordinate] = useState<CoordinateState>({
    ...COORDINATE,
  });
  const { startX, startY, bgPosX, bgPosY, movePosX, movePosY } = coordinate;

  const mainKeyWord = useRef() as React.MutableRefObject<HTMLSpanElement>;
  const ImgBackGroundRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const onMouseEnter = useCallback((e) => {
    e.currentTarget.style.transition = "none";
    // 시작 좌표
    setCoordinate({
      ...COORDINATE,
      startX: e.clientX,
    });
    setCoordinate({
      ...COORDINATE,
      startY: e.clientY,
    });
    // background 좌표
    setCoordinate({
      ...COORDINATE,
      bgPosX: ImgBackGroundRef.current.offsetTop,
    });
    setCoordinate({
      ...COORDINATE,
      bgPosY: ImgBackGroundRef.current.offsetLeft,
    });
  }, []);

  const onMouseMove = useCallback(
    (e) => {
      if (!startX || !startY || !bgPosX || !bgPosY || !movePosX || !movePosY)
        return;

      setCoordinate({
        ...COORDINATE,
        movePosX: e.clientX - startX,
      });
      setCoordinate({
        ...COORDINATE,
        movePosY: e.clientX - startY,
      });

      ImgBackGroundRef.current.style.left = `${bgPosX - movePosX / 40}px`;
      ImgBackGroundRef.current.style.top = `${bgPosY - movePosY / 40}px`;
    },
    [bgPosX, bgPosY, movePosX, movePosY, startX, startY]
  );

  const onMouseOut = useCallback(
    (e) => {
      setCoordinate({
        ...COORDINATE,
        bgPosX: -100,
      });
      setCoordinate({
        ...COORDINATE,
        bgPosY: -100,
      });
      ImgBackGroundRef.current.style.transition = "all linear 0.3s";
      ImgBackGroundRef.current.style.top = `${bgPosY}px`;
      ImgBackGroundRef.current.style.left = `${bgPosX}px`;
    },
    [bgPosX, bgPosY]
  );

  const keywordAnimation = useCallback(async (loopCount = 0) => {
    let textSplit = [];
    let count = 0;

    textSplit = mainKeywordArray.reduce((acc, current) => {
      // let obj: string[] = [];
      // obj.push(current.split(""));
      acc = acc.concat(current.split(""));
      return acc;
    }, [] as string[]);

    while (
      loopCount !== textSplit.length &&
      count < textSplit[loopCount].length
    ) {
      // 글자 노출
      await delayLetter();

      mainKeyWord.current.append(textSplit[loopCount][count]);

      // setKeyword((prevState) => prevState.concat(textSplit[loopCount][count]))

      // 끝나면 초기화
      if (count === textSplit[loopCount].length - 1) {
        await delayWord();

        textSplit.length - 1 === loopCount
          ? keywordAnimation((loopCount = 0))
          : keywordAnimation(loopCount + 1);

        // setKeyword('')
        mainKeyWord.current.textContent = "";
        return false;
      }
      count++;
    }
  }, []);

  useEffect(() => {
    keywordAnimation();
  }, [keywordAnimation]);

  return (
    <Main>
      <Img
        ref={ImgBackGroundRef}
        img={MyImg}
        onMouseEnter={onMouseEnter}
        onMouseMove={onMouseMove}
        onMouseOut={onMouseOut}
      />
      <h1>
        안녕하세요!&nbsp;
        <SpanMainKeyWord a11yHidden={true}>{mainKeywordArray}</SpanMainKeyWord>
        {/* <SpanMainKeyWord ref={mainKeyWord}>{keyword}</SpanMainKeyWord><br /> */}
        <SpanMainKeyWord ref={mainKeyWord}></SpanMainKeyWord>
        <br />
        프론트엔드 개발자 오세현입니다 :D
      </h1>
    </Main>
  );
}

export default Header;
