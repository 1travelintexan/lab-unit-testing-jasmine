describe("Iteration 5", () => {
  describe("Function - sumArrayNumbers", () => {
    it("should be defined", () => {
      expect(sumArrayNumbers).toBeDefined();
    });
    it("should take one argument", () => {
      expect(sumArrayNumbers.length).toBe(1);
    });
    it("should have one argument of type array that contains only numbers ", () => {
      expect(sumArrayNumbers(123)).toBe(undefined);
      expect(sumArrayNumbers("dfadf")).toBe(undefined);
      expect(sumArrayNumbers(["djler", 1, 3, 4])).toBe(undefined);
    });
    it("should return the array summed", () => {
      expect(sumArrayNumbers([1, 2, 3, 4, 5])).toBe(15);
      expect(sumArrayNumbers([2, 4, 6])).toBe(12);
      expect(sumArrayNumbers([5, 10, 15])).toBe(30);
      //   expect(sumArrayNumbers([])).toBe(0);
    });
  });
});
