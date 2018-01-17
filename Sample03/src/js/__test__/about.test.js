import React from 'react';
import TestRenderer from "react-test-renderer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Cards from "../cards";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

Enzyme.configure({ adapter: new Adapter() });

function MyComponent() {
  return (
    <div>
      <SubComponent foo="bar" />
      <p>Hello</p>
      <button onClick={props.onClick} />
    </div>
  )
}

function SubComponent() {
  return (
    <p>Sub</p>
  );
}

var props = {
  onTabsChange: jest.fn(),
  onClick: jest.fn()
};

const testRenderer = TestRenderer.create(<MyComponent />);
const testInstance = testRenderer.root;
const testMain = TestRenderer.create(<MuiThemeProvider {... props}><Cards /></MuiThemeProvider>);


test("sss", () => {

  expect(testInstance.findByType(SubComponent).props.foo).toBe('bar');
  expect(testMain.toJSON()).toMatchSnapshot();

  let wrapper = shallow(<MyComponent {... props} />);
  let item = wrapper.find("button");
  expect(item.length).toBe(1);
  item.simulate("click");
  expect(props.onClick).toBeCalled();

  //console.log(wrapper);
  //let item = testMain.root.find("[tabindex=1]");
  //item.simulate('click');
  //let item = wrapper.find("div");
  //expect(item.length).toBe(1)
  //item.simulate("click");
  //expect(props.onTabsChange).toBeCalled();
});

