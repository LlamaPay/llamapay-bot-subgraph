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

export class Schedule extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Schedule entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Schedule must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Schedule", id.toString(), this);
    }
  }

  static load(id: string): Schedule | null {
    return changetype<Schedule | null>(store.get("Schedule", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get scheduleId(): Bytes {
    let value = this.get("scheduleId");
    return value!.toBytes();
  }

  set scheduleId(value: Bytes) {
    this.set("scheduleId", Value.fromBytes(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get token(): Bytes {
    let value = this.get("token");
    return value!.toBytes();
  }

  set token(value: Bytes) {
    this.set("token", Value.fromBytes(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value!.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get amountPerSec(): BigInt {
    let value = this.get("amountPerSec");
    return value!.toBigInt();
  }

  set amountPerSec(value: BigInt) {
    this.set("amountPerSec", Value.fromBigInt(value));
  }

  get starts(): BigInt {
    let value = this.get("starts");
    return value!.toBigInt();
  }

  set starts(value: BigInt) {
    this.set("starts", Value.fromBigInt(value));
  }

  get frequency(): BigInt {
    let value = this.get("frequency");
    return value!.toBigInt();
  }

  set frequency(value: BigInt) {
    this.set("frequency", Value.fromBigInt(value));
  }

  get nextUpdate(): BigInt {
    let value = this.get("nextUpdate");
    return value!.toBigInt();
  }

  set nextUpdate(value: BigInt) {
    this.set("nextUpdate", Value.fromBigInt(value));
  }

  get active(): boolean {
    let value = this.get("active");
    return value!.toBoolean();
  }

  set active(value: boolean) {
    this.set("active", Value.fromBoolean(value));
  }
}
