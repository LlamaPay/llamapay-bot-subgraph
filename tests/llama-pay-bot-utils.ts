import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  WithdrawCancelled,
  WithdrawExecuted,
  WithdrawScheduled
} from "../generated/LlamaPayBot/LlamaPayBot"

export function createWithdrawCancelledEvent(
  owner: Address,
  token: Address,
  from: Address,
  to: Address,
  amountPerSec: BigInt,
  starts: BigInt,
  frequency: BigInt,
  id: Bytes
): WithdrawCancelled {
  let withdrawCancelledEvent = changetype<WithdrawCancelled>(newMockEvent())

  withdrawCancelledEvent.parameters = new Array()

  withdrawCancelledEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  withdrawCancelledEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  withdrawCancelledEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  withdrawCancelledEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  withdrawCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "amountPerSec",
      ethereum.Value.fromUnsignedBigInt(amountPerSec)
    )
  )
  withdrawCancelledEvent.parameters.push(
    new ethereum.EventParam("starts", ethereum.Value.fromUnsignedBigInt(starts))
  )
  withdrawCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "frequency",
      ethereum.Value.fromUnsignedBigInt(frequency)
    )
  )
  withdrawCancelledEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )

  return withdrawCancelledEvent
}

export function createWithdrawExecutedEvent(
  owner: Address,
  token: Address,
  from: Address,
  to: Address,
  amountPerSec: BigInt,
  starts: BigInt,
  frequency: BigInt,
  id: Bytes
): WithdrawExecuted {
  let withdrawExecutedEvent = changetype<WithdrawExecuted>(newMockEvent())

  withdrawExecutedEvent.parameters = new Array()

  withdrawExecutedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  withdrawExecutedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  withdrawExecutedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  withdrawExecutedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  withdrawExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "amountPerSec",
      ethereum.Value.fromUnsignedBigInt(amountPerSec)
    )
  )
  withdrawExecutedEvent.parameters.push(
    new ethereum.EventParam("starts", ethereum.Value.fromUnsignedBigInt(starts))
  )
  withdrawExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "frequency",
      ethereum.Value.fromUnsignedBigInt(frequency)
    )
  )
  withdrawExecutedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )

  return withdrawExecutedEvent
}

export function createWithdrawScheduledEvent(
  owner: Address,
  token: Address,
  from: Address,
  to: Address,
  amountPerSec: BigInt,
  starts: BigInt,
  frequency: BigInt,
  id: Bytes
): WithdrawScheduled {
  let withdrawScheduledEvent = changetype<WithdrawScheduled>(newMockEvent())

  withdrawScheduledEvent.parameters = new Array()

  withdrawScheduledEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  withdrawScheduledEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  withdrawScheduledEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  withdrawScheduledEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  withdrawScheduledEvent.parameters.push(
    new ethereum.EventParam(
      "amountPerSec",
      ethereum.Value.fromUnsignedBigInt(amountPerSec)
    )
  )
  withdrawScheduledEvent.parameters.push(
    new ethereum.EventParam("starts", ethereum.Value.fromUnsignedBigInt(starts))
  )
  withdrawScheduledEvent.parameters.push(
    new ethereum.EventParam(
      "frequency",
      ethereum.Value.fromUnsignedBigInt(frequency)
    )
  )
  withdrawScheduledEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )

  return withdrawScheduledEvent
}
