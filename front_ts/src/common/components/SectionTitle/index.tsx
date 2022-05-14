import React from 'react';

import { SectionTitleProps } from './interface';
import { H2 } from './styles';

function SectionTitle({ boldTitle, title }: SectionTitleProps) {
  return (
    <H2>
      <span>
        <b>{boldTitle}</b> {title}
      </span>
    </H2>
  );
}

export default SectionTitle;
