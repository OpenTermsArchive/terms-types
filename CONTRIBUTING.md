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

References will then be listed in the type definition, with their URL and a title describing the content and source.

### Build consensus

Publicise your suggestion across Open Terms Archive channels and engage the community. Throughout the discussion, the name and the tryptich should be challenged, taking into account international perspectives on phrasings and the variety of definitions across jurisdictions.

In order to ensure global relevance, your suggestion will only be considered for inclusion when there are at least three examples of such terms, each from different service providers. You are welcome to provide several examples on your own.

### Integration

Once:

- at least three examples from different service providers have been given;
- a consensus has been reached on the tryptich;
- a consensus has been reached on the name;
- at least 2 weeks have elapsed since the opening of the discussion, to ensure visibility throughout the community.

Then the Open Terms Archive Core Team will review and validate the suggestion, considering factors like uniqueness, clarity, and relevance. If validated, the discussion will be turned into a pull request for addition into the database. To ease tracking and participation, each pull request will contain only one type addition, and will link to the discussion.

## Governance considerations

Considering the decentralised and distributed usage of Open Terms Archive, it is very impactful to remove types.

The addition process is thus designed to add significant friction to the addition of new terms types, to ensure that only those that have demonstrated reusability and adoption are added to the database.

The process itself, while progressively formalised, still provides ample arbitrary control to the Core Team, in order to avoid loopholes that could lead to mass additions. As the process is more regularly used, this power will be progressively reduced to make the community more autonomous.

## Contributors list

We acknowledge the efforts of our contributors by listing them on our [website](https://opentermsarchive.org) and this is made possible by the use of the [All Contributors bot](https://allcontributors.org/docs/en/bot/overview).

All Contributors enables adding a contributor with a comment on an issue or pull request, without writing code. To do this, please use the [dedicated issue](https://github.com/OpenTermsArchive/terms-types/issues/31) on this repository.

Please read the following [contributing guide](https://github.com/OpenTermsArchive/opentermsarchive.org/blob/main/CONTRIBUTING.md#list-a-new-contributor-in-the-open-terms-archive-website).

## Changelog

When opening a pull request, it is required to fill in the changelog. It must be determined whether the changes made to the codebase impact users or not. These two cases are mutually exclusive and have different implications.

### Modified terms types or data structure

All changes to the codebase that impact users must be documented in the [`CHANGELOG.md`](./CHANGELOG.md) file, following the [Common Changelog](https://common-changelog.org) format with these additional specifications:

1. The `unreleased` section of [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) must be added in the changelog with the addition of a tag to specify which type of release should be published and to foster discussions about it inside pull requests. This tag should be one of the names mandated by SemVer, within brackets: `[patch]`, `[minor]` or `[major]`. For example: `## Unreleased [minor]`.<br>
Changes that require an adjustment in the infrastructure, they are considered as a breaking change in order to notify Collection operators about the need to update their [deployment](https://github.com/OpenTermsArchive/deployment/blob/main/CHANGELOG.md) dependency accordingly.

2. Each listed change must provide an actionable way to adapt the user’s codebase, either directly in the changelog or through instructions or links.

3. Changes should be a single sentence without punctuation, following Common Changelog examples.

4. Since each release is produced automatically from a single pull request, the [notice](https://common-changelog.org/#23-notice) links to the source pull request rather than [references](https://common-changelog.org/#242-references), which would always reference the same pull request. References can link to relevant parts of an RFC, decision record, or diff. **This notice is automatically generated by the CI during the release process and should not be added manually.**

5. The [notice](https://common-changelog.org/#23-notice) is also used to present sponsor information and it is required. Since the development of this project is funded by different actors, and following discussions with sponsors, financial contributions are acknowledged in the changelog itself. The format of the notice thus diverges from the Common Changelog specification in that it is not “a single-sentence paragraph”. Sponsor information is in quote format, starts with “Development of this release was supported by <funding_from>”, and provides the name and link to the sponsor, as well as information on the specific funding instrument, as specified by the sponsor itself or as required by law. A short message from the sponsor might also be added, as long as it abides by the community’s [Code of Conduct](./CODE_OF_CONDUCT.md) and aligns with the project’s goals. For volunteer contributions, the sentence should start with: “Development of this release was made on a volunteer basis by <contributor_name>”

### Changes that do not impact users

For non-functional changes (e.g., documentation, CI workflows) that do not impact users and should not trigger a release, it must be clearly indicated that documenting these changes in the changelog is unnecessary by adding the following content in its entirety to the changelog:

```markdown
## Unreleased [no-release]

_Modifications made in this changeset do not add, remove or alter any behavior, dependency, API or functionality of the software. They only change non-functional parts of the repository, such as the README file or CI workflows._
```

This content will be automatically deleted by the CI after merging.
