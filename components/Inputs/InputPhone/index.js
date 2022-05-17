import React from "react";
import InputMask from "react-input-mask";

const Input = (props) => (
  <InputMask mask="(99) 9999-9999" placeholder="(xx) xxxxx-xxxx" value={props.value} onChange={props.onChange} />
);

export default Input;