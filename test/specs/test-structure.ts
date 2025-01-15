describe("Mocha JS Demo", () => {
  before(async () => {
    console.log("Before Hook ***4");
  });
  beforeEach(async () => {
    console.log("Before Each Hook");
  });
  it("First Test", async () => {
    console.log("First Test");
  });
  it("Second Test", async () => {
    console.log("Second Test");
  });
  afterEach(async () => {
    console.log("After Each Hook");
  });
  after(async () => {
    console.log("After Hook ***");
    await browser.debug();
  });
});
