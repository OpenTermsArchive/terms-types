const schema = {
  type: 'object',
  additionalProperties: false,
  patternProperties: {
    '\\w': {
      type: 'object',
      additionalProperties: false,
      required: ['topic', 'obligee'],
      properties: {
        topic: {
          type: 'string',
          title: 'The topic of the commitment',
          examples: ['end user’s service usage', 'end user’s personal data', 'public behaviour'],
        },
        obligee: {
          type: 'string',
          title: 'The targeted audience',
          examples: ['end user', 'developer', 'data controllers (in the sense of GDPR)'],
        },
        aliases: {
          type: 'array',
          items: {
            type: 'string',
          },
          minItems: 1,
        },
        industries: {
          type: 'array',
          items: {
            type: 'string',
          },
          minItems: 1,
        },
        jurisdictions: {
          type: 'array',
          items: {
            type: 'string',
            pattern: '^[A-Z]{2}$', // ISO 3166-2 region codes
          },
          minItems: 1,
        },
        references: {
          type: 'object',
          patternProperties: {
            '\\w': {
              type: 'string',
              format: 'uri',
              description: 'The URL where the reference can be found',
            },
          },
        },
      },
    },
  },
};

export default schema;
