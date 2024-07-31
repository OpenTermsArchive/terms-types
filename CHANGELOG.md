# Changelog

All changes that impact users of this module are documented in this file, in the [Common Changelog](https://common-changelog.org) format with some additional specifications defined in the [CONTRIBUTING](./CONTRIBUTING.md) file. This codebase adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased [minor]

### Added

- Add Accessibility Statement ([discussions/36](https://github.com/OpenTermsArchive/terms-types/discussions/36))
- Add Editorial Policy ([discussions/35](https://github.com/OpenTermsArchive/terms-types/discussions/35))
- Add Anti-corruption Policy ([discussions/39](https://github.com/OpenTermsArchive/terms-types/discussions/39))
- Add Hyperlinks Policy ([discussions/43](https://github.com/OpenTermsArchive/terms-types/discussions/43))
- Add leading jurisdiction emoji for legal references

## 1.2.0 - 2024-07-15

_Full changeset and discussions: [#57](https://github.com/OpenTermsArchive/terms-types/pull/57)._

> Development of this release was supported by the [NGI0 Entrust Fund](https://nlnet.nl/entrust), a fund established by [NLnet](https://nlnet.nl/) with financial support from the European Commission's [Next Generation Internet](https://www.ngi.eu) programme, under the aegis of DG CNECT under grant agreement N°101069594. [Learn more](https://nlnet.nl/project/TOSDR-OTA/) on the NLNet website.

### Changed

- Use [@OpenTermsArchive/changelog-action](https://github.com/OpenTermsArchive/changelog-action/) in CI/CD
- Decrease package size to half

## 1.1.0 - 2023-10-25

### Added

- Detail the process to add a new terms type

## 1.0.0 - 2023-09-08

### Removed

- **Breaking:** Remove obsolete `Community Guidelines` subtypes; update your declaration by [combining all source documents](https://docs.opentermsarchive.org/contributing-terms/#terms-with-multiple-source-documents) of the `Community Guidelines` terms ([#13](https://github.com/OpenTermsArchive/terms-types/discussions/13))
- **Breaking:** Remove `Parent Organization Terms` and `Parent Organization Privacy Policy` types; for services that use only a parent organisation policy, update your declarations to track directly the parent document; for services that have both the simple terms type and their parent, update your declarations to track them as a [multiple source documents terms](https://docs.opentermsarchive.org/contributing-terms/#terms-with-multiple-source-documents) ([#22](https://github.com/OpenTermsArchive/terms-types/issues/22))
- **Breaking:** Remove `Ad Publishing Policy` type; update your declaration by using `Acceptable Use Policy` type instead ([OpenTermsArchive/engine/issues/272](https://github.com/OpenTermsArchive/engine/issues/272))

## 0.1.3 - 2023-09-07

### Changed

- Follow markdownlint rules when generating changelog

## 0.1.2 - 2023-09-07

### Changed

- Change URL to engine repository

## 0.1.1 - 2022-12-06

### Fixed

- Package publication visibility on NPM.

## 0.1.0 - 2022-12-06

### Added

- Publish package on NPM under name `@opentermsarchive/terms-types`.
- Add changelog.
