/*
 * The code in this file originated from
 * @see https://github.com/decentralized-identity/sidetree
 * For the list of changes that was made to the original code
 * @see https://github.com/transmute-industries/sidetree.js/blob/master/reference-implementation-changes.md
 *
 * Copyright 2020 - Transmute Industries Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const pako = require('pako');

/**
 * Encapsulates functionality to compress/decompress data.
 */
export default class Compressor {
  /**
   * Compresses the data in gzip and return it as buffer.
   * @param inputAsBuffer The input string to be compressed.
   */
  public static async compress(inputAsBuffer: Buffer): Promise<Buffer> {
    const result = pako.deflate(Buffer.from(inputAsBuffer));
    return Buffer.from(result);
  }

  /**
   * Decompresses the input and returns it as buffer.
   * @param inputAsBuffer The gzip compressed data.
   */
  public static async decompress(inputAsBuffer: Buffer): Promise<Buffer> {
    const result = pako.inflate(inputAsBuffer);
    return Buffer.from(result);
  }
}
