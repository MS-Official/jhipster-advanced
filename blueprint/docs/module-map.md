# Starter Maven / Gradle module map

## Shared Spring libraries
- starter-security
- starter-otp
- starter-notification
- starter-observability
- starter-multitenancy
- starter-audit

## Apps
- starterMonolith
- starterGateway
- identityService
- notificationService
- adminService

## Suggested Maven multi-module layout
- platform-bom
- shared-libraries/*
- apps/*

## Suggested Gradle composite layout
- version catalog in `platform-bom/gradle/libs.versions.toml`
- each starter imports the same version catalog
