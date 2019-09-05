// package: types
// file: transaction.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as access_path_pb from "./access_path_pb";
import * as events_pb from "./events_pb";
import * as proof_pb from "./proof_pb";
import * as transaction_info_pb from "./transaction_info_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class TransactionArgument extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionArgument.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionArgument): TransactionArgument.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionArgument, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionArgument;
    static deserializeBinaryFromReader(message: TransactionArgument, reader: jspb.BinaryReader): TransactionArgument;
}

export namespace TransactionArgument {
    export type AsObject = {
    }

    export enum ArgType {
    U64 = 0,
    ADDRESS = 1,
    STRING = 2,
    BYTEARRAY = 3,
    }

}

export class SignedTransaction extends jspb.Message { 
    getSignedTxn(): Uint8Array | string;
    getSignedTxn_asU8(): Uint8Array;
    getSignedTxn_asB64(): string;
    setSignedTxn(value: Uint8Array | string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignedTransaction.AsObject;
    static toObject(includeInstance: boolean, msg: SignedTransaction): SignedTransaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignedTransaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignedTransaction;
    static deserializeBinaryFromReader(message: SignedTransaction, reader: jspb.BinaryReader): SignedTransaction;
}

export namespace SignedTransaction {
    export type AsObject = {
        signedTxn: Uint8Array | string,
    }
}

export class SignedTransactionWithProof extends jspb.Message { 
    getVersion(): number;
    setVersion(value: number): void;


    hasSignedTransaction(): boolean;
    clearSignedTransaction(): void;
    getSignedTransaction(): SignedTransaction | undefined;
    setSignedTransaction(value?: SignedTransaction): void;


    hasProof(): boolean;
    clearProof(): void;
    getProof(): proof_pb.SignedTransactionProof | undefined;
    setProof(value?: proof_pb.SignedTransactionProof): void;


    hasEvents(): boolean;
    clearEvents(): void;
    getEvents(): events_pb.EventsList | undefined;
    setEvents(value?: events_pb.EventsList): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignedTransactionWithProof.AsObject;
    static toObject(includeInstance: boolean, msg: SignedTransactionWithProof): SignedTransactionWithProof.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignedTransactionWithProof, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignedTransactionWithProof;
    static deserializeBinaryFromReader(message: SignedTransactionWithProof, reader: jspb.BinaryReader): SignedTransactionWithProof;
}

export namespace SignedTransactionWithProof {
    export type AsObject = {
        version: number,
        signedTransaction?: SignedTransaction.AsObject,
        proof?: proof_pb.SignedTransactionProof.AsObject,
        events?: events_pb.EventsList.AsObject,
    }
}

export class SignedTransactionsBlock extends jspb.Message { 
    clearTransactionsList(): void;
    getTransactionsList(): Array<SignedTransaction>;
    setTransactionsList(value: Array<SignedTransaction>): void;
    addTransactions(value?: SignedTransaction, index?: number): SignedTransaction;

    getValidatorPublicKey(): Uint8Array | string;
    getValidatorPublicKey_asU8(): Uint8Array;
    getValidatorPublicKey_asB64(): string;
    setValidatorPublicKey(value: Uint8Array | string): void;

    getValidatorSignature(): Uint8Array | string;
    getValidatorSignature_asU8(): Uint8Array;
    getValidatorSignature_asB64(): string;
    setValidatorSignature(value: Uint8Array | string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignedTransactionsBlock.AsObject;
    static toObject(includeInstance: boolean, msg: SignedTransactionsBlock): SignedTransactionsBlock.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignedTransactionsBlock, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignedTransactionsBlock;
    static deserializeBinaryFromReader(message: SignedTransactionsBlock, reader: jspb.BinaryReader): SignedTransactionsBlock;
}

export namespace SignedTransactionsBlock {
    export type AsObject = {
        transactionsList: Array<SignedTransaction.AsObject>,
        validatorPublicKey: Uint8Array | string,
        validatorSignature: Uint8Array | string,
    }
}

export class AccountState extends jspb.Message { 
    getAddress(): Uint8Array | string;
    getAddress_asU8(): Uint8Array;
    getAddress_asB64(): string;
    setAddress(value: Uint8Array | string): void;

