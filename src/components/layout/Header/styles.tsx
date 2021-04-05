import styled, { css } from 'styled-components';
import { variables } from 'styles/variables'
import chevronDown from 'assets/icons/chevron-down.svg'
// import chevronUp from 'assets/icons/chevron-up.svg'

export const StyledHeader = styled.header<{ titleActive: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--primary);
  z-index: 100;

  ${({ titleActive }) => titleActive && css`
    color: red;
  `}
`;

export const InnerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 0;
  .nav__logo {
    color: var(--black);
    font-size: 2rem;
    font-family: var(--rubik);
    font-weight: var(--fontWeight-bold);
    span {
      color: var(--white);
    }
  }
  .nav__btn {
    display: none;
  }

  @media(min-width: ${variables.breakpoints.desktop}) {
    .nav__btn {
      display: initial;
    }
  }
`;

export const Nav = styled.nav<{ isDropdownOpen?: boolean }>`
  display: none;
  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 3.2rem;
  }
  li {
    list-style: none;
    position: relative;
  }
  .nav__link {
    font-size: 1.6rem;
    font-weight: var(--fontWeight-semiBold);
    &.titleActive {
      color: var(--white);
    }
  }

  .nav__dropdown {
    position: relative;
    border: none;
    background-color: transparent;
    &::focus-within {
      background-color: red;
    }
    &::after {
      content: url(${chevronDown});
      position: absolute;
      transform: scale(0.8);
      top: -1px;
    }
  }

  @media(min-width: ${variables.breakpoints.desktop}) {
    display: flex;
  }
`;

export const DropdownContainer = styled.div`
  position: absolute;
  top: 5.4rem;
  width: 120%;
  padding: 2.4rem;
  padding-left: 1.6rem;
  border-radius: 0 0 2.4rem 2.4rem;
`;

export const DropdownItem = styled.div<{ isFocused?: boolean }>`
  font-size: 1.6rem;
  color: var(--black);
  font-weight: bold;
  box-shadow: 0 30px 60px rgb(0 0 0 / 2%), 0 0 20px rgb(0 0 0 / 4%);
    &:first-child {
      margin-bottom: 1.6rem;
    }
  }
`;