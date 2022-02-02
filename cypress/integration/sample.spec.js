// describe("My First Test", () => {
//   it("Does not do much!", () => {
//     expect(true).to.equal(true);
//   });
// });

describe("My First Test", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit("https://example.cypress.io");
  });
});

describe("The Home Page", () => {
  beforeEach(() => {
    cy.exec("npm start");
  });

  it("successfully loads", () => {
    cy.visit("/"); // baseUrl 설정 시 http://localhost 생략 가능
  });
  it("get Text", () => {
    cy.contains("Learn React").click();
  });
});
