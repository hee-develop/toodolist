import React from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

type Props = {
  onListLayoutClicked: React.MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
};

const ListLayout: React.FC<Props> = ({ onListLayoutClicked, children }) => {
  return <StyledLayout onClick={onListLayoutClicked}>{children}</StyledLayout>;
};

export default React.memo(ListLayout);
