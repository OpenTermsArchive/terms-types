# Proposal for Schema Improvements

- Date: 2024-10-22

## Introduction

This RFC proposes improvements to the current data schema to improve usability. Since changing the data structure entails publishing a new major version, which is costly for downstream dependencies, it is relevant to consider the entire vocabulary and structure to avoid later changes in the near future.

## Context and Problem Statement

### Confusion around the `writer` field

The `writer` field is filled in with `service provider` in 32 out of 41 existing terms types, which does not add much value. Other values, such as `transportation operator (airline, railway, bus…)` (once), `paid-for goods or service provider` (once), `online marketplace` (twice), `search engine or intermediation service provider` (twice), and `intermediation service provider` (three times), only provide information about the industry in which the service operates, which is not the original purpose of the `writer` field.

### Ambiguity in the `audience` field

There is ambiguity between the audience of the document and the audience of the service. Currently, the `audience` field could be interpreted in these two ways.

## Proposed solutions

In any case, this file format does not have default values. Optimizations to remove redundancy do not bring much in the context, and add ambiguity instead.

### Solution A

- Remove `commitment` object
- Update `object` to `defines` field
- Update `writer` to `used by` field
- Update `audience` to `addressed to` field
- Update `references` to `described in` field

#### Schema

```json
"<terms type name>": {
  "defines": "...",
  "used by": "...",
  "addressed to": "...",
  "also known as": [ // Optional array of strings
    "..."
  ],
  "described in": { // Optional object with name/url pairs
    "name": "url"
  }
}
```

##### Examples

```json
"Editorial Policy": {
  "defines": "the writing and publishing standards and principles",
  "used by": "service provider",
  "addressed to": "end user",
  "also known as": [
    "Editorial Guidelines"
  ],
  "described in": {
    "Open Terms Archive discussion": "https://github.com/OpenTermsArchive/terms-types/discussions/35"
  }
}
```

```json
"Conditions of Carriage": {
  "defines": "benefits and limitations associated with the transportation being provided",
  "used by": "transportation operator (airline, railway, bus…)",
  "addressed to": "passenger",
  "also known as": [
    "Transport Conditions"
  ]
}
```

### Solution B

- Remove `commitment` object
- Remove `writer` field
- Update `object` to `topic` field
- Update `audience` to `target`  field
- Update `also known as` to `aliases` field

#### Schema

```json
"<terms type name>": {
  "topic": "...",
  "target": "...",
  "aliases": [ // Optional array of strings
    "..."
  ],
  "references": { // Optional object with name/url pairs
    "name": "url"
  }
}
```

##### Examples

```json
"Editorial Policy": {
  "topic": "the writing and publishing standards and principles",
  "target": "end user",
  "aliases": [
    "Editorial Guidelines"
  ],
  "references": {
    "Open Terms Archive discussion": "https://github.com/OpenTermsArchive/terms-types/discussions/35"
  }
}
```

```json
"Conditions of Carriage": {
  "topic": "benefits and limitations associated with the transportation being provided",
  "target": "passenger",
  "aliases": [
    "Transport Conditions"
  ]
}
```

### Solution C1

- Remove `commitment` object
- Remove `writer` field
- Update `object` to `topic` field
- Update `audience` to `obligee` field
- Update `also known as` to `aliases` field
- Add `indutries` field
- Add `jurisdictions` field

#### Schema

```json
"<terms type name>": {
  "topic": "...",
  "obligee": "...",
  "indutries": [ // Optional array of strings
    "..."
  ],
  "jurisdictions": [ // Optional array of ISO 3166-2 region codes
    "..."
  ],
  "aliases": [ // Optional array of strings
    "..."
  ],
  "references": { // Optional object with name/url pairs
    "name": "url"
  }
}
```

##### Examples

```json
"Editorial Policy": {
  "topic": "writing and publishing standards and principles",
  "obligee": "end user",
  "aliases": [
    "Editorial Guidelines"
  ],
  "references": {
    "Open Terms Archive discussion": "https://github.com/OpenTermsArchive/terms-types/discussions/35"
  }
}
```

