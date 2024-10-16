First of all, thanks for taking the time to contribute! 🎉👍

## Table of Contents

- [Add new Terms Types](#add-new-terms-types)
  - [Open a discussion](#open-a-discussion)
  - [Integration process](#integration-process)
- [Governance considerations](#governance-considerations)
- [List a new contributor](#list-a-new-contributor)
- [Changelog](#changelog)
  - [Modified terms types or data structure](#modified-terms-types-or-data-structure)
  - [Changes that do not impact users](#changes-that-do-not-impact-users)

- - -

## Add new Terms Types

Every terms tracked in Open Terms Archive must have a type. Each service can have only one terms of a given type.

If you need to track some terms for a service, you might encounter cases when no matching type seems to be available in the list of supported terms types.

### Open a discussion

First of all, double-check that it does not already exist in the [database](./termsTypes.json). If it does, use the associated type for tracking. 

Then check the [open discussions](https://github.com/opentermsarchive/terms-types/discussions) in this repository to make sure that there is not already a discussion about the type you intend to add.

If no discussion seems to match the type you are interested in adding, [start a new discussion](https://github.com/OpenTermsArchive/terms-types/discussions/new?category=submitted).

### Integration process

New suggestions for terms types are categorized as `Submitted`. The Core Team reviews these suggestions and ensures that all the necessary information is gathered and clear and that at least 5 examples are provided, maximizing industry and jurisdiction diversity. When this is the case, the discussion is moved to the `Qualified` category and opened up to the community.

Once your suggestion is `Qualified`, build consensus by publicizing it across Open Terms Archive channels and engaging with the community. Throughout the discussion, the data should be critically examined, especially taking into account international perspectives on vocabulary and the variety of definitions across jurisdictions.

Once a consensus has been reached and at least 2 weeks have passed since the discussion was opened, to ensure visibility within the community, a pull request for the addition to the database can be submitted. To facilitate tracking and participation, each pull request should contain only one type addition and must link to the corresponding discussion.

The Core Team will then review the pull request, taking into account factors such as uniqueness, clarity, and relevance.

## Governance considerations

Considering the decentralised and distributed usage of Open Terms Archive, it is very impactful to remove types.

The addition process is thus designed to add significant friction to the addition of new terms types, to ensure that only those that have demonstrated reusability and adoption are added to the database.

The process itself, while progressively formalised, still provides ample arbitrary control to the Core Team, in order to avoid loopholes that could lead to mass additions. As the process is more regularly used, this power will be progressively reduced to make the community more autonomous.

## List a new contributor

We acknowledge the efforts of our contributors by listing them on our [website](https://opentermsarchive.org) and this is made possible by the use of the [All Contributors bot](https://allcontributors.org/docs/en/bot/overview).

All Contributors enables adding a contributor with a comment on an issue or pull request, without writing code. To do this, please use the [dedicated issue](https://github.com/OpenTermsArchive/terms-types/issues/31) on this repository.

Please read the following [contributing guide](https://github.com/OpenTermsArchive/opentermsarchive.org/blob/main/CONTRIBUTING.md#list-a-new-contributor-in-the-open-terms-archive-website).

## Changelog

When opening a pull request, it is required to fill in the changelog. It must be determined whether the changes made to the codebase impact users or not. These two cases are mutually exclusive and have different implications.

### Modified terms types or data structure

All changes to the codebase that impact users must be documented in the [`CHANGELOG.md`](./CHANGELOG.md) file, following the [Common Changelog](https://common-changelog.org) format with these additional specifications:

1. The `unreleased` section of [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) must be added in the changelog with the addition of a tag to specify which type of release should be published and to foster discussions about it inside pull requests. This tag should be one of the names mandated by SemVer, within brackets: `[patch]`, `[minor]` or `[major]`. For example: `### Unreleased [minor]`.<br>
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
