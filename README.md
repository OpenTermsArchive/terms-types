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

#### Use singular

For consistency, the term “Policy” in a type name should only be used singular (“policy”), never plural (“policies”). Similarly, all terms types should have a singular name.

### Alternative names

Some terms types might have several commonly-used names, often varying by jurisdiction. To increase discoverability and clarity, alternative names can be provided to terms types. These alternative names are not translations, but rather synonyms in English. They are provided in an array under the `aliases` key.

Examples:

- `"Hyperlinks Policy" : { "aliases": [ "Links Policy", "Linking Policy" ], … }`
- `"Whistleblower Policy": { "aliases": [ "Whistleblower Protections" ], … }`

### Required attributes

Each terms type is characterized by two required attributes:

- the `topic` of the commitment, i.e. the information or interaction whose handling will be constrained by the associated terms;
- the targeted `obligee` whose rights and duties are defined in the associated terms.

Each type thus has the following structure:

```json
{
  "<Terms Type Name>": {
    "topic": "<topic>",
    "obligee": "<obligee>"
  }
}
```

### Optional attributes

Terms types can have additional optional attributes:

#### Industries

Some terms types might be specific to certain industries. These can be specified in an array under the `industries` key.

```json
{
  "<Terms Type Name>": {
    "topic": "…",
    "obligee": "…",
    "industries": [
      "Air Transport",
      "Maritime Transport"
    ]
  }
}
```

#### Jurisdictions

Some terms types might be specific to certain jurisdictions. These can be specified as [ISO 3166-2 region codes](https://en.wikipedia.org/wiki/ISO_3166-2) in an array under the `jurisdictions` key.

```json
{
  "<Terms Type Name>": {
    "topic": "…",
    "obligee": "…",
    "jurisdictions": [
      "US",
      "GB",
      "FR"
    ]
  }
}
```

#### References

Terms types may contain a `references` property which contains a map of related resources that may help to understand the purpose of this type, such as legal definitions, or the discussions that led to the choice of this name. Each reference must have a name and a URL.

```json
{
  "<Terms Type Name>": {
    "topic": "…",
    "obligee": "…",
    "references": {
      "<reference name>": "<URL where the reference can be found>"
    }
  }
}
```

##### Legal references

Legal references will be prefixed by the flag emoji of the jurisdiction of enactment, will use the full name of the law, and will link to the official journal URL.

Examples:

- `"🇬🇧 Bribery Act 2010": "https://www.legislation.gov.uk/ukpga/2010/23/contents"`
- `"🇫🇷 Loi n°2005-102 du 11 février 2005 pour l'égalité des droits et des chances, la participation et la citoyenneté des personnes handicapées, article 47": "https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000001290363"`

### Example

```json
"Whistleblower Policy": {
  "topic": "reporting on suspected misconduct and illegal acts and prevention of retaliation",
  "obligee": "employees",
  "aliases": [
    "Whistleblower Protections"
  ],
  "references": {
    "Open Terms Archive discussion": "https://github.com/OpenTermsArchive/terms-types/discussions/37",
    "🇺🇸 Whistleblower Protection Act of 1989": "https://www.govinfo.gov/content/pkg/STATUTE-103/pdf/STATUTE-103-Pg16.pdf",
    "🇫🇷 Loi n°2016-1691 du 9 décembre 2016 relative à la transparence, à la lutte contre la corruption et à la modernisation de la vie économique, dite « Sapin II »": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000033558528"
  }
}
```

## Add new terms types

Contributions to expand the list of known terms types are welcome, but need to follow a strict design, review and validation process in order to ensure consistency in the ontology. If you'd like to suggest a new type, please follow the process detailed in the [CONTRIBUTING file](CONTRIBUTING.md#add-new-terms-types).

---

## License

The code for this software is distributed under the European Union Public Licence (EUPL) v1.2.
Contact the author if you have any specific need or question regarding licensing.
