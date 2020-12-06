const fs = require("fs")

const input = fs.readFileSync("./a6.txt", "utf8")

const groups = input
  .split("\r\n\r\n")
  .map((group) => group.split("\r\n"))

let sum = 0
const letters = "abcdefghijklmnopqrstuvwxyz"
groups.forEach((group) => {
  letters.split("").forEach((letter) => {
    let includesLetter = true
    group.forEach((form) => {
      if (!form.includes(letter)) includesLetter = false
    })
    if (includesLetter) sum++
  })
})
console.log(sum)
