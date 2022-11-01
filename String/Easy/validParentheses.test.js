const isValid = require("./validParentheses");

describe("#make statements for likes", () => {
  test("it handles 2 valid parentheses", () => {
    expect(isValid("()")).toBe(true)
  })

  test("it handles 6 valid parentheses", () => {
    expect(isValid("()[]{}")).toBe(true)
  })

  test("it handles 2 invalid parentheses", () => {
    expect(isValid("(]")).toBe(false)
  })

  test("it handles invalid amount of parentheses", () => {
    expect(isValid("(")).toBe(false)
  })

  test("it handles invalid wrong-ordered parentheses", () => {
    expect(isValid("({)}")).toBe(false)
  })
})