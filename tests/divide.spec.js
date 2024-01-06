describe("Iteration 2", () => {
  describe("Function - divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });
    it("should take two arguments", () => {
      expect(divide.length).toBe(2);
    });
    it("should return the division of two numbers", () => {
      expect(divide(10, 2)).toBe(5);
      expect(divide(50, 10)).toBe(5);
    });
    it("should return undefined if two arguments are not passed", () => {
      expect(divide(2)).toBe(undefined);
      expect(divide()).toBe(undefined);
      expect(divide(undefined, 1)).toBe(undefined);
    });
    it("should return undefined if one of the arguments is not a number", () => {
      expect(divide("100", "25")).toBe(undefined);
      expect(divide("2", 1)).toBe(undefined);
    });
  });
});
