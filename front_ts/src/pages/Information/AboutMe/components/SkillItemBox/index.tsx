import React from 'react';

import { Skill } from '../../interface';

import { ItemBox } from './styles';

function SkillItemBox({ name, content }: Skill) {
  return (
    <ItemBox>
      <strong>{name}</strong>
      <p>
        {content?.split('\n').map((line: string, idx) => (
          <React.Fragment key={`${idx + 1}`}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </ItemBox>
  );
}

export default SkillItemBox;
