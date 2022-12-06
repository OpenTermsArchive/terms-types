import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import schema from './termsTypes.schema.js';

import TERMS_TYPES from '../index.js';

const validator = new Ajv({ allErrors: true });
addFormats(validator);

const isValid = validator.validate(schema, TERMS_TYPES);

if (!isValid) {
  console.log(validator.errors);
} else {
  console.log('termsTypes.json is valid!');
}
