# Add new Terms Types

Every terms tracked in Open Terms Archive must have a type. Each service can have only one terms of a given type.

If you need to track some terms for a service, you might encounter cases when no matching type seems to be available in the list of supported terms types.

## Process

### Define the tryptich

Since each service provider can come up with its own choice of name for the same terms types, we first have to [define the tryptich](./README.md#how-to-define-the-tryptich) that describes unambiguously the type of these terms.

Once you have defined the tryptich for the terms you intend to track, double-check that it does not already exist in the [database](./termsTypes.json). If it does, use the associated type for tracking 🙂

### Open a discussion

If no existing type matches the terms you intend to track, check the open discussions in the category “New Type” in the [Discussions section](https://github.com/opentermsarchive/terms-types/discussions) of this repository.

If no discussion seems to match the type you are interested in adding, [start a new “New Type” discussion](https://github.com/OpenTermsArchive/terms-types/discussions/new?category=new-type) and call it “Add _your proposed terms type name_”.

### Define the type name

Propose a unique and descriptive name for the new terms type.

It should be the most commonly used and most internationally understandable for this type. It doesn't have to, and probably should not, match the service-provided name. Make use of tools such as Google Trends, Linguee and thesaurus to find the name that strikes the best balance between genericity, precision and multilingualism.

> For example, the “Imprint” type is [called this way](https://github.com/OpenTermsArchive/engine/issues/801) as a balance between the French “mentions légales”, the German “impressum”, and other considerations.

Ensure that this name (or any close one) is not already used in the [database](./termsTypes.json).

Note that service-specific types (such as “Twitter Privacy Policy”) are not allowed. Terms types aim at allowing comparisons across services and should thus be generic.

### Provide examples

Provide at least the terms you intend to track as example of the new terms type, with relevant information on its source and context:

- Include a direct link to the source document.
- Name the service provider and describe its service.
- Provider-given terms name: provide the title or name given to these terms by the service provider.

### Add references

Include any relevant [references](./README.md#references) that may help in understanding the purpose of this type. This could include legal definitions, discussions, or any other resource that provides context or background information.

### Build consensus

Publicise your suggestion across Open Terms Archive channels and engage the community. Throughout the discussion, the name and the tryptich should be challenged, taking into account international perspectives on phrasings and the variety of definitions across jurisdictions.

In order to ensure global relevance, your suggestion will only be considered for inclusion when there are at least three examples of such terms, each from different service providers. You are welcome to provide several examples on your own.

### Integration

Once:

- at least three examples from different service providers have been given;
- a consensus has been reached on the tryptich;
- a consensus has been reached on the name;
- at least 2 weeks have elapsed since the opening of the discussion, to ensure visibility throughout the community.

Then the Open Terms Archive Core Team will review and validate the suggestion, considering factors like uniqueness, clarity, and relevance. If validated, the discussion will be turned into a pull request for addition into the database.

## Governance considerations

Considering the decentralised and distributed usage of Open Terms Archive, it is very impactful to remove types.

The addition process is thus designed to add significant friction to the addition of new terms types, to ensure that only those that have demonstrated reusability and adoption are added to the database.

The process itself, while progressively formalised, still provides ample arbitrary control to the Core Team, in order to avoid loopholes that could lead to mass additions. As the process is more regularly used, this power will be progressively reduced to make the community more autonomous.
