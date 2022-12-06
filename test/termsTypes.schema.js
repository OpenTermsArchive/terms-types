const schema = {
  type: 'object',
  additionalProperties: false,
  patternProperties: {
    '\\w': {
      type: 'object',
      additionalProperties: false,
      required: ['commitment'],
      properties: {
        commitment: {
          type: 'object',
          additionalProperties: false,
          required: ['writer', 'audience', 'object'],
          properties: {
            writer: {
              type: 'string',
              title: 'The writer of the document',
              examples: ['service provider', 'intermediation service provider'],
            },
            audience: {
              type: 'string',
              title: 'The targeted audience',
              examples: ['end user', 'developer', 'data controllers (in the sense of GDPR)'],
            },
            object: {
              type: 'string',
              title: 'The object of the commitment',
              examples: ['end user’s service usage', 'end user’s personal data', 'public behaviour'],
            },
          },
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
