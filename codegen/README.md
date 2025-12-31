# Codegen

**Automatic type and method generator (and docs with test for them) for Telegram Bot API**

## Overview

Codegen is part of the Surfgram SDK that automatically generates fully typed and documented TypeScript types and methods by parsing the official telegram bot API documentation

## Automation

The codegen runs automatically via GitHub Actions every day at **8:00 AM UTC** ensuring the SDK always reflects the latest telegram bot API changes

## Integration

This module is integrated into the Surfgram SDK build process. Generated types and methods are available in the main package exports
