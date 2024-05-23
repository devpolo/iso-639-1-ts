import { ISO6391Repository } from "./iso-639-1.repository";
import type { Language, LanguageCode } from "./types/iso-639-1.types";

/**
 * ISO 639-1 language codes.
 * @see {@link https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes}
 */
export class ISO6391 {
  static isValid(code: unknown): code is LanguageCode {
    if (typeof code !== "string") return false;

    return !!ISO6391Repository.find((item) => item.code === code);
  }

  static getName(code: LanguageCode): Language["name"] | null {
    const language = ISO6391Repository.find((item) => item.code === code);

    return language?.name ?? null;
  }

  static getLocalName(code: LanguageCode): Language["localName"] | null {
    const language = ISO6391Repository.find((item) => item.code === code);

    return language?.localName ?? null;
  }

  static getLanguage(code: LanguageCode): Language | null {
    return ISO6391Repository.find((item) => item.code === code) ?? null;
  }

  static listLanguages(): Language[] {
    return ISO6391Repository;
  }

  static listCodes(): LanguageCode[] {
    return ISO6391Repository.map((item) => item.code);
  }
}
