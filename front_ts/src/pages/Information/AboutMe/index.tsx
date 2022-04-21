import React from 'react';

import { introduce, mainKeywordArray, mySkill } from '@util/constant';

import SkillItemBox from './components/SkillItemBox';
import { IntroduceWrapper, LinkWrapper, Section, SkillWrapper } from './styles';

function AboutMe() {
  return (
    <Section id='about-me'>
      <div className='wrap-1200 common-group'>
        <h2>
          <span>
            <b>ABOUT</b> ME
          </span>
        </h2>
        <IntroduceWrapper className='introduce-text-wrap'>
          <p className='introduce-title'>안녕하세요 :D</p>
          <p>
            {mainKeywordArray.join(', ')} <br />
            프론트엔드 개발자 오세현입니다
          </p>
          <p>
            {introduce?.split('\n').map((line: string, idx) => (
              <React.Fragment key={`${idx + 1}`}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
          <LinkWrapper>
            <a
              href='https://unique-diadem-604.notion.site/f4391fd3ffb34d0fac61019e12270742'
              target='_blank'
              rel='noreferrer noopener'
            >
              이력서 바로가기
            </a>
            <a href='https://github.com/oshosh' target='_blank' rel='noreferrer noopener'>
              GitHub 바로가기
            </a>
          </LinkWrapper>
        </IntroduceWrapper>
        <SkillWrapper className='skill-text-wrap'>
          {mySkill?.map(({ name, content, id }) => (
            <SkillItemBox key={id} name={name} content={content} />
          ))}
        </SkillWrapper>
      </div>
    </Section>
  );
}

export default AboutMe;
