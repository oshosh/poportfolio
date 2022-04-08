import React, { MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import { COORDINATE, mainKeywordArray, delayLetter, delayWord } from '@util/constant';

import MyImg from '../../images/lilac-bg.jpg';
import { ReducerType } from '@common/store/slices/rootReducer';

import { Main, Img, SpanMainKeyWord } from './styles';
import { CoordinateState } from './interface';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
  const coordinate2 = useSelector<ReducerType, CoordinateState>((state) => state.coordinate);
  const dispatch = useDispatch();

  const [coordinate, setCoordinate] = useState<CoordinateState>({
    ...COORDINATE,
  });
  const { startX, startY, bgPosX, bgPosY, movePosX, movePosY } = coordinate;

  const mainKeyWord = useRef<HTMLSpanElement>(null);
  const ImgBackGroundRef = useRef<HTMLDivElement>(null);

  const onMouseEnter = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!ImgBackGroundRef.current) {
        return;
      }
      e.currentTarget.style.transition = 'none';
      // 시작 좌표, background 좌표
      setCoordinate({
        ...coordinate,
        startX: e.clientX,
        startY: e.clientY,
        bgPosX: ImgBackGroundRef.current.offsetTop,
        bgPosY: ImgBackGroundRef.current.offsetLeft,
      });
    },
    [coordinate]
  );

  const onMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!ImgBackGroundRef.current) {
        return;
      }
      setCoordinate({
        ...coordinate,
        movePosX: e.clientX - startX,
        movePosY: e.clientY - startY,
      });

      ImgBackGroundRef.current.style.left = `${bgPosX - movePosX / 40}px`;
      ImgBackGroundRef.current.style.top = `${bgPosY - movePosY / 40}px`;
    },
    [bgPosX, bgPosY, coordinate, movePosX, movePosY, startX, startY]
  );

  const onMouseOut = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!ImgBackGroundRef.current) {
        return;
      }
      setCoordinate({
        ...coordinate,
        bgPosX: -100,
        bgPosY: -100,
      });
      ImgBackGroundRef.current.style.transition = 'all linear 0.3s';
      ImgBackGroundRef.current.style.top = `${bgPosY}px`;
      ImgBackGroundRef.current.style.left = `${bgPosX}px`;
    },
    [bgPosX, bgPosY, coordinate]
  );

  const keywordAnimation = useCallback(async (loopCount = 0) => {
    if (!mainKeyWord.current) {
      return;
    }
    let textSplit = [];
    let count = 0;

    textSplit = mainKeywordArray.reduce<Array<string[]>>((acc, current) => {
      let arr: Array<string[]> = [];
      arr.push(current.split(''));
      acc = acc.concat(arr);
      return acc;
    }, []);

    while (loopCount !== textSplit.length && count < textSplit[loopCount].length) {
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
        mainKeyWord.current.textContent = '';
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
