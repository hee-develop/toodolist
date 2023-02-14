import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

import { CSSVariableName } from '../../utils/cssVariable';

const StyledItem = styled.span<{ textColor: string; textFinishedColor: string }>`
  padding: 4px 4px 4px 6px;
  font-size: 1.6em;
  cursor: pointer;
  border-radius: 8px;
  color: var(${({ textColor }) => textColor});
  user-select: none;

  &.isFinished {
    color: var(${({ textFinishedColor }) => textFinishedColor});
    text-decoration: line-through solid 2px;
  }
`;

type Props = {
  text: string;
  textColor: CSSVariableName;
  textFinishedColor: CSSVariableName;
  isFinished?: boolean;
};

const TodoItem: React.FC<Props> = ({ text, textColor, textFinishedColor, isFinished }) => {
  return (
    <StyledItem textColor={textColor} textFinishedColor={textFinishedColor} className={classnames({ isFinished })}>
      {text}.
    </StyledItem>
  );
};

export default React.memo(TodoItem);
