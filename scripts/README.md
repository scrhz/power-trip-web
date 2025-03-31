# Contentful Utility Scripts

Simple utility scripts for working with Contentful CMS.

## merge-entries.sh

Migrates content entries from `develop` to `master` environment using the Contentful Management API.

### Prerequisites

- Node.js installed
- `contentful-merge` CLI tool installed globally: `npm install -g contentful-merge`
- `.env` file at project root with the following variables:
  - `CONTENTFUL_SPACE_ID` - Your Contentful space ID
  - `CONTENTFUL_ACCESS_TOKEN` - Access token that can access both develop and master environments
  - `CONTENTFUL_MANAGEMENT_TOKEN` - Management token with permissions to read/write content

### Usage

```bash
# Run from project root
./scripts/contentful-merge-entries.sh
```

The script will:
1. Create a changeset showing differences between develop and master
2. Display a summary of the changes
3. After confirmation, apply those changes to master

### Note

This script requires a Contentful access token that has access to both environments 