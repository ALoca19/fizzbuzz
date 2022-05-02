const ExplorerController = require("../../../lib/controllers/ExplorerController");


describe("Pruebas de la clase ExplorerService", () => {
    test("1) Comprobar metodo getExplorersByMission", () => {
        const explorersByMission =ExplorerController.getExplorersByMission("node");
        expect(explorersByMission.length).toBe(10);
    });

    test("2) Comprobar metodo getExplorersUsernamesByMission", () => {
        const explorersUsernamesByMission =ExplorerController.getExplorersUsernamesByMission( "node");
        expect(explorersUsernamesByMission[0]).toBe("ajolonauta1");
    });
    test("3) Comprobar metodo getExplorersAmonutByMission", () => {
        const amountOfExplorersByMission =ExplorerController.getExplorersAmonutByMission( "node");
        expect(amountOfExplorersByMission).toBe(10);
    });
});