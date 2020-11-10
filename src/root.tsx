import { h } from "preact";
import { StateUpdater, useState } from "preact/compat";
import { styled } from "goober";
import { RadioButton } from "./radio";

interface ContainerComponent {
  selected: ChoiseType;
  select: StateUpdater<ChoiseType>;
}

interface Props extends ContainerComponent {
  className?: string;
}

const Component = (props: Props) => (
  <div className={props.className}>
    <section>
      <h1>animation radio button</h1>
      <RadioButton
        name="test"
        value="test1"
        isSelected={"test1" === props.selected}
        handleClick={() => props.select("test1")}
      ></RadioButton>
      <RadioButton
        name="test"
        value="test2"
        isSelected={"test2" === props.selected}
        handleClick={() => props.select("test2")}
      ></RadioButton>
      <RadioButton
        name="test"
        value="test3"
        isSelected={"test3" === props.selected}
        handleClick={() => props.select("test3")}
      ></RadioButton>
      <RadioButton
        name="test"
        value="test4"
        isSelected={"test4" === props.selected}
        handleClick={() => props.select("test4")}
      ></RadioButton>
    </section>
    <section>
      <h1>normal radio button</h1>
      <p>
        FYI:
        <a href="https://a11y-101.com/development/radio-buttons">
          https://a11y-101.com/development/radio-buttons
        </a>
      </p>
      <input name="colour" value="blue" id="choice1" type="radio" />
      <label for="choice1"> Blue</label>
      <input name="colour" value="green" id="choice2" type="radio" />
      <label for="choice2"> Green</label>
    </section>
  </div>
);

const StyledComponent = styled(Component)``;

type ChoiseType = "test1" | "test2" | "test3" | "test4";

const ContainerComponent = () => {
  const [selected, select] = useState<ChoiseType>("test1");
  const containerProps = { selected, select };
  return <StyledComponent {...containerProps}></StyledComponent>;
};

export const Root = ContainerComponent;
