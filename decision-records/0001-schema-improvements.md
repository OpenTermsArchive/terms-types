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

### Solution A

#### Schema

```json
"<terms type name>": {
  "defines": "...",
  "used by": "...", // Default value: "service provider"
  "addressed to": "...", // Default value: "end user"
  "also known as": [ // Optional
    "..."
  ],
  "referenced by": { // Optional
    "name": "url"
  }
}
```

##### Examples

```json
"Editorial Policy": {
  "defines": "the writing and publishing standards and principles",
  "also known as": [
    "Editorial Guidelines"
  ],
  "referenced by": {
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

#### Schema


```json
"<terms type name>": {
  "subject": "...",
  "owner": "...", // Default value: "service provider"
  "recipient": "...", // Default value: "end user"
  "aliases": [ // Optional
    "..."
  ],
  "references": { // Optional
    "name": "url"
  }
}
```

##### Examples

```json
"Editorial Policy": {
  "subject": "writing and publishing standards and principles",
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
  "subject": "benefits and limitations associated with the transportation being provided",
  "owner": "transportation operator (airline, railway, bus…)",
  "recipient": "passenger",
  "aliases": [
    "Transport Conditions"
  ]
}
```

## Decision Outcome

...
