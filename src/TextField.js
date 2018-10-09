// @flow

import React from "react";
import { compose, withState, withHandlers } from "recompose";

const TextField = (props: {
  label: string,
  isDisabled: boolean,
  value: string,
  printName: () => void
}) => (
  <div>
    <p>
      {props.label}:
      {props.value !== "" && props.value}
      {props.value === "" && " ..."}
    </p>
    <input onKeyUp={props.printName} placeholder={props.label} />
  </div>
);

export default compose(
  withState("value", "changeState", ""),
  withHandlers({
    printName: props => evt => {
      return props.changeState(evt.target.value);
    }
  })
)(TextField);
