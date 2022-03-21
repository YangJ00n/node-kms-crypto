# node-kms-crypto

Encrypting and Decrypting using AWS Key Management Service([KMS](https://aws.amazon.com/kms/)) in Node.js 🔐

It's not a package.

## Usage

- `kmsConfig.json` file look like this:

```json
{
  "config": {
    "accessKeyId": "EXAMPLEACCESSKEYID",
    "secretAccessKey": "2Av7bFRiJL89OvjpqqEXAMPLESECRETACCESSKEY",
    "region": "ap-northeast-2"
  },
  "keyId": "arn:aws:kms:ap-northeast-2:0123456789:key/2s7639dg-s4vc-37g2-0fj5-12345a67b910"
}
```

- Encrypt text or JSON object

```javascript
(async () => {
  const encrypted = await crypto.encrypt("hello");
  console.log(`🔐 Encrypted data: ${encrypted}`);
})();

// The output looks like "🔐 Encrypted data: AQICAHiFe8...PwSWpSMnSODFO"
```

- Decrypt encrypted text or JSON object

```javascript
(async () => {
  const decrypted = await crypto.decrypt("AQICAHiFe8...PwSWpSMnSODFO");
  console.log(`🔓 Decrypted data: ${decrypted}`);
})();

// The output looks like "🔓 Decrypted data: hello"
```
