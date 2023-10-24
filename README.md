# Terms Types

This repository contains a database of types of terms of service (“agreement”, “policy”, “guidelines”…) under which a service is delivered.

It aims at unifying the many names that services give to similar documents to enable comparison of terms across services no matter how they are named by their provider.

## Installation

```bash
npm install @opentermsarchive/terms-types
```

## Usage

```js
import TERMS_TYPES from '@opentermsarchive/terms-types';

console.log(TERMS_TYPES['Terms of Service']); // Display `Terms of Service` details

console.log(Object.keys(TERMS_TYPES)); // Display all terms types
```

## Data Structure

The `termsTypes.json` database JSON file is a map of [title cased](https://en.wikipedia.org/wiki/Title_case) terms types.

The types might not always match the exact name given by the service provider. For example, some providers might call their document “Terms and Conditions” or “Terms of Use” instead of “Terms of Service”. The terms type does not have to match the exact name, it only has to match the commitment that is taken.

### Tryptich

In order to guide usage and disambiguate synonyms, each terms type is characterised by a tryptich along the three dimensions of the `commitment` that is being taken in it:

- the `writer` of the document;
- the targeted `audience`;
- the `object` of the commitment.

Each type thus has the following structure, where all fields are required:

```json
{
  "<Terms Type>": {
    "commitment": {
      "writer": "the `writer` of the document",
      "audience": "the targeted `audience",
      "object": "the `object` of the commitment"
    }
  }
}
````

### References

It may also contain an optional `references` property which contains a map of related resources that may help to understand the purpose of this type, such as the discussions that led to the choice of this name. Each reference must have a name and a URL.

```json
{
  "<Terms Type>": {
    "commitment": { … },
    "references": {
      "<reference name>": "<URL where the reference can be found>"
    }
  },
}
````

### Example

```json
{
  "Business Mediation Policy": {
    "commitment": {
      "writer": "intermediation service provider",
      "audience": "business users",
      "object": "eligibility and process of mediation after internal complaints handling failed"
    },
    "references": {
      "Open Terms Archive discussion": "https://github.com/OpenTermsArchive/engine/discussions/933",
      "P2B Regulation 2019/1150, Article 12": "https://eur-lex.europa.eu/eli/reg/2019/1150/oj#d1e1148-57-1"
    }
  },
}
```

## Add new terms type

Contributions to expand the `terms-types` database are welcome. If you'd like to suggest a new type, please follow the [process detailed in our CONTRIBUTING file](CONTRIBUTING.md).

---

## License

The code for this software is distributed under the European Union Public Licence (EUPL) v1.2.
Contact the author if you have any specific need or question regarding licensing.
