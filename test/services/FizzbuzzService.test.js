const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Unit Tests for FizzbuzzService class", () => {
  const explorer1 = {name: "Explorer", score: 1};
  const explorer2 = {name: "Explorer", score: 3};
  const explorer3 = {name: "Explorer", score: 5};
  const explorer4 = {name: "Explorer", score: 15};

  test("Create FizzbuzzService object", () => {
    const fizzBuzz = new FizzbuzzService();
    expect(fizzBuzz).toEqual({});
  }),
  test("FizzbuzzService Trick by Explorer", () => {
    const Explorer1 = FizzbuzzService.applyValidationInExplorer(explorer1);
    const Explorer2 = FizzbuzzService.applyValidationInExplorer(explorer2);
    const Explorer3 = FizzbuzzService.applyValidationInExplorer(explorer3);
    const Explorer4 = FizzbuzzService.applyValidationInExplorer(explorer4);

    expect(Explorer1.trick).toBe(1);
    expect(Explorer2.trick).toBe("FIZZ");
    expect(Explorer3.trick).toBe("BUZZ");
    expect(Explorer4.trick).toBe("FIZZBUZZ");
  })
});