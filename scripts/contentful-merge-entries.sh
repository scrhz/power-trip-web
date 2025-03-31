#!/bin/bash

# merge-entries.sh
# Simple script to merge Contentful entries from develop to master environment
# Usage: ./scripts/merge-entries.sh

set -e # Exit on any error

# Load environment variables
if [ -f .env ]; then
  source .env
  echo "Loaded environment variables from .env"
else
  echo "Error: .env file not found! Please create it with required Contentful credentials."
  exit 1
fi

# Create a log file
LOG_FILE="contentful-merge-$(date +%Y%m%d%H%M%S).log"
CHANGESET_FILE="contentful-changeset-$(date +%Y%m%d%H%M%S).json"

echo "=== Contentful Content Migration Tool ==="
echo "This script will migrate entries from develop to master environment"
echo "Space ID: $CONTENTFUL_SPACE_ID"
echo ""
echo "WARNING: This operation will overwrite entries in the master environment."
echo "Make sure you have a backup or are certain about this operation."
echo ""
read -p "Do you want to continue? (y/n): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "Operation cancelled."
  exit 0
fi

# Step 1: Create changeset
echo "Creating changeset from develop to master..."

contentful-merge create \
  --space $CONTENTFUL_SPACE_ID \
  --source develop \
  --target master \
  --output-file $CHANGESET_FILE \
  --cda-token $CONTENTFUL_ACCESS_TOKEN 2>&1 | tee "$LOG_FILE"

# Check if changeset creation was successful
if [ ! -f "$CHANGESET_FILE" ]; then
  echo "Error: Failed to create changeset file. See $LOG_FILE for details."
  exit 1
fi

# Display summary of changes
echo "Changeset created successfully."
echo "Summary of changes:"
grep -o '"added": \[[^]]*\]' $CHANGESET_FILE | sed 's/"added": \[\(.*\)\]/Added entries: \1/' || echo "No added entries"
grep -o '"deleted": \[[^]]*\]' $CHANGESET_FILE | sed 's/"deleted": \[\(.*\)\]/Deleted entries: \1/' || echo "No deleted entries"
grep -o '"updated": \[[^]]*\]' $CHANGESET_FILE | sed 's/"updated": \[\(.*\)\]/Updated entries: \1/' || echo "No updated entries"

# Confirm before applying changes
echo ""
read -p "Do you want to apply these changes to master? (y/n): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "Operation cancelled."
  exit 0
fi

# Step 2: Apply changeset
echo "Applying changeset to master environment..."

contentful-merge apply \
  --space $CONTENTFUL_SPACE_ID \
  --environment master \
  --file $CHANGESET_FILE \
  --cma-token $CONTENTFUL_MANAGEMENT_TOKEN 2>&1 | tee -a "$LOG_FILE"

if [ $? -ne 0 ]; then
  echo "Error: Failed to apply changeset. See $LOG_FILE for details."
  exit 1
fi

echo "✓ Content successfully migrated from develop to master!"
echo "  Changeset: $CHANGESET_FILE"
echo "  Log: $LOG_FILE" 