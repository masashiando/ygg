"use strict";
/*
 *
 * Copyright 2018-present NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const symbol_sdk_1 = require("symbol-sdk");
/* start block 01 */
// replace with recipient address
const rawAddress = 'TBONKW-COWBZY-ZB2I5J-D3LSDB-QVBYHB-757VN3-SKPP';
const recipientAddress = symbol_sdk_1.Address.createFromRawAddress(rawAddress);
// replace with network type
const networkType = symbol_sdk_1.NetworkType.TEST_NET;
// replace with symbol.xym id
const networkCurrencyMosaicId = new symbol_sdk_1.MosaicId('51A99028058245A8');
// replace with network currency divisibility
const networkCurrencyDivisibility = 6;
const transferTransaction = symbol_sdk_1.TransferTransaction.create(symbol_sdk_1.Deadline.create(), recipientAddress, [new symbol_sdk_1.Mosaic(networkCurrencyMosaicId, symbol_sdk_1.UInt64.fromUint(10 * Math.pow(10, networkCurrencyDivisibility)))], symbol_sdk_1.PlainMessage.create('This is a test message'), networkType, symbol_sdk_1.UInt64.fromUint(2000000));
/* end block 01 */
/* start block 02 */
// replace with sender private key
const privateKey = '1111111111111111111111111111111111111111111111111111111111111111';
const account = symbol_sdk_1.Account.createFromPrivateKey(privateKey, networkType);
// replace with meta.generationHash (nodeUrl + '/block/1')
const networkGenerationHash = '44D2225B8932C9A96DCB13508CBCDFFA9A9663BFBA2354FEEC8FCFCB7E19846C';
const signedTransaction = account.sign(transferTransaction, networkGenerationHash);
/* end block 02 */
/* start block 03 */
// replace with node endpoint
const nodeUrl = 'http://api-2-01.us-west-1.symboldev.network:3000';
const repositoryFactory = new symbol_sdk_1.RepositoryFactoryHttp(nodeUrl);
const transactionHttp = repositoryFactory.createTransactionRepository();
transactionHttp
    .announce(signedTransaction)
    .subscribe((x) => console.log(x), (err) => console.error(err));
/* end block 03 */
