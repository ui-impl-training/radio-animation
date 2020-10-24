import { h } from "preact";
import { styled } from "goober";

interface Props {
  className?: string;
}

const Component = (props: Props) => <div className={props.className}></div>;

const StyledComponent = styled(Component)``;

const ContainerComponent = () => {
  return <StyledComponent></StyledComponent>;
};

export const Root = ContainerComponent;
