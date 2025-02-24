import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { decrement, incrementAsync, selectCount } from "../exampleCounterSlice";

const AsyncCounter: React.FC = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch<AppDispatch>();

  // In order to use multiple namespaces/translation files, we need to specify it when calling useTranslation
  // For eg: const { t } = useTranslation(['translation', 'common']); here we are loading translations from default and common namespaces
  const { t } = useTranslation(["example"]);

  const handleIncrement = () => {
    dispatch(incrementAsync(2));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{t("example:async_counter_title")}</h2>
      <div>
        <button onClick={handleDecrement}>Decrement</button>
        <span style={{ margin: "0 10px" }}>{count}</span>
        <button onClick={handleIncrement}>Increment Async</button>
      </div>
      <p>increment after a delay of 2 seconds</p>
    </div>
  );
};

export default AsyncCounter;
