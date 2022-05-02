const Reader = require("../../../lib/utils/Reader");

describe("Pruebas de la clase Reader", () => {
    test("1) Leer lista de explorers", () => {
        const explorers =Reader.readJsonFile("./data/explorers.json");
        expect(explorers.length).toBe(15);
    });
});