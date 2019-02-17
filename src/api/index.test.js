import { generateNos, concatRandNos } from "./index";

describe("The Random number API", () => {
  describe("generateNos method", () => {
    it("should generate unique randomNumbers based on the quantity passed to it", () => {
      expect(generateNos(100).length).toEqual(100);
      expect(generateNos(9000).length).toEqual(9000);
      expect(generateNos(10).length).toEqual(10);
      expect(generateNos(1).length).toEqual(1);
    });
    it("should return an error if a negative quantity is passed to it", () => {
      expect(generateNos(-3)).toEqual("Please enter a positive no");
    });
    it("should return an error if a quantity above 10000 is passed to it", () => {
      expect(generateNos(10300)).toEqual(
        "You can only generate a maximum of 10000 numbers at a time"
      );
    });
  });
  describe("concatRandNos method", () => {
    it("should concatenate any 2 arrays passed to it", () => {
      expect(concatRandNos(["a", "b", "c"], ["d", "e", 10])).toEqual([
        "a",
        "b",
        "c",
        "d",
        "e",
        10
      ]);
    });
  });
});
