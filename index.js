"use strict";

import AWS from "aws-sdk";

export default class NodeKmsCrypto {
  constructor(options) {
    this.kms = new AWS.KMS(options.config);
    this.keyId = options.keyId;
    this.encoding = options.encoding || "base64";
  }

  async encrypt(inputData) {
    return this.kms
      .encrypt({
        KeyId: this.keyId,
        Plaintext: Buffer.from(JSON.stringify(inputData)),
      })
      .promise()
      .then((data) => data.CiphertextBlob.toString(this.encoding));
  }

  async decrypt(cipherText) {
    return this.kms
      .decrypt({
        CiphertextBlob: Buffer.from(cipherText, this.encoding),
      })
      .promise()
      .then((data) => JSON.parse(data.Plaintext.toString()));
  }
}
