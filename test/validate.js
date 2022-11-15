import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import schema from './documentTypes.schema.js';

import TERMS_DOCUMENT_TYPES from '../index.js';

const validator = new Ajv({ allErrors: true });
addFormats(validator);

const isValid = validator.validate(schema, TERMS_DOCUMENT_TYPES);

if (!isValid) {
  console.log(validator.errors);
} else {
  console.log('documentTypes.json is valid!');
}
