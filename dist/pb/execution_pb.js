/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var get_with_proof_pb = require('./get_with_proof_pb.js');
goog.object.extend(proto, get_with_proof_pb);
var ledger_info_pb = require('./ledger_info_pb.js');
goog.object.extend(proto, ledger_info_pb);
var transaction_pb = require('./transaction_pb.js');
goog.object.extend(proto, transaction_pb);
var validator_set_pb = require('./validator_set_pb.js');
goog.object.extend(proto, validator_set_pb);
var vm_errors_pb = require('./vm_errors_pb.js');
goog.object.extend(proto, vm_errors_pb);
goog.exportSymbol('proto.execution.CommitBlockRequest', null, global);
goog.exportSymbol('proto.execution.CommitBlockResponse', null, global);
goog.exportSymbol('proto.execution.CommitBlockStatus', null, global);
goog.exportSymbol('proto.execution.ExecuteBlockRequest', null, global);
goog.exportSymbol('proto.execution.ExecuteBlockResponse', null, global);
goog.exportSymbol('proto.execution.ExecuteChunkRequest', null, global);
goog.exportSymbol('proto.execution.ExecuteChunkResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.execution.ExecuteBlockRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.execution.ExecuteBlockRequest.repeatedFields_, null);
};
goog.inherits(proto.execution.ExecuteBlockRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.execution.ExecuteBlockRequest.displayName = 'proto.execution.ExecuteBlockRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.execution.ExecuteBlockRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.execution.ExecuteBlockRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.execution.ExecuteBlockRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.execution.ExecuteBlockRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.execution.ExecuteBlockRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    transaction_pb.SignedTransaction.toObject, includeInstance),
    parentBlockId: msg.getParentBlockId_asB64(),
    blockId: msg.getBlockId_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.execution.ExecuteBlockRequest}
 */
proto.execution.ExecuteBlockRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.execution.ExecuteBlockRequest;
  return proto.execution.ExecuteBlockRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.execution.ExecuteBlockRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.execution.ExecuteBlockRequest}
 */
proto.execution.ExecuteBlockRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new transaction_pb.SignedTransaction;
      reader.readMessage(value,transaction_pb.SignedTransaction.deserializeBinaryFromReader);
      msg.addTransactions(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setParentBlockId(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBlockId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.execution.ExecuteBlockRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.execution.ExecuteBlockRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.execution.ExecuteBlockRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.execution.ExecuteBlockRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      transaction_pb.SignedTransaction.serializeBinaryToWriter
    );
  }
  f = message.getParentBlockId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getBlockId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * repeated types.SignedTransaction transactions = 1;
 * @return {!Array<!proto.types.SignedTransaction>}
 */
proto.execution.ExecuteBlockRequest.prototype.getTransactionsList = function() {
  return /** @type{!Array<!proto.types.SignedTransaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, transaction_pb.SignedTransaction, 1));
};


/** @param {!Array<!proto.types.SignedTransaction>} value */
proto.execution.ExecuteBlockRequest.prototype.setTransactionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.types.SignedTransaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.types.SignedTransaction}
 */
proto.execution.ExecuteBlockRequest.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.types.SignedTransaction, opt_index);
};


proto.execution.ExecuteBlockRequest.prototype.clearTransactionsList = function() {
  this.setTransactionsList([]);
};


/**
 * optional bytes parent_block_id = 2;
 * @return {!(string|Uint8Array)}
 */
proto.execution.ExecuteBlockRequest.prototype.getParentBlockId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes parent_block_id = 2;
 * This is a type-conversion wrapper around `getParentBlockId()`
 * @return {string}
 */
proto.execution.ExecuteBlockRequest.prototype.getParentBlockId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getParentBlockId()));
};


/**
 * optional bytes parent_block_id = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getParentBlockId()`
 * @return {!Uint8Array}
 */
proto.execution.ExecuteBlockRequest.prototype.getParentBlockId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getParentBlockId()));
};


