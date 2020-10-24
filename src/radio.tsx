import { h } from "preact";
import { css, styled } from "goober";
import { FC } from "preact/compat";

interface PassedProps {
  isSelected: boolean;
  handleClick: () => void;
  children?: preact.ComponentChildren;
}

interface Props extends PassedProps {
  className?: string;
}

const Component = (props: Props) => (
  <label className={props.className} onClick={props.handleClick}>
    {props.children}
  </label>
);

const StyledComponent = styled(Component)`
  position: relative;
  display: inline-block;
  padding: 24px 16px 24px 64px;
  width: 100%;
  &::before {
    position: absolute;
    content: "";
    display: inline-block;
    border-color: #05f;
    transition: all 0.2s ease-in;
    height: 22px;
    width: 22px;
    top: 20px;
    left: 24px;
    background-color: #f6f8fa;
    border: 2px solid #c8c9cc;
    border-radius: 50%;
  }

  &::after {
    ${(props) =>
      props.isSelected &&
      `
        content: "";
        height: 16px;
        width: 16px;
        left: 29px;
        top: 25px;
        background-color: #05f;
        border-radius: 50%;
        position: absolute;
        display: inline-block;
      `}
  }
`;

const ContainerComponent = (props: PassedProps) => {
  return <StyledComponent {...props}></StyledComponent>;
};

export const RadioButton = ContainerComponent;
