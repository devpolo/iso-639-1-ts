# ISO-639-1

## Installation

```bash
npm install iso-639-1-ts
yarn add iso-639-1-ts
pnpm add iso-639-1-ts
```

## Examples

### NestJS

```typescript
import { registerDecorator, ValidationOptions } from "class-validator";
import { ISO6391 } from "iso-639-1-ts";

export const IsISO6391LanguageCode = (
  validationOptions?: ValidationOptions
) => {
  return (object: any, propertyName: string) => {
    registerDecorator({
      name: "isISO6391LanguageCode",
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: unknown) {
          if (typeof value !== "string") {
            return false;
          }

          return ISO6391.isValid(value);
        },
        defaultMessage(): string {
          return "$property must be a valid ISO 639-1 language code.";
        },
      },
    });
  };
};
```
