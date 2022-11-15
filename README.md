# terms-document-types

This repository contains a database of document types related to terms (agreement, policy, guidelines, …) that can be associated with a service.

It aims to unify the different names that services may give to similar documents to enable cross-services comparison.

## Installation

```bash
npm install terms-document-types
```

## Usage

```js
import TERMS_DOCUMENT_TYPES from './index.js';

console.log(TERMS_DOCUMENT_TYPES['Terms of Service']); // Display `Terms of Service` details

console.log(Object.keys(TERMS_DOCUMENT_TYPES)); // Display all terms types
```

## Data Structure

The `documentTypes.json` database JSON file is a map of [title cased](https://en.wikipedia.org/wiki/Title_case) document types. 

The types might not always match the exact name given by the service provider. For example, some providers might call their document “Terms and Conditions” or “Terms of Use” instead of “Terms of Service”. The document type does not have to match the exact name, it only has to match the commitment that is taken.

So, in order to guide usage and disambiguate synonyms, each document type is characterised along three dimensions of the `commitment` that is being taken in it:

- the `writer` of the document;
- the targeted `audience`;
- the `object` of the commitment.

Each document type has the following required structure:

```json
{
  "<Document Type>": {
    "commitment": {
      "writer": "the `writer` of the document",
      "audience": "the targeted `audience",
      "object": "the `object` of the commitment"
    }
  },
}
````

It may also contain an optional `references` property which contains a map of related resources that may help to understand the purpose of this document type or the discussions that led to the choice of this name. Each reference must have a name and a URL.

```json
{
  "<Document Type>": {
    "commitment": {},
    "references": {
      "<reference name>": "the URL where the reference can be found"
    }
  },
}
````

As example, a document type thus looks like:

```json
{
  "Business Privacy Policy": {
    "commitment": {
      "writer": "intermediation service provider",
      "audience": "business user",
      "object": "personal data of business users and of people acting on their behalf"
    },
    "references": {
      "Open Terms Archive discussion": "https://github.com/ambanum/OpenTermsArchive/discussions/923"
    }
  }
}
```

---

## License

The code for this software is distributed under the European Union Public Licence (EUPL) v1.2.
Contact the author if you have any specific need or question regarding licensing.