/** @param {!(string|Uint8Array)} value */
proto.execution.ExecuteBlockRequest.prototype.setParentBlockId = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes block_id = 3;
 * @return {!(string|Uint8Array)}
 */
proto.execution.ExecuteBlockRequest.prototype.getBlockId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes block_id = 3;
 * This is a type-conversion wrapper around `getBlockId()`
 * @return {string}
 */
proto.execution.ExecuteBlockRequest.prototype.getBlockId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBlockId()));
};


/**
 * optional bytes block_id = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlockId()`
 * @return {!Uint8Array}
 */
proto.execution.ExecuteBlockRequest.prototype.getBlockId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBlockId()));
};


/** @param {!(string|Uint8Array)} value */
proto.execution.ExecuteBlockRequest.prototype.setBlockId = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.execution.ExecuteBlockResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.execution.ExecuteBlockResponse.repeatedFields_, null);
};
goog.inherits(proto.execution.ExecuteBlockResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.execution.ExecuteBlockResponse.displayName = 'proto.execution.ExecuteBlockResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.execution.ExecuteBlockResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.execution.ExecuteBlockResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.execution.ExecuteBlockResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.execution.ExecuteBlockResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.execution.ExecuteBlockResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rootHash: msg.getRootHash_asB64(),
    statusList: jspb.Message.toObjectList(msg.getStatusList(),
    vm_errors_pb.VMStatus.toObject, includeInstance),
    version: jspb.Message.getFieldWithDefault(msg, 3, 0),
    validators: (f = msg.getValidators()) && validator_set_pb.ValidatorSet.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.execution.ExecuteBlockResponse}
 */
proto.execution.ExecuteBlockResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.execution.ExecuteBlockResponse;
  return proto.execution.ExecuteBlockResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.execution.ExecuteBlockResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.execution.ExecuteBlockResponse}
 */
proto.execution.ExecuteBlockResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRootHash(value);
      break;
    case 2:
      var value = new vm_errors_pb.VMStatus;
      reader.readMessage(value,vm_errors_pb.VMStatus.deserializeBinaryFromReader);
      msg.addStatus(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVersion(value);
      break;
    case 4:
      var value = new validator_set_pb.ValidatorSet;
      reader.readMessage(value,validator_set_pb.ValidatorSet.deserializeBinaryFromReader);
      msg.setValidators(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.execution.ExecuteBlockResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.execution.ExecuteBlockResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.execution.ExecuteBlockResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.execution.ExecuteBlockResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRootHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getStatusList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      vm_errors_pb.VMStatus.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getValidators();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      validator_set_pb.ValidatorSet.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes root_hash = 1;
 * @return {!(string|Uint8Array)}
 */
proto.execution.ExecuteBlockResponse.prototype.getRootHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes root_hash = 1;
 * This is a type-conversion wrapper around `getRootHash()`
 * @return {string}
 */
proto.execution.ExecuteBlockResponse.prototype.getRootHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRootHash()));
};


/**
 * optional bytes root_hash = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRootHash()`
 * @return {!Uint8Array}
 */
proto.execution.ExecuteBlockResponse.prototype.getRootHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRootHash()));
};


/** @param {!(string|Uint8Array)} value */
proto.execution.ExecuteBlockResponse.prototype.setRootHash = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated types.VMStatus status = 2;
 * @return {!Array<!proto.types.VMStatus>}
 */
proto.execution.ExecuteBlockResponse.prototype.getStatusList = function() {
  return /** @type{!Array<!proto.types.VMStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, vm_errors_pb.VMStatus, 2));
};


/** @param {!Array<!proto.types.VMStatus>} value */
proto.execution.ExecuteBlockResponse.prototype.setStatusList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.types.VMStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.types.VMStatus}
 */
proto.execution.ExecuteBlockResponse.prototype.addStatus = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.types.VMStatus, opt_index);
};


proto.execution.ExecuteBlockResponse.prototype.clearStatusList = function() {
  this.setStatusList([]);
};


/**
 * optional uint64 version = 3;
 * @return {number}
 */
