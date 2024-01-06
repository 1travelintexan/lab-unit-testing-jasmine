// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 4", () => {
  describe("Function - printFullName", () => {
    it("should be defined", () => {
      expect(printFullName).toBeDefined();
    });
    it("should take one argument", () => {
      expect(printFullName.length).toBe(1);
    });
    it("should return undefined if the argument is not of type object", () => {
      expect(printFullName("Joshua")).toBe(undefined);
      expect(printFullName(2)).toBe(undefined);
      expect(printFullName(true)).toBe(undefined);
    });
    it("should return undefined if the object does not contain firstName and lastName", () => {
      expect(
        printFullName({
          firstName: "Mat",
        })
      ).toBe(undefined);
    });
    it("should return the first and last name separated by a string", () => {
      expect(
        printFullName({
          firstName: "Ragnar",
          lastName: "Lothbrook",
        })
      ).toBe("Ragnar Lothbrook");
      expect(
        printFullName({
          firstName: "Jack",
          lastName: "Reese",
        })
      ).toBe("Jack Reese");
    });
  });
});
