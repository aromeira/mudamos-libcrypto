"use strict";function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function _inherits(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function _inherits(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function _inherits(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(r,t,o){return t&&e(r.prototype,t),o&&e(r,o),r}}(),SeedLib=require("./seed"),WalletLib=require("./wallet"),LibCripto=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"createSeed",value:function(e,r){return SeedLib.generateRandomSeed(e,r)}},{key:"validateSeed",value:function(e){return SeedLib.validateSeed(e)}},{key:"validateSeedWithLang",value:function(e,r){return SeedLib.validateSeedWithLang(e,r)}},{key:"createWallet",value:function(e){return WalletLib.createWallet(e)}},{key:"validateWallet",value:function(e,r){return WalletLib.validateWallet(e,r)}},{key:"signMessage",value:function(e,r){return WalletLib.signMessage(e,r)}},{key:"verifyMessage",value:function(e,r,t){return WalletLib.verifyMessage(e,r,t)}}]),e}();module.exports=LibCripto;var _createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(r,t,o){return t&&e(r.prototype,t),o&&e(r,o),r}}(),listErros=require("./errors/errors-list"),bitcore=require("bitcore-lib"),LibCriptoError=require("./errors/lib-cripto-error"),Random=bitcore.crypto.Random,Hash=bitcore.crypto.Hash,Mnemonic=require("bitcore-mnemonic");module.exports=function(){function e(e,r){var t=Buffer.concat([e,r]);if(t.length!==e.length+r.length)throw new LibCriptoError(listErros.GenerateRandomSeedError);var o=Hash.sha256(t);return o}var r=function(){function r(){_classCallCheck(this,r),e.bind(this)}return _createClass(r,null,[{key:"generateRandomSeed",value:function(r,t){var o="",n=r||"PORTUGUESE";if(void 0===t)o=new Mnemonic(Mnemonic.Words[n]);else{if("string"!=typeof t)throw new LibCriptoError(listErros.ExtraEntropyError);var i=new Buffer(t),a=Random.getRandomBuffer(32),s=e(a,i).slice(0,16);o=new Mnemonic(s,Mnemonic.Words[n])}return o.toString()}},{key:"validateSeedWithLang",value:function(e,r){var t=e||"PORTUGUESE";return Mnemonic.isValid(r,Mnemonic.Words[t])}},{key:"validateSeed",value:function(e){return Mnemonic.isValid(e)}}]),r}();return r}();var _createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(r,t,o){return t&&e(r.prototype,t),o&&e(r,o),r}}(),listErros=require("./errors/errors-list"),bitcore=require("bitcore-lib"),LibCriptoError=require("./errors/lib-cripto-error"),Message=require("bitcore-message"),Hash=bitcore.crypto.Hash,WalletLib=require("./model/wallet-message");module.exports=function(){function e(e){if(!e)throw new LibCriptoError(listErros.SeedEmptyError);var r=new Buffer(e),t=bitcore.crypto.Hash.sha256(r),o=bitcore.crypto.BN.fromBuffer(t);return bitcore.PrivateKey(o).toString()}var r=function(){function r(){_classCallCheck(this,r)}return _createClass(r,null,[{key:"createWallet",value:function(e){if(!e)throw new LibCriptoError(listErros.SeedEmptyError);var r=new Buffer(e),t=bitcore.crypto.Hash.sha256(r),o=bitcore.crypto.BN.fromBuffer(t),n=new WalletLib(bitcore.PrivateKey(o).toAddress().toString());return n}},{key:"signMessage",value:function(r,t){if(!r)throw new LibCriptoError(listErros.SeedEmptyError);if(!t)throw new LibCriptoError(listErros.MessageEmptyError);var o=bitcore.PrivateKey.fromWIF(e(r)),n=Message(t).sign(o);return n}},{key:"verifyMessage",value:function(e,r,t){if(!e)throw new LibCriptoError(listErros.PublicKeyEmptyError);if(!r)throw new LibCriptoError(listErros.MessageEmptyError);if(!t)throw new LibCriptoError(listErros.SignatureEmptyError);var o=Message(r).verify(e,t);return o}},{key:"validateWallet",value:function(e,t){var o=r.createWallet(e).publicKey,n=o==t;return n}}]),r}();return r}();var _Errors,Errors=(_Errors={WalletError:"Error generating Wallet",GenerateRandomSeedError:"Logic error! Concatenation of entropy sources failed",SeedEmptyError:"Seed can not be empty",SeedLanguageError:"Language can not be empty",ExtraEntropyError:"ExtraEntropy is set but not a string",MessageEmptyError:"Message can not be empty",PublicKeyEmptyError:"Public Key can not be empty"},_defineProperty(_Errors,"MessageEmptyError","Message can not be empty"),_defineProperty(_Errors,"SignatureEmptyError","Signature can not be empty"),_Errors);module.exports=Errors;var ExtendableError=function(e){function r(e){_classCallCheck(this,r);var t=_possibleConstructorReturn(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.name=t.constructor.name,t.message=e,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(t,t.constructor):t.stack=new Error(e).stack,t}return _inherits(r,e),r}(Error),LibCriptoError=function(e){function r(e,t){_classCallCheck(this,r);var o=_possibleConstructorReturn(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return o.success=!1,o}return _inherits(r,e),r}(ExtendableError);module.exports=LibCriptoError;var BaseMessage=require("./base/base-message.js"),ErrorLibCrypto=function(e){function r(e,t){_classCallCheck(this,r);var o=_possibleConstructorReturn(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,"ok",!0));return o.data,o}return _inherits(r,e),r}(BaseMessage);module.exports=ErrorLibCrypto;var BaseMessage=require("./base/base-message.js"),Wallet=function(e){function r(e){_classCallCheck(this,r);var t=_possibleConstructorReturn(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,"ok",!0));return t.publicKey=e,t}return _inherits(r,e),r}(BaseMessage);module.exports=Wallet;var BaseMessage=function e(r,t){_classCallCheck(this,e),this.message=r,this.success=t};module.exports=BaseMessage;