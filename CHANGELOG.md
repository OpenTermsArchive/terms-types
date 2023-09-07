# Changelog

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) and the format is based on [Common Changelog](https://common-changelog.org).\
Unlike Common Changelog, the `unreleased` section of [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) is preserved with the addition of a tag to specify which type of release should be published and to foster discussions about it inside pull requests. This tag should be one of the names mandated by SemVer, within brackets: `[patch]`, `[minor]` or `[major]`. For example: `## Unreleased [minor]`.

## Unreleased [major]

### Changed

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
