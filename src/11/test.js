const expect = require("chai").expect;

const part1 = require("./part1");
const part2 = require("./part2");

const {powerLevel, computeGridPowerLevels, computeTotalPowers, maxTotalPower} = part1;
const {} = part2;

describe(part1.title, () => {

    describe("--- Part One ---", () => {

        const testData = [
            {x:3,y:5,gridSerialNumber:8,expectedPowerLevel:4},
            {x:122,y:79,gridSerialNumber:57,expectedPowerLevel:-5},
            {x:217,y:196,gridSerialNumber:39,expectedPowerLevel:0},
            {x:101,y:153,gridSerialNumber:71,expectedPowerLevel:4}
        ];

        it("should compute the power level of a cell", () => {
            testData.forEach(({x,y,gridSerialNumber,expectedPowerLevel}) => {
                expect(powerLevel(x, y, gridSerialNumber)).to.equal(expectedPowerLevel);
            });
        });

        it('should compute power levels for the whole grid', () => {
            const grid = computeGridPowerLevels(18);
            expect(grid[33-1][45-1]).to.equal(4);
            expect(grid[33-1][46-1]).to.equal(3);
            expect(grid[33-1][47-1]).to.equal(1);
        });

        it('should find the 3x3 square which has the largest total power', () => {
            const grid = computeGridPowerLevels(18);
            const totalPowers = computeTotalPowers(grid);
            const coordinates = maxTotalPower(totalPowers);
            expect(coordinates).to.deep.equal({x:33, y:45});
            expect(totalPowers[coordinates.x-1][coordinates.y-1]).to.equal(29);
        })

    });

    describe("--- Part Two ---", () => {

        it("should work", () => {
            expect(true).to.equal(true);
        });

    });

});