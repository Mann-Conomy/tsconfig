import { readFile } from "fs/promises";
import Ajv, { AnySchema } from "ajv-draft-04";
import { describe, expect, test } from "@jest/globals";

describe("tsconfig.json", () => {
    test("should match JSON schema", async() => {
        // Arrange
        const schema = await (await fetch("https://json.schemastore.org/tsconfig")).json() as AnySchema;
    
        const ajv = new Ajv({ strict: false });
    
        // Act
        const validate = ajv.compile(schema);
    
        const tsconfig = JSON.parse(await readFile("tsconfig.json", { encoding: "utf8" }));

        // Assert
        expect(validate(tsconfig)).toBe(true);
    });
});