proto.execution.ExecuteBlockResponse.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.execution.ExecuteBlockResponse.prototype.setVersion = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional types.ValidatorSet validators = 4;
 * @return {?proto.types.ValidatorSet}
 */
proto.execution.ExecuteBlockResponse.prototype.getValidators = function() {
  return /** @type{?proto.types.ValidatorSet} */ (
    jspb.Message.getWrapperField(this, validator_set_pb.ValidatorSet, 4));
};


/** @param {?proto.types.ValidatorSet|undefined} value */
proto.execution.ExecuteBlockResponse.prototype.setValidators = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.execution.ExecuteBlockResponse.prototype.clearValidators = function() {
  this.setValidators(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.execution.ExecuteBlockResponse.prototype.hasValidators = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.execution.CommitBlockRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.execution.CommitBlockRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.execution.CommitBlockRequest.displayName = 'proto.execution.CommitBlockRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.execution.CommitBlockRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.execution.CommitBlockRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.execution.CommitBlockRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.execution.CommitBlockRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ledgerInfoWithSigs: (f = msg.getLedgerInfoWithSigs()) && ledger_info_pb.LedgerInfoWithSignatures.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.execution.CommitBlockRequest}
 */
proto.execution.CommitBlockRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.execution.CommitBlockRequest;
  return proto.execution.CommitBlockRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.execution.CommitBlockRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.execution.CommitBlockRequest}
 */
proto.execution.CommitBlockRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ledger_info_pb.LedgerInfoWithSignatures;
      reader.readMessage(value,ledger_info_pb.LedgerInfoWithSignatures.deserializeBinaryFromReader);
      msg.setLedgerInfoWithSigs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.execution.CommitBlockRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.execution.CommitBlockRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.execution.CommitBlockRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.execution.CommitBlockRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLedgerInfoWithSigs();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ledger_info_pb.LedgerInfoWithSignatures.serializeBinaryToWriter
    );
  }
};


/**
 * optional types.LedgerInfoWithSignatures ledger_info_with_sigs = 1;
 * @return {?proto.types.LedgerInfoWithSignatures}
 */
proto.execution.CommitBlockRequest.prototype.getLedgerInfoWithSigs = function() {
  return /** @type{?proto.types.LedgerInfoWithSignatures} */ (
    jspb.Message.getWrapperField(this, ledger_info_pb.LedgerInfoWithSignatures, 1));
};


/** @param {?proto.types.LedgerInfoWithSignatures|undefined} value */
proto.execution.CommitBlockRequest.prototype.setLedgerInfoWithSigs = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.execution.CommitBlockRequest.prototype.clearLedgerInfoWithSigs = function() {
  this.setLedgerInfoWithSigs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.execution.CommitBlockRequest.prototype.hasLedgerInfoWithSigs = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.execution.CommitBlockResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.execution.CommitBlockResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.execution.CommitBlockResponse.displayName = 'proto.execution.CommitBlockResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.execution.CommitBlockResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.execution.CommitBlockResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.execution.CommitBlockResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.execution.CommitBlockResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.execution.CommitBlockResponse}
 */
proto.execution.CommitBlockResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.execution.CommitBlockResponse;
  return proto.execution.CommitBlockResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.execution.CommitBlockResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.execution.CommitBlockResponse}
 */
proto.execution.CommitBlockResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.execution.CommitBlockStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.execution.CommitBlockResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.execution.CommitBlockResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.execution.CommitBlockResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.execution.CommitBlockResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional CommitBlockStatus status = 1;
 * @return {!proto.execution.CommitBlockStatus}
 */
proto.execution.CommitBlockResponse.prototype.getStatus = function() {
  return /** @type {!proto.execution.CommitBlockStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.execution.CommitBlockStatus} value */
proto.execution.CommitBlockResponse.prototype.setStatus = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.execution.ExecuteChunkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.execution.ExecuteChunkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.execution.ExecuteChunkRequest.displayName = 'proto.execution.ExecuteChunkRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.execution.ExecuteChunkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.execution.ExecuteChunkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.execution.ExecuteChunkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.execution.ExecuteChunkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    txnListWithProof: (f = msg.getTxnListWithProof()) && transaction_pb.TransactionListWithProof.toObject(includeInstance, f),
    ledgerInfoWithSigs: (f = msg.getLedgerInfoWithSigs()) && ledger_info_pb.LedgerInfoWithSignatures.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.execution.ExecuteChunkRequest}
 */
