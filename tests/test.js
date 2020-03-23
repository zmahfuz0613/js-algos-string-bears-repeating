let algos = require("../repeatString.js")

test("repeat the string N number of times", () => {
  expect(algos.repeatString("abc", 3)).toBe("abcabcabc")

  expect(algos.repeatString("fine time", 3)).toBe("fine timefine timefine time")

  expect(algos.repeatString("hi there friend", 2)).toBe("hi there friendhi there friend")
})
