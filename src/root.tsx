import { h } from "preact";
import { StateUpdater, useState } from "preact/compat";
import { styled } from "goober";
import { RadioButton } from "./radio";

interface ContainerComponent {
  selected: number;
  select: StateUpdater<number>;
}

interface Props extends ContainerComponent {
  className?: string;
}

const Component = (props: Props) => (
  <div className={props.className}>
    <RadioButton
      isSelected={0 === props.selected}
      handleClick={() => props.select(0)}
    >
      test
    </RadioButton>
    <RadioButton
      isSelected={1 === props.selected}
      handleClick={() => props.select(1)}
    >
      test
    </RadioButton>
    <RadioButton
      isSelected={2 === props.selected}
      handleClick={() => props.select(2)}
    >
      test
    </RadioButton>
    <RadioButton
      isSelected={3 === props.selected}
      handleClick={() => props.select(3)}
    >
      test
    </RadioButton>
  </div>
);

const StyledComponent = styled(Component)``;

const ContainerComponent = () => {
  const [selected, select] = useState(0);
  const containerProps = { selected, select };
  return <StyledComponent {...containerProps}></StyledComponent>;
};

export const Root = ContainerComponent;
