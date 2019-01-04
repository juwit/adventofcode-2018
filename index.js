console.log("[Advent of Code 2018]");
console.log();

const day01Part1 = require("./src/01/part1");
const day01Part2 = require("./src/01/part2");
console.log(day01Part1.title);
console.log(`Puzzle answer : ${day01Part1.solve()}`);
console.log("--- Part Two ---");
console.log(`Puzzle answer : ${day01Part2.solve()}`);

console.log();

const day02Part1 = require("./src/02/part1");
const day02Part2 = require("./src/02/part2");
console.log(day02Part1.title);
console.log(`Puzzle answer : ${day02Part1.solve()}`);
console.log("--- Part Two ---");
console.log(`Puzzle answer : ${day02Part2.solve()}`);

console.log();

const day03Part1 = require("./src/03/part1");
const day03Part2 = require("./src/03/part2");
console.log(day03Part1.title);
console.log(`Puzzle answer : ${day03Part1.solve()}`);
console.log("--- Part Two ---");
console.log(`Puzzle answer : ${day03Part2.solve()}`);

console.log();

const day04Part1 = require("./src/04/part1");
const day04Part2 = require("./src/04/part2");
console.log(day04Part1.title);
console.log(`Puzzle answer : ${day04Part1.solve()}`);
console.log("--- Part Two ---");
console.log(`Puzzle answer : ${day04Part2.solve()}`);

console.log();

require("./src/05/05-alchemical-reduction").solve();
require("./src/06/06-chronal-coordinates").solve();
require("./src/07/07-the-sum-of-its-parts").solve();
require("./src/08/08-memory-maneuver").solve();