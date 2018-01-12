import sum from "../src/js/sum";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);    
});

test("test null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).not.toBeUndefined();
});

test("test number", () => {
  const a = 100;
  expect(a).toBeGreaterThan(80);
  expect([100, 20]).toContain(a);
})

describe("test mock", () => {
  beforeEach(() => {
    
  });

  afterEach(() => {

  });
  
  test("mock func", () => {
    const mockCallback = jest.fn();
    let a = sum(1, 2, mockCallback);
    expect(a).toBe(3);
    expect(mockCallback).toBeCalled();
    expect(mockCallback.mock.calls.length).toBe(1);
    expect(mockCallback.mock.calls[0][0]).toBe(1);
    expect(mockCallback.mock.calls[0][1]).toBe(2);
  });



  test("test matcher", () => {
    const data = 1;
    expect(data).toBe(1);
    const data2 = { "a": 11, "b": 12 };
    expect(data2).toEqual({"a": 11, "b": 12});
  });

  test("test nill", () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
    expect(n).toBeDefined();
    
  });
}); 

describe("test return value", () => {
  const myMonck = jest.fn();

  beforeEach(() => {
    myMonck
      .mockReturnValueOnce(10)
      .mockReturnValueOnce(2)
      .mockReturnValue(3);
  });

  test("return once", () => {
    expect(sum(1,2, myMonck)).toBe(13);
    expect(sum(1,2, myMonck)).toBe(5);
    expect(sum(1,2, myMonck)).toBe(6);
    expect(myMonck.mock.calls.length).toBe(3);
    expect(sum(1,2, myMonck)).toBe(6);
  });

  test("return custom", () => {
    const mockImp = jest.fn();
    mockImp.mockImplementationOnce((a, b) => a * b)
    .mockImplementationOnce((a, b) => a + b);
    expect(sum(1, 2, mockImp)).toBe(5);
    expect(sum(2, 3, mockImp)).toBe(10);
    
    expect(myMonck).toBeCalled();
    expect(mockImp).toBeCalledWith(1, 2);
    expect(mockImp).lastCalledWith(2, 3);
    
  });

});