    getBlob(): Uint8Array | string;
    getBlob_asU8(): Uint8Array;
    getBlob_asB64(): string;
    setBlob(value: Uint8Array | string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccountState.AsObject;
    static toObject(includeInstance: boolean, msg: AccountState): AccountState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccountState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccountState;
    static deserializeBinaryFromReader(message: AccountState, reader: jspb.BinaryReader): AccountState;
}

export namespace AccountState {
    export type AsObject = {
        address: Uint8Array | string,
        blob: Uint8Array | string,
    }
}

export class TransactionToCommit extends jspb.Message { 

    hasSignedTxn(): boolean;
    clearSignedTxn(): void;
    getSignedTxn(): SignedTransaction | undefined;
    setSignedTxn(value?: SignedTransaction): void;

    clearAccountStatesList(): void;
    getAccountStatesList(): Array<AccountState>;
    setAccountStatesList(value: Array<AccountState>): void;
    addAccountStates(value?: AccountState, index?: number): AccountState;

    clearEventsList(): void;
    getEventsList(): Array<events_pb.Event>;
    setEventsList(value: Array<events_pb.Event>): void;
    addEvents(value?: events_pb.Event, index?: number): events_pb.Event;

    getGasUsed(): number;
    setGasUsed(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionToCommit.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionToCommit): TransactionToCommit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionToCommit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionToCommit;
    static deserializeBinaryFromReader(message: TransactionToCommit, reader: jspb.BinaryReader): TransactionToCommit;
}

export namespace TransactionToCommit {
    export type AsObject = {
        signedTxn?: SignedTransaction.AsObject,
        accountStatesList: Array<AccountState.AsObject>,
        eventsList: Array<events_pb.Event.AsObject>,
        gasUsed: number,
    }
}

export class TransactionListWithProof extends jspb.Message { 
    clearTransactionsList(): void;
    getTransactionsList(): Array<SignedTransaction>;
    setTransactionsList(value: Array<SignedTransaction>): void;
    addTransactions(value?: SignedTransaction, index?: number): SignedTransaction;

    clearInfosList(): void;
    getInfosList(): Array<transaction_info_pb.TransactionInfo>;
    setInfosList(value: Array<transaction_info_pb.TransactionInfo>): void;
    addInfos(value?: transaction_info_pb.TransactionInfo, index?: number): transaction_info_pb.TransactionInfo;


    hasEventsForVersions(): boolean;
    clearEventsForVersions(): void;
    getEventsForVersions(): events_pb.EventsForVersions | undefined;
    setEventsForVersions(value?: events_pb.EventsForVersions): void;


    hasFirstTransactionVersion(): boolean;
    clearFirstTransactionVersion(): void;
    getFirstTransactionVersion(): google_protobuf_wrappers_pb.UInt64Value | undefined;
    setFirstTransactionVersion(value?: google_protobuf_wrappers_pb.UInt64Value): void;


    hasProofOfFirstTransaction(): boolean;
    clearProofOfFirstTransaction(): void;
    getProofOfFirstTransaction(): proof_pb.AccumulatorProof | undefined;
    setProofOfFirstTransaction(value?: proof_pb.AccumulatorProof): void;


    hasProofOfLastTransaction(): boolean;
    clearProofOfLastTransaction(): void;
    getProofOfLastTransaction(): proof_pb.AccumulatorProof | undefined;
    setProofOfLastTransaction(value?: proof_pb.AccumulatorProof): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionListWithProof.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionListWithProof): TransactionListWithProof.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionListWithProof, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionListWithProof;
    static deserializeBinaryFromReader(message: TransactionListWithProof, reader: jspb.BinaryReader): TransactionListWithProof;
}

export namespace TransactionListWithProof {
    export type AsObject = {
        transactionsList: Array<SignedTransaction.AsObject>,
        infosList: Array<transaction_info_pb.TransactionInfo.AsObject>,
        eventsForVersions?: events_pb.EventsForVersions.AsObject,
        firstTransactionVersion?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
        proofOfFirstTransaction?: proof_pb.AccumulatorProof.AsObject,
        proofOfLastTransaction?: proof_pb.AccumulatorProof.AsObject,
    }
}
