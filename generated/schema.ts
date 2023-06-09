// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Attestation extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Attestation entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Attestation must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Attestation", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Attestation | null {
    return changetype<Attestation | null>(
      store.get("Attestation", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value!.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value!.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get receiver(): Bytes {
    let value = this.get("receiver");
    return value!.toBytes();
  }

  set receiver(value: Bytes) {
    this.set("receiver", Value.fromBytes(value));
  }

  get key(): Bytes {
    let value = this.get("key");
    return value!.toBytes();
  }

  set key(value: Bytes) {
    this.set("key", Value.fromBytes(value));
  }

  get keyString(): string {
    let value = this.get("keyString");
    return value!.toString();
  }

  set keyString(value: string) {
    this.set("keyString", Value.fromString(value));
  }

  get val(): Bytes {
    let value = this.get("val");
    return value!.toBytes();
  }

  set val(value: Bytes) {
    this.set("val", Value.fromBytes(value));
  }

  get valueString(): string {
    let value = this.get("valueString");
    return value!.toString();
  }

  set valueString(value: string) {
    this.set("valueString", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class Creator extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Creator entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Creator must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Creator", id.toString(), this);
    }
  }

  static load(id: string): Creator | null {
    return changetype<Creator | null>(store.get("Creator", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }
}

export class CreatorKey extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CreatorKey entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type CreatorKey must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("CreatorKey", id.toString(), this);
    }
  }

  static load(id: string): CreatorKey | null {
    return changetype<CreatorKey | null>(store.get("CreatorKey", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }
}

export class Receiver extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Receiver entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Receiver must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Receiver", id.toString(), this);
    }
  }

  static load(id: string): Receiver | null {
    return changetype<Receiver | null>(store.get("Receiver", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }
}

export class Global extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Global entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Global must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Global", id.toString(), this);
    }
  }

  static load(id: string): Global | null {
    return changetype<Global | null>(store.get("Global", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get attestations(): BigInt {
    let value = this.get("attestations");
    return value!.toBigInt();
  }

  set attestations(value: BigInt) {
    this.set("attestations", Value.fromBigInt(value));
  }

  get creators(): BigInt {
    let value = this.get("creators");
    return value!.toBigInt();
  }

  set creators(value: BigInt) {
    this.set("creators", Value.fromBigInt(value));
  }

  get creatorKeys(): BigInt {
    let value = this.get("creatorKeys");
    return value!.toBigInt();
  }

  set creatorKeys(value: BigInt) {
    this.set("creatorKeys", Value.fromBigInt(value));
  }

  get receivers(): BigInt {
    let value = this.get("receivers");
    return value!.toBigInt();
  }

  set receivers(value: BigInt) {
    this.set("receivers", Value.fromBigInt(value));
  }
}