```json
"Conditions of Carriage": {
  "topic": "benefits and limitations associated with the transportation being provided",
  "obligee": "passenger",
  "indutries": [
    "Air Transport",
    "Maritime Transport",
    "Rail Transport",
    "Road Freight and Trucking",
    "Public Transit (Bus, Metro)",
    "Delivery and Courier Services"
  ],
  "aliases": [
    "Transport Conditions"
  ]
}
```

```json
"Anti-corruption Policy": {
  "topic": "risk mitigation and prevention of involvement in bribery",
  "obligee": "any person working directly or indirectly for the service provider",
  "jurisdictions": [
    "US",
    "GB",
    "FR"
  ],
  "aliases": [
    "Anti-bribery Policy"
  ],
  "references": {
    "Open Terms Archive discussion": "https://github.com/OpenTermsArchive/terms-types/discussions/39",
    "🇺🇸 Foreign Corrupt Practices Act": "https://www.justice.gov/criminal/criminal-fraud/foreign-corrupt-practices-act",
    "🇬🇧 Bribery Act 2010": "https://www.legislation.gov.uk/ukpga/2010/23/contents",
    "🇫🇷 Loi n°2016-1691 du 9 décembre 2016 relative à la transparence, à la lutte contre la corruption et à la modernisation de la vie économique, dite « Sapin II »": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000033558528",
    "ISO 37001 Anti-bribery management systems": "https://www.iso.org/iso-37001-anti-bribery-management.html"
  },
}
```

### Solution C2

- Include all C1 solution changes
- Update `obligee` field to an array and make it plural `obligees`
- Add `applicability` to nest `obligees`, `jurisdictions` and `industries` fields

#### Schema

```json
"<terms type name>": {
  "topic": "...",
  "aliases": [ // Optional array of strings
    "..."
  ],
  "applicability": { // Optional object defining scope
    "obligee": [ // Array of strings defining the parties obligated by the terms
      "..."
    ],
    "jurisdictions": [ // Array of ISO 3166-2 region codes
      "..."
    ],
    "industries": [ // Array of strings
      "..."
    ]
  },
  "references": { // Optional object with name/url pairs
    "name": "url"
  }
}
```

##### Examples

```json
"Editorial Policy": {
  "topic": "writing and publishing standards and principles",
  "aliases": [
    "Editorial Guidelines"
  ],
  "applicability": {
    "obligee": [
      "end user",
      "content contributors"
    ]
  },
  "references": {
    "Open Terms Archive discussion": "https://github.com/OpenTermsArchive/terms-types/discussions/35"
  }
}
```

```json
"Conditions of Carriage": {
  "topic": "benefits and limitations associated with the transportation being provided",
  "aliases": [
    "Transport Conditions"
  ],
  "applicability": {
    "obligee": [
      "passenger",
      "sender"
    ],
    "industries": [
      "Air Transport",
      "Maritime Transport",
      "Rail Transport",
      "Road Freight and Trucking",
      "Public Transit (Bus, Metro)",
      "Delivery and Courier Services"
    ]
  }
}
```

```json
"Anti-corruption Policy": {
  "topic": "risk mitigation and prevention of involvement in bribery",
  "aliases": [
    "Anti-bribery Policy"
  ],
  "applicability": {
    "obligee": [
      "employees",
      "contractors",
      "partners"
    ],
    "jurisdictions": [
      "US",
      "GB",
      "FR"
    ]
  },
  "references": {
    "Open Terms Archive discussion": "https://github.com/OpenTermsArchive/terms-types/discussions/39",
    "🇺🇸 Foreign Corrupt Practices Act": "https://www.justice.gov/criminal/criminal-fraud/foreign-corrupt-practices-act",
    "🇬🇧 Bribery Act 2010": "https://www.legislation.gov.uk/ukpga/2010/23/contents",
    "🇫🇷 Loi n°2016-1691 du 9 décembre 2016 relative à la transparence, à la lutte contre la corruption et à la modernisation de la vie économique, dite « Sapin II »": "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000033558528"
  }
}
```

## Decision Outcome

...
