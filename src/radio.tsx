import { Fragment, h } from "preact";
import { css, styled } from "goober";

interface PassedProps {
  name: string;
  value: string;
  isSelected: boolean;
  handleClick: () => void;
  children?: preact.ComponentChildren;
}

interface Props extends PassedProps {
  className?: string;
}

const Component = (props: Props) => (
  <Fragment>
    <label
      className={props.className}
      onClick={props.handleClick}
      id={props.value}
    >
      <input
        type="radio"
        name={props.name}
        value={props.value}
        for={props.value}
      ></input>
      {props.value}
    </label>
  </Fragment>
);

const StyledComponent = styled(Component)`
  position: relative;
  display: inline-block;
  padding: 24px 16px 24px 64px;
  width: 100%;
  font-size: 16px;
  & > input {
    visibility: hidden;
  }
  &::before {
    position: absolute;
    content: "";
    display: inline-block;
    transition: all 0.2s ease-in;
    height: 22px;
    width: 22px;
    top: 20px;
    left: 24px;
    background-color: #f6f8fa;
    border: 2px solid #c8c9cc;
    border-color: ${(props) => (props.isSelected ? "#05f" : "#c8c9cc")};
    border-radius: 50%;
    box-shadow: ${(props) =>
      props.isSelected ? "0 0 0 4px rgba(0,85,255,.32)" : undefined};
  }

  &::after {
    ${(props) =>
      props.isSelected
        ? `
        content: "";
        height: 16px;
        width: 16px;
        left: 27px;
        top: 23px;
        background-color: #05f;
        border-radius: 50%;
        position: absolute;
        content: "";
        display: inline-block;
    `
        : undefined}
  }
`;

const ContainerComponent = (props: PassedProps) => {
  return <StyledComponent {...props}></StyledComponent>;
};

export const RadioButton = ContainerComponent;
