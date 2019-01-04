const expect = require("chai").expect;

const computeFrequency = require("../src/01/01-chronal-calibration").computeFrequency;
const computeFrequencyUntillRepetition = require("../src/01/01-chronal-calibration").computeFrequencyUntilRepetition;

describe("--- Day 1: Chronal Calibration ---", () => {

    describe("--- Part One ---", () => {

        const examples = [
            {
                "frequencies": "+1, -2, +3, +1",
                "result": 3
            },
            {
                "frequencies": "+1, +1, +1",
                "result": 3
            },
            {
                "frequencies": "+1, +1, -2",
                "result": 0
            },
            {
                "frequencies": "-1, -2, -3",
                "result": -6
            }

        ];


        it("should compute device frequencies", ()=>{
            examples.forEach(example => {
                let result = computeFrequency(example.frequencies.split(", "));
                expect(result).to.equal(example.result);
            })
        });

    });

    describe("--- Part Two ---", () => {

        const examples = [
            {
                "frequencies": "+1, -2, +3, +1",
                "result": 2
            },
            {
                "frequencies": "+1, -1",
                "result": 0
            },
            {
                "frequencies": "+3, +3, +4, -2, -4",
                "result": 10
            },
            {
                "frequencies": "-6, +3, +8, +5, -6",
                "result": 5
            },
            {
                "frequencies": "+7, +7, -2, -7, -4",
                "result": 14
            }
        ];

        it("should compute device frequencies", ()=>{
            examples.forEach(example => {
                let result = computeFrequencyUntillRepetition(example.frequencies.split(", "));
                expect(result).to.equal(example.result);
            })
        });

    });

});