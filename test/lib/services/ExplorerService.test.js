const ExplorerService = require("../../../lib/services/ExplorerService");
const Reader = require("../../../lib/utils/Reader");

describe("Pruebas de la clase ExplorerService", () => {
    test("1) Comprobar metodo filterByMission", () => {
        const explorers =Reader.readJsonFile("./data/explorers.json");
        const explorersByMission =ExplorerService.filterByMission(explorers, "node");
        expect(explorersByMission.length).toBe(10);
    });

    test("2) Comprobar metodo getAmountOfExplorersByMission", () => {
        const explorers =Reader.readJsonFile("./data/explorers.json");
        const amountOfExplorersByMission =ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(amountOfExplorersByMission).toBe(10);
    });
    test("3) Comprobar metodo getExplorersUsernamesByMission", () => {
        const explorers =Reader.readJsonFile("./data/explorers.json");
        const explorersUsernamesByMission =ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(explorersUsernamesByMission[0]).toBe("ajolonauta1");
    });
});