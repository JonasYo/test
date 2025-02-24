import { useOutletContext } from "react-router-dom";
import { CounterContextType } from "../../../types/example";
import { COUNTER_TYPE } from "../constants";
import AsyncCounter from "./AsyncCounter";
import Counter from "./Counter";

const ExampleComponent = () => {
  const { counterType } = useOutletContext<CounterContextType>();
  return (
    <div>
      {counterType === COUNTER_TYPE.SYNC ? (
        <Counter />
      ) : counterType === COUNTER_TYPE.ASYNC ? (
        <AsyncCounter />
      ) : (
        "something went wrong"
      )}
    </div>
  );
};

export default ExampleComponent;
