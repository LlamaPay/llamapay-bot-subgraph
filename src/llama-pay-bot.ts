import {
  WithdrawCancelled,
  WithdrawExecuted,
  WithdrawScheduled,
} from "../generated/LlamaPayBot/LlamaPayBot";
import { Schedule } from "../generated/schema";

export function handleWithdrawScheduled(event: WithdrawScheduled): void {
  let entity = Schedule.load(event.params.id.toHexString());
  if (entity === null) {
    entity = new Schedule(event.params.id.toHexString());
    entity.scheduleId = event.params.id;
    entity.owner = event.params.owner;
    entity.token = event.params.token;
    entity.from = event.params.from;
    entity.to = event.params.to;
    entity.amountPerSec = event.params.amountPerSec;
    entity.starts = event.params.starts;
    entity.nextUpdate = event.params.starts;
    entity.frequency = event.params.frequency;
  }
  entity.active = true;
  entity.save();
}

export function handleWithdrawExecuted(event: WithdrawExecuted): void {
  let entity = Schedule.load(event.params.id.toHexString());
  if (!entity) return;
  entity.nextUpdate = event.block.timestamp.plus(entity.frequency);
  entity.save();
}

export function handleWithdrawCancelled(event: WithdrawCancelled): void {
  let entity = Schedule.load(event.params.id.toHexString());
  if (!entity) return;
  entity.active = false;
  entity.save();
}
