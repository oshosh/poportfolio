import React from 'react';

import { LinkProps } from './interface';
import { Button } from './styles';

function LinkButton({ content, address }: LinkProps) {
  return (
    <Button href={address} target='_blank' rel='noreferrer noopener'>
      {content}
    </Button>
  );
}

export default LinkButton;
