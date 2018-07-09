function Input(props, propName) {
  const CheckFor = {
    text: ["value", "placeholder"],
    checkbox: ["value", "name", "checked"],
    radio: ["value", "name", "checked"],
  };

  if (
    CheckFor[props.type] &&
    CheckFor[props.type].indexOf(propName) !== -1 &&
    props[propName] === null
  ) {
    /* istanbul ignore next */
    return new Error(`Missed \`${propName}\` prop on input type ${props.type}`);
  }

  return null;
}

const customPropTypes = {
  Input,
};

export default customPropTypes;
