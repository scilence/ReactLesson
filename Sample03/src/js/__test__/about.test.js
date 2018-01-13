import React from 'react';
import TestRenderer from "react-test-renderer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Cards from "../cards";

function MyComponent() {
  return (
    <div>
      <SubComponent foo="bar" />
      <p>Hello</p>
    </div>
  )
}

function SubComponent() {
  return (
    <p>Sub</p>
  );
}

const testRenderer = TestRenderer.create(<MyComponent />);
const testInstance = testRenderer.root;
const testMain = TestRenderer.create(<MuiThemeProvider><Cards /></MuiThemeProvider>);
test("sss", () => {

  expect(testInstance.findByType(SubComponent).props.foo).toBe('bar');
  expect(testMain.toJSON()).toMatchSnapshot();

});