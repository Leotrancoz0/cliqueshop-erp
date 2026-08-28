# Architecture and public limits

## Purpose

CliqueShop ERP turns financial, commercial, logistics, and operational events into contextual decisions. This document describes architectural responsibilities without reproducing the proprietary implementation.

```text
Authorized sources
        ↓
Integration and normalization
        ↓
Domain rules and reconciliation
        ↓
Transactional persistence
        ↓
Workspace, reports, alerts, and routines
```

## Responsibility layers

### Authorized sources

Events may originate in marketplace platforms, financial documents, and operational actions. Credentials and platform configuration remain in the private environment.

### Integration and normalization

Different sources are converted into domain events. Material synchronizations use repetition controls, execution trails, and explicit failure handling.

### Domain rules

The domain groups finance, inventory, sales, and post-sale responsibilities. It distinguishes recorded events, derived calculations, and decisions that still require human evidence.

### Persistence

The modern product uses PostgreSQL for relational persistence. Table structures, migrations, indexes, and deployment details are not exposed in this portfolio.

### User delivery

An authenticated workspace presents indicators, decision queues, reports, and contextual actions. Alerts and scheduled processes extend the same domain rather than becoming disconnected tools.

## Communicable architectural guarantees

- credentials remain on the server;
- relevant authorization is enforced by the API as well as the interface;
- material synchronizations use idempotency controls;
- financial events preserve cash and accrual perspectives;
- inventory movement passes through reconciliation;
- uncertain post-sale cases remain under human review;
- alerts prevent unintended repetition;
- every public demo fixture is synthetic from the start.

These statements describe design objectives and covered scenarios. They are not an external certification of security, accounting, or availability.

## High-level stack

| Layer | Public technology |
| --- | --- |
| Application | Python and Django |
| Persistence | PostgreSQL |
| Interface | HTML, JavaScript, and CSS |
| Runtime | containers and scheduled processes |
| Integrations | platform APIs with private credentials |

## Portfolio boundary

The public directory is an independent project. It imports no modules, fixtures, templates, assets, or configuration from the private repository.

The public architecture excludes endpoints, production domains, network topology, service names, backups, API payloads, deduplication keys, complete fee and cost rules, recommendation prompts, thresholds, and the internal permission matrix.

## Publication gate

1. Verify the extension and type of every file.
2. Search for personal data, secrets, IPs, internal paths, and production domains.
3. Block databases, dumps, environment files, operational documents, logs, and archives.
4. Confirm that the mock uses no network, cookies, or local storage.
5. Exercise all six views on desktop, tablet, and mobile widths.
6. Confirm authorization for the displayed name, mark, and visual assets.
7. Publish only after explicit human approval.
