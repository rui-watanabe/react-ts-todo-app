import React, { PropsWithChildren } from 'react';
import { ColumnContainer, ColumnTitle } from './styles';

interface ColumnProps
{
  text?: string;
  // children?: React.ReactNode;
}

export const Column = ({ text, children }: PropsWithChildren<ColumnProps> ) => 
{
  return(
    <ColumnContainer>
      <ColumnTitle>{ text }</ColumnTitle>
      { children }
    </ColumnContainer>
  )
};