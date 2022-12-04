// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class WithdrawCancelled extends ethereum.Event {
  get params(): WithdrawCancelled__Params {
    return new WithdrawCancelled__Params(this);
  }
}

export class WithdrawCancelled__Params {
  _event: WithdrawCancelled;

  constructor(event: WithdrawCancelled) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get amountPerSec(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get starts(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get frequency(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get id(): Bytes {
    return this._event.parameters[7].value.toBytes();
  }
}

export class WithdrawExecuted extends ethereum.Event {
  get params(): WithdrawExecuted__Params {
    return new WithdrawExecuted__Params(this);
  }
}

export class WithdrawExecuted__Params {
  _event: WithdrawExecuted;

  constructor(event: WithdrawExecuted) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get amountPerSec(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get starts(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get frequency(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get id(): Bytes {
    return this._event.parameters[7].value.toBytes();
  }
}

export class WithdrawScheduled extends ethereum.Event {
  get params(): WithdrawScheduled__Params {
    return new WithdrawScheduled__Params(this);
  }
}

export class WithdrawScheduled__Params {
  _event: WithdrawScheduled;

  constructor(event: WithdrawScheduled) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get amountPerSec(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get starts(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get frequency(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get id(): Bytes {
    return this._event.parameters[7].value.toBytes();
  }
}

export class LlamaPayBot extends ethereum.SmartContract {
  static bind(address: Address): LlamaPayBot {
    return new LlamaPayBot("LlamaPayBot", address);
  }

  balances(param0: Address): BigInt {
    let result = super.call("balances", "balances(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_balances(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balances", "balances(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  bot(): Address {
    let result = super.call("bot", "bot():(address)", []);

    return result[0].toAddress();
  }

  try_bot(): ethereum.CallResult<Address> {
    let result = super.tryCall("bot", "bot():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  calcWithdrawId(
    _token: Address,
    _from: Address,
    _to: Address,
    _amountPerSec: BigInt,
    _starts: BigInt,
    _frequency: BigInt
  ): Bytes {
    let result = super.call(
      "calcWithdrawId",
      "calcWithdrawId(address,address,address,uint216,uint40,uint40):(bytes32)",
      [
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromAddress(_to),
        ethereum.Value.fromUnsignedBigInt(_amountPerSec),
        ethereum.Value.fromUnsignedBigInt(_starts),
        ethereum.Value.fromUnsignedBigInt(_frequency)
      ]
    );

    return result[0].toBytes();
  }

  try_calcWithdrawId(
    _token: Address,
    _from: Address,
    _to: Address,
    _amountPerSec: BigInt,
    _starts: BigInt,
    _frequency: BigInt
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "calcWithdrawId",
      "calcWithdrawId(address,address,address,uint216,uint40,uint40):(bytes32)",
      [
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromAddress(_to),
        ethereum.Value.fromUnsignedBigInt(_amountPerSec),
        ethereum.Value.fromUnsignedBigInt(_starts),
        ethereum.Value.fromUnsignedBigInt(_frequency)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  cancelWithdraw(
    _token: Address,
    _from: Address,
    _to: Address,
    _amountPerSec: BigInt,
    _starts: BigInt,
    _frequency: BigInt
  ): Bytes {
    let result = super.call(
      "cancelWithdraw",
      "cancelWithdraw(address,address,address,uint216,uint40,uint40):(bytes32)",
      [
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromAddress(_to),
        ethereum.Value.fromUnsignedBigInt(_amountPerSec),
        ethereum.Value.fromUnsignedBigInt(_starts),
        ethereum.Value.fromUnsignedBigInt(_frequency)
      ]
    );

    return result[0].toBytes();
  }

  try_cancelWithdraw(
    _token: Address,
    _from: Address,
    _to: Address,
    _amountPerSec: BigInt,
    _starts: BigInt,
    _frequency: BigInt
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "cancelWithdraw",
      "cancelWithdraw(address,address,address,uint216,uint40,uint40):(bytes32)",
      [
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromAddress(_to),
        ethereum.Value.fromUnsignedBigInt(_amountPerSec),
        ethereum.Value.fromUnsignedBigInt(_starts),
        ethereum.Value.fromUnsignedBigInt(_frequency)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  factory(): Address {
    let result = super.call("factory", "factory():(address)", []);

    return result[0].toAddress();
  }

  try_factory(): ethereum.CallResult<Address> {
    let result = super.tryCall("factory", "factory():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  fee(): BigInt {
    let result = super.call("fee", "fee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_fee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("fee", "fee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  llama(): Address {
    let result = super.call("llama", "llama():(address)", []);

    return result[0].toAddress();
  }

  try_llama(): ethereum.CallResult<Address> {
    let result = super.tryCall("llama", "llama():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  newLlama(): Address {
    let result = super.call("newLlama", "newLlama():(address)", []);

    return result[0].toAddress();
  }

  try_newLlama(): ethereum.CallResult<Address> {
    let result = super.tryCall("newLlama", "newLlama():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owners(param0: Bytes): Address {
    let result = super.call("owners", "owners(bytes32):(address)", [
      ethereum.Value.fromFixedBytes(param0)
    ]);

    return result[0].toAddress();
  }

  try_owners(param0: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall("owners", "owners(bytes32):(address)", [
      ethereum.Value.fromFixedBytes(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  redirects(param0: Address): Address {
    let result = super.call("redirects", "redirects(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toAddress();
  }

  try_redirects(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("redirects", "redirects(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  scheduleWithdraw(
    _token: Address,
    _from: Address,
    _to: Address,
    _amountPerSec: BigInt,
    _starts: BigInt,
    _frequency: BigInt
  ): Bytes {
    let result = super.call(
      "scheduleWithdraw",
      "scheduleWithdraw(address,address,address,uint216,uint40,uint40):(bytes32)",
      [
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromAddress(_to),
        ethereum.Value.fromUnsignedBigInt(_amountPerSec),
        ethereum.Value.fromUnsignedBigInt(_starts),
        ethereum.Value.fromUnsignedBigInt(_frequency)
      ]
    );

    return result[0].toBytes();
  }

  try_scheduleWithdraw(
    _token: Address,
    _from: Address,
    _to: Address,
    _amountPerSec: BigInt,
    _starts: BigInt,
    _frequency: BigInt
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "scheduleWithdraw",
      "scheduleWithdraw(address,address,address,uint216,uint40,uint40):(bytes32)",
      [
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromAddress(_from),
        ethereum.Value.fromAddress(_to),
        ethereum.Value.fromUnsignedBigInt(_amountPerSec),
        ethereum.Value.fromUnsignedBigInt(_starts),
        ethereum.Value.fromUnsignedBigInt(_frequency)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _factory(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bot(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _llama(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BatchExecuteCall extends ethereum.Call {
  get inputs(): BatchExecuteCall__Inputs {
    return new BatchExecuteCall__Inputs(this);
  }

  get outputs(): BatchExecuteCall__Outputs {
    return new BatchExecuteCall__Outputs(this);
  }
}

export class BatchExecuteCall__Inputs {
  _call: BatchExecuteCall;

  constructor(call: BatchExecuteCall) {
    this._call = call;
  }

  get _calls(): Array<Bytes> {
    return this._call.inputValues[0].value.toBytesArray();
  }
}

export class BatchExecuteCall__Outputs {
  _call: BatchExecuteCall;

  constructor(call: BatchExecuteCall) {
    this._call = call;
  }
}

export class CancelRedirectCall extends ethereum.Call {
  get inputs(): CancelRedirectCall__Inputs {
    return new CancelRedirectCall__Inputs(this);
  }

  get outputs(): CancelRedirectCall__Outputs {
    return new CancelRedirectCall__Outputs(this);
  }
}

export class CancelRedirectCall__Inputs {
  _call: CancelRedirectCall;

  constructor(call: CancelRedirectCall) {
    this._call = call;
  }
}

export class CancelRedirectCall__Outputs {
  _call: CancelRedirectCall;

  constructor(call: CancelRedirectCall) {
    this._call = call;
  }
}

export class CancelWithdrawCall extends ethereum.Call {
  get inputs(): CancelWithdrawCall__Inputs {
    return new CancelWithdrawCall__Inputs(this);
  }

  get outputs(): CancelWithdrawCall__Outputs {
    return new CancelWithdrawCall__Outputs(this);
  }
}

export class CancelWithdrawCall__Inputs {
  _call: CancelWithdrawCall;

  constructor(call: CancelWithdrawCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _from(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _amountPerSec(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _starts(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _frequency(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class CancelWithdrawCall__Outputs {
  _call: CancelWithdrawCall;

  constructor(call: CancelWithdrawCall) {
    this._call = call;
  }

  get id(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class ChangeBotCall extends ethereum.Call {
  get inputs(): ChangeBotCall__Inputs {
    return new ChangeBotCall__Inputs(this);
  }

  get outputs(): ChangeBotCall__Outputs {
    return new ChangeBotCall__Outputs(this);
  }
}

export class ChangeBotCall__Inputs {
  _call: ChangeBotCall;

  constructor(call: ChangeBotCall) {
    this._call = call;
  }

  get _newBot(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeBotCall__Outputs {
  _call: ChangeBotCall;

  constructor(call: ChangeBotCall) {
    this._call = call;
  }
}

export class ChangeFeeCall extends ethereum.Call {
  get inputs(): ChangeFeeCall__Inputs {
    return new ChangeFeeCall__Inputs(this);
  }

  get outputs(): ChangeFeeCall__Outputs {
    return new ChangeFeeCall__Outputs(this);
  }
}

export class ChangeFeeCall__Inputs {
  _call: ChangeFeeCall;

  constructor(call: ChangeFeeCall) {
    this._call = call;
  }

  get _newFee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeFeeCall__Outputs {
  _call: ChangeFeeCall;

  constructor(call: ChangeFeeCall) {
    this._call = call;
  }
}

export class ChangeLlamaCall extends ethereum.Call {
  get inputs(): ChangeLlamaCall__Inputs {
    return new ChangeLlamaCall__Inputs(this);
  }

  get outputs(): ChangeLlamaCall__Outputs {
    return new ChangeLlamaCall__Outputs(this);
  }
}

export class ChangeLlamaCall__Inputs {
  _call: ChangeLlamaCall;

  constructor(call: ChangeLlamaCall) {
    this._call = call;
  }

  get _newLlama(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeLlamaCall__Outputs {
  _call: ChangeLlamaCall;

  constructor(call: ChangeLlamaCall) {
    this._call = call;
  }
}

export class ConfirmNewLlamaCall extends ethereum.Call {
  get inputs(): ConfirmNewLlamaCall__Inputs {
    return new ConfirmNewLlamaCall__Inputs(this);
  }

  get outputs(): ConfirmNewLlamaCall__Outputs {
    return new ConfirmNewLlamaCall__Outputs(this);
  }
}

export class ConfirmNewLlamaCall__Inputs {
  _call: ConfirmNewLlamaCall;

  constructor(call: ConfirmNewLlamaCall) {
    this._call = call;
  }
}

export class ConfirmNewLlamaCall__Outputs {
  _call: ConfirmNewLlamaCall;

  constructor(call: ConfirmNewLlamaCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class ExecuteCall extends ethereum.Call {
  get inputs(): ExecuteCall__Inputs {
    return new ExecuteCall__Inputs(this);
  }

  get outputs(): ExecuteCall__Outputs {
    return new ExecuteCall__Outputs(this);
  }
}

export class ExecuteCall__Inputs {
  _call: ExecuteCall;

  constructor(call: ExecuteCall) {
    this._call = call;
  }

  get _calls(): Array<Bytes> {
    return this._call.inputValues[0].value.toBytesArray();
  }

  get _from(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ExecuteCall__Outputs {
  _call: ExecuteCall;

  constructor(call: ExecuteCall) {
    this._call = call;
  }
}

export class ExecuteWithdrawCall extends ethereum.Call {
  get inputs(): ExecuteWithdrawCall__Inputs {
    return new ExecuteWithdrawCall__Inputs(this);
  }

  get outputs(): ExecuteWithdrawCall__Outputs {
    return new ExecuteWithdrawCall__Outputs(this);
  }
}

export class ExecuteWithdrawCall__Inputs {
  _call: ExecuteWithdrawCall;

  constructor(call: ExecuteWithdrawCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _token(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _from(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _amountPerSec(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _starts(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _frequency(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _id(): Bytes {
    return this._call.inputValues[7].value.toBytes();
  }

  get _execute(): boolean {
    return this._call.inputValues[8].value.toBoolean();
  }

  get _emitEvent(): boolean {
    return this._call.inputValues[9].value.toBoolean();
  }
}

export class ExecuteWithdrawCall__Outputs {
  _call: ExecuteWithdrawCall;

  constructor(call: ExecuteWithdrawCall) {
    this._call = call;
  }
}

export class RefundCall extends ethereum.Call {
  get inputs(): RefundCall__Inputs {
    return new RefundCall__Inputs(this);
  }

  get outputs(): RefundCall__Outputs {
    return new RefundCall__Outputs(this);
  }
}

export class RefundCall__Inputs {
  _call: RefundCall;

  constructor(call: RefundCall) {
    this._call = call;
  }
}

export class RefundCall__Outputs {
  _call: RefundCall;

  constructor(call: RefundCall) {
    this._call = call;
  }
}

export class ScheduleWithdrawCall extends ethereum.Call {
  get inputs(): ScheduleWithdrawCall__Inputs {
    return new ScheduleWithdrawCall__Inputs(this);
  }

  get outputs(): ScheduleWithdrawCall__Outputs {
    return new ScheduleWithdrawCall__Outputs(this);
  }
}

export class ScheduleWithdrawCall__Inputs {
  _call: ScheduleWithdrawCall;

  constructor(call: ScheduleWithdrawCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _from(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _amountPerSec(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _starts(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _frequency(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class ScheduleWithdrawCall__Outputs {
  _call: ScheduleWithdrawCall;

  constructor(call: ScheduleWithdrawCall) {
    this._call = call;
  }

  get id(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class SetRedirectCall extends ethereum.Call {
  get inputs(): SetRedirectCall__Inputs {
    return new SetRedirectCall__Inputs(this);
  }

  get outputs(): SetRedirectCall__Outputs {
    return new SetRedirectCall__Outputs(this);
  }
}

export class SetRedirectCall__Inputs {
  _call: SetRedirectCall;

  constructor(call: SetRedirectCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetRedirectCall__Outputs {
  _call: SetRedirectCall;

  constructor(call: SetRedirectCall) {
    this._call = call;
  }
}