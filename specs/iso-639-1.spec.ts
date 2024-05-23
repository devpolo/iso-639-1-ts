import { ISO6391 } from "../src";

describe("ISO 639-1", () => {
  describe("When validating a language", () => {
    it.each`
      code         | expected
      ------------ | --------
      ${"en"}      | ${true}
      ${"fr"}      | ${true}
      ${"es"}      | ${true}
      ${{}}        | ${false}
      ${undefined} | ${false}
      ${null}      | ${false}
      ${"invalid"} | ${false}
    `(
      "Should return `$expected` when the code is '$code'",
      ({ code, expected }) => {
        expect(ISO6391.isValid(code)).toBe(expected);
      }
    );
  });

  describe("When getting the name of a language", () => {
    it.each`
      code         | expected
      ------------ | --------
      ${"en"}      | ${"English"}
      ${"fr"}      | ${"French"}
      ${"es"}      | ${"Spanish"}
      ${"invalid"} | ${null}
    `(
      "Should return `$expected` when the code is '$code'",
      ({ code, expected }) => {
        expect(ISO6391.getName(code)).toBe(expected);
      }
    );
  });

  describe("When getting the local name of a language", () => {
    it.each`
      code         | expected
      ------------ | --------
      ${"en"}      | ${"English"}
      ${"fr"}      | ${"Français"}
      ${"es"}      | ${"Español"}
      ${"invalid"} | ${null}
    `(
      "Should return `$expected` when the code is '$code'",
      ({ code, expected }) => {
        ISO6391.isValid(code);

        expect(ISO6391.getLocalName(code)).toBe(expected);
      }
    );
  });

  describe("When getting a language", () => {
    it.each`
      code         | expected
      ${"en"}      | ${{ code: "en", name: "English", localName: "English" }}
      ${"fr"}      | ${{ code: "fr", name: "French", localName: "Français" }}
      ${"es"}      | ${{ code: "es", name: "Spanish", localName: "Español" }}
      ${"invalid"} | ${null}
    `(
      "Should return `$expected` when the code is '$code'",
      ({ code, expected }) => {
        ISO6391.isValid(code);

        expect(ISO6391.getLanguage(code)).toEqual(expected);
      }
    );
  });

  describe("When listing languages", () => {
    it("Should return the list of languages", () => {
      expect(ISO6391.listLanguages()).toHaveLength(183);
    });
  });

  describe("When listing codes", () => {
    it("Should return the list of codes", () => {
      expect(ISO6391.listCodes()).toHaveLength(183);
    });
  });
});
