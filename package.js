Package.describe({
  name: "tecsinapse:accounts-keycloak",
  summary: "Login service for Keycloak accounts - fork from hotello",
  version: "2.0.0",
  git: "https://github.com/hotello/meteor-accounts-keycloak.git"
});

Package.onUse(function(api) {
  api.versionsFrom('1.5');

  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('tecsinapse:keycloak-oauth@1.0.0');
  api.imply('tecsinapse:keycloak-oauth');

  api.addFiles("keycloak.js");
});
