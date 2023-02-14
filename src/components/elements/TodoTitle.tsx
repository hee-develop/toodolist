import React from 'react';
import styled from 'styled-components';

import { CSSVariableName } from '../../utils/cssVariable';

const StyledTitle = styled.h3`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 4px 4px;
  margin: 0;
  gap: 4px;
  box-sizing: border-box;
  font-size: 2.4em;
  flex-shrink: 0;
  color: var(${({ color }) => color});

  > :first-child {
    flex-shrink: 0;
  }

  &::after {
    width: 100%;
    border-top: 4px solid;
    content: '';
  }
`;

type Props = {
  text: string;
  color: CSSVariableName;
};

const TodoTitle: React.FC<Props> = ({ text, color }) => {
  return (
    <StyledTitle color={color}>
      <span>{text}</span>
    </StyledTitle>
  );
};

export default React.memo(TodoTitle);
