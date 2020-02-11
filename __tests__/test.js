let algos = require("../repeatStringNumTimes.js")

test("groups the arrays into an array of arrays of given length, any remainding go in last array", () => {
  expect(algos.repeatStringNumTimes("abc", 3)).toBe("abcabcabc")

})
