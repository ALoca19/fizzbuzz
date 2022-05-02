const FizzbuzzService = require("../../../lib/services/FizzbuzzService");

describe("Pruebas de la clase FizzbuzzService", () => {
    test("1) Comprobar  Score 1", () => {
        const explorer1= {name: "Explorer1", score: 1};
        const explorerTest = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorerTest.trick).toBe(1);
    });
    test("2) Comprobar  Score 3", () => {
        const explorer1= {name: "Explorer1", score: 3};
        const explorerTest = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorerTest.trick).toBe("FIZZ");
    });
    test("3) Comprobar  Score 5", () => {
        const explorer1= {name: "Explorer1", score: 5};
        const explorerTest = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorerTest.trick).toBe("BUZZ");
    });
    test("4) Comprobar  Score 15", () => {
        const explorer1= {name: "Explorer1", score: 15};
        const explorerTest = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorerTest.trick).toBe("FIZZBUZZ");
    });

    test("5) Comprobar applyValidationInNumber Numero 1", () => {
        const valor = FizzbuzzService.applyValidationInNumber(1);
        expect(valor).toBe(1);
    });
    test("6) Comprobar applyValidationInNumber Numero 3", () => {
        const valor = FizzbuzzService.applyValidationInNumber(3);
        expect(valor).toBe("FIZZ");
    });
    test("7) Comprobar applyValidationInNumber Numero 5", () => {
        const valor = FizzbuzzService.applyValidationInNumber(5);
        expect(valor).toBe("BUZZ");
    });
    test("8) Comprobar applyValidationInNumber Numero 15", () => {
        const valor = FizzbuzzService.applyValidationInNumber(15);
        expect(valor).toBe("FIZZBUZZ");
    });
});