-- Lead-qualification widget: leads table.
-- Applied automatically at runtime by lib/leadsRepo.ts (CREATE TABLE IF NOT EXISTS),
-- but kept here as the canonical reference schema. Safe to run manually:
--   mysql -u <user> -p <database> < scripts/leads-schema.sql

CREATE TABLE IF NOT EXISTS leads (
  id                 BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  division           VARCHAR(64)  NOT NULL,
  sub_service        VARCHAR(64)  NOT NULL,
  budget             VARCHAR(64)  NOT NULL,
  timeline           VARCHAR(64)  NOT NULL,
  name               VARCHAR(255) NOT NULL,
  email              VARCHAR(255) NOT NULL,
  phone              VARCHAR(64)  NULL,
  matched_specialist VARCHAR(255) NOT NULL,
  matched_division   VARCHAR(64)  NOT NULL,
  source             VARCHAR(64)  NOT NULL DEFAULT 'lead-widget',
  created_at         TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_leads_created_at (created_at),
  KEY idx_leads_division (division)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
