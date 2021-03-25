import React, { FunctionComponent, useState, useEffect } from 'react'
import styled, { css } from 'styled-components';

interface Props {
  type?: "success" | "warning" | "danger",
  message: string;
  isOpen?: boolean;
}

const StyledPopup = styled.article<{ isOpen: boolean }>`
  padding:1.6rem;
  margin: 0 auto;
  display: block;
  text-align: center;
  border-radius: 0.4rem;
  width: max-content;
  font-weight: bold;
  color: var(--white);
  position: relative;
  display: none;
  span {
    position: absolute;
    top: .6rem;
    right: .6rem;
    cursor: pointer;
  }

  &.success {
    background-color: green;
    color: white;
  }

  &.warning {
    background-color: orange;
    color: white;
  }

  &.danger {
    background-color: red;
    color: white;
  }

  ${({ isOpen }) => isOpen && css`
    display: block;
  `}
`;

export const Popup: FunctionComponent<Props> = ({ message, type, isOpen }) => {
  return (
    <StyledPopup className={type} isOpen={isOpen}>
      <span>X</span>
      <p>{message}</p>
    </StyledPopup>
  )
}
