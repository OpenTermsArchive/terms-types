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

### Triptych

In order to guide usage and disambiguate synonyms, each terms type is characterised by a triptych along the three dimensions of the `commitment` that is being taken in it:

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

It may also contain an optional `references` property which contains a map of related resources that may help to understand the purpose of this type, such as legal definitions, or the discussions that led to the choice of this name. Each reference must have a name and a URL.

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

## How to define the triptych

To identify the triptych of specific terms, answer the following questions:

1. Who is responsible for creating and maintaining those terms? Most often, it will be the `service provider` itself. Sometimes, while still being the service provider, it could be that only providers from a certain industry could write such terms, such as `transportation operator`.
2. Who is the target audience whose rights and duties are defined? Often, it will be the `end user`, but it can also be the `commercial partners` or `business users`, for example.
3. Which information or interaction precisely is constrained by those terms? For example, the `end users’ personal data`, or maybe the `privileged seller status programme`. Try to be as specific as possible, as this precision enables distinguishing between otherwise similar types.

After having answered these questions, if reading out loud the triptych, it sounds right to say that **“these terms describe how the `<writer>` commits to handle the `<object>` for its `<audience>`”**.

## Add new terms types

Contributions to expand the list of known terms types are welcome, but need to follow a strict design, review and validation process in order to ensure consistency in the ontology. If you'd like to suggest a new type, please follow the process detailed in the [CONTRIBUTING file](CONTRIBUTING.md).

---

## License

The code for this software is distributed under the European Union Public Licence (EUPL) v1.2.
Contact the author if you have any specific need or question regarding licensing.