proto.execution.ExecuteChunkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.execution.ExecuteChunkRequest;
  return proto.execution.ExecuteChunkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.execution.ExecuteChunkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.execution.ExecuteChunkRequest}
 */
proto.execution.ExecuteChunkRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new transaction_pb.TransactionListWithProof;
      reader.readMessage(value,transaction_pb.TransactionListWithProof.deserializeBinaryFromReader);
      msg.setTxnListWithProof(value);
      break;
    case 2:
      var value = new ledger_info_pb.LedgerInfoWithSignatures;
      reader.readMessage(value,ledger_info_pb.LedgerInfoWithSignatures.deserializeBinaryFromReader);
      msg.setLedgerInfoWithSigs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.execution.ExecuteChunkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.execution.ExecuteChunkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.execution.ExecuteChunkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.execution.ExecuteChunkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxnListWithProof();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      transaction_pb.TransactionListWithProof.serializeBinaryToWriter
    );
  }
  f = message.getLedgerInfoWithSigs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      ledger_info_pb.LedgerInfoWithSignatures.serializeBinaryToWriter
    );
  }
};


/**
 * optional types.TransactionListWithProof txn_list_with_proof = 1;
 * @return {?proto.types.TransactionListWithProof}
 */
proto.execution.ExecuteChunkRequest.prototype.getTxnListWithProof = function() {
  return /** @type{?proto.types.TransactionListWithProof} */ (
    jspb.Message.getWrapperField(this, transaction_pb.TransactionListWithProof, 1));
};


/** @param {?proto.types.TransactionListWithProof|undefined} value */
proto.execution.ExecuteChunkRequest.prototype.setTxnListWithProof = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.execution.ExecuteChunkRequest.prototype.clearTxnListWithProof = function() {
  this.setTxnListWithProof(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.execution.ExecuteChunkRequest.prototype.hasTxnListWithProof = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional types.LedgerInfoWithSignatures ledger_info_with_sigs = 2;
 * @return {?proto.types.LedgerInfoWithSignatures}
 */
proto.execution.ExecuteChunkRequest.prototype.getLedgerInfoWithSigs = function() {
  return /** @type{?proto.types.LedgerInfoWithSignatures} */ (
    jspb.Message.getWrapperField(this, ledger_info_pb.LedgerInfoWithSignatures, 2));
};


/** @param {?proto.types.LedgerInfoWithSignatures|undefined} value */
proto.execution.ExecuteChunkRequest.prototype.setLedgerInfoWithSigs = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.execution.ExecuteChunkRequest.prototype.clearLedgerInfoWithSigs = function() {
  this.setLedgerInfoWithSigs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.execution.ExecuteChunkRequest.prototype.hasLedgerInfoWithSigs = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.execution.ExecuteChunkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.execution.ExecuteChunkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.execution.ExecuteChunkResponse.displayName = 'proto.execution.ExecuteChunkResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.execution.ExecuteChunkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.execution.ExecuteChunkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.execution.ExecuteChunkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.execution.ExecuteChunkResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.execution.ExecuteChunkResponse}
 */
proto.execution.ExecuteChunkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.execution.ExecuteChunkResponse;
  return proto.execution.ExecuteChunkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.execution.ExecuteChunkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.execution.ExecuteChunkResponse}
 */
proto.execution.ExecuteChunkResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.execution.ExecuteChunkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.execution.ExecuteChunkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.execution.ExecuteChunkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.execution.ExecuteChunkResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.execution.CommitBlockStatus = {
  SUCCEEDED: 0,
  FAILED: 1
};

goog.object.extend(exports, proto.execution);