let algos = require("../repeatStringNumTimes.js")

test("repeat the string N times", () => {
  expect(algos.repeatStringNumTimes("abc", 3)).toBe("abcabcabc")
  expect(algos.repeatStringNumTimes("fine time", 3)).toBe("fine timefine timefine time")
  expect(algos.repeatStringNumTimes("hi there friend", 2)).toBe("hi there friendhi there friend")


})
