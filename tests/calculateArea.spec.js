describe("Function - Calculate Area", () => {
  it("should be defined", () => {
    expect(calculateArea).toBeDefined();
  });
  it("should take two numbers as arguments", () => {
    expect(calculateArea.length).toBe(2);
  });
  it("should return the area of a rectangle", () => {
    expect(calculateArea(2, 4)).toBe(8);
    expect(calculateArea(20, 50)).toBe(1000);
    expect(calculateArea(1, 10)).toBe(10);
  });
  it("should return undefined if one or both arguments are not provided", () => {
    expect(calculateArea(2)).toBe(undefined);
    expect(calculateArea(undefined, 2)).toBe(undefined);
    expect(calculateArea()).toBe(undefined);
  });
  it("should return undefined if one or both arguments are not of type number", () => {
    expect(calculateArea("2", 1)).toBe(undefined);
    expect(calculateArea(2, "10")).toBe(undefined);
    expect(calculateArea("100", "10")).toBe(undefined);
  });
});
