import React from 'react';

import { Skill } from '@util/constant';

import { ItemBox } from './styles';

function SkillItemBox({ name, content }: Skill) {
  return (
    <ItemBox>
      <strong>{name}</strong>
      <p>
        {content?.split('\n').map((line: string, idx) => {
          return (
            <React.Fragment key={`${idx + 1}`}>
              {line}
              <br />
            </React.Fragment>
          );
        })}
      </p>
    </ItemBox>
  );
}

export default SkillItemBox;
