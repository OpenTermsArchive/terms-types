# Terms Types

Terms Types are an ontology describing all known sorts of terms and conditions to the Open Terms Archive project.

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

## Data structure

This repository contains a database of types of terms of service (“agreement”, “policy”, “guidelines”…) under which a service is delivered.

The `termsTypes.json` JSON file is a map of [title cased](https://en.wikipedia.org/wiki/Title_case) terms types.

The types might not always match the exact name given by the service provider. For example, some providers might call their document “Terms and Conditions” or “Terms of Use” instead of “Terms of Service”. The terms type does not have to match the exact name, it only has to match the commitment that is taken.

### Name

The name of each type is written with title capitalisation (every noun is capitalised).

It should be the most commonly used and most internationally understandable for this type.

### Tryptich

In order to guide usage and disambiguate synonyms, each terms type is characterised by a tryptich along the three dimensions of the `commitment` that is being taken in it:

- the `writer` of the document, in most cases the service provider itself;
- the targeted `audience` whose rights and duties are defined in the associated terms;
- the `object` of the commitment, i.e. the information or interaction whose handling will be constrained by the associated terms.

Each type thus has the following structure, where all fields are required:

```json
{
  "<Terms Type Name>": {
    "commitment": {
      "writer": "<writer>",
      "audience": "<audience>",
      "object": "<object>"
    }
  }
}
```

### References

It may also contain an optional `references` property which contains a map of related resources that may help to understand the purpose of this type, such as the discussions that led to the choice of this name. Each reference must have a name and a URL.

```json
{
  "<Terms Type Name>": {
    "commitment": { … },
    "references": {
      "<reference name>": "<URL where the reference can be found>"
    }
  },
}
```

### Example

```json
{
  "Business Mediation Policy": {
    "commitment": {
      "writer": "intermediation service provider",
      "audience": "business users",
      "object": "mediation process after internal complaints handling failed"
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
