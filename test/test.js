"use strict";

import NodeKmsCrypto from "../index";

const kmsConfig = require("../kmsConfig.json");

const crypto = new NodeKmsCrypto(kmsConfig);

// Encrypt
(async () => {
  const encrypted = await crypto.encrypt("hello");
  console.log(`🔐 Encrypted data: ${encrypted}`);
})();

// Decrypt
(async () => {
  const decrypted = await crypto.decrypt(
    "AQICAHiFe8cpopMQZGxEXSZsOTC1H0qHA5W73R6TzjIN/Vnq1AGAwiNMH+btBcN3pKjppCcMAAAAZTBjBgkqhkiG9w0BBwagVjBUAgEAME8GCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMHCCYLZmWRbyvqdwWAgEQgCLkRnmDkjAlvfqRuBu7hJdtYQHKbz/M3E39TjzCORsFr+of"
  );
  console.log(`🔓 Decrypted data: ${decrypted}`);
})();
