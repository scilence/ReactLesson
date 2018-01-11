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
  })

});