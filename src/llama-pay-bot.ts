import {
  WithdrawCancelled,
  WithdrawExecuted,
  WithdrawScheduled,
} from "../generated/LlamaPayBot/LlamaPayBot";
import { Schedule, Token } from "../generated/schema";
import { ERC20 } from "../generated/LlamaPayBot/ERC20";

export function handleWithdrawScheduled(event: WithdrawScheduled): void {
  let entity = Schedule.load(event.params.id.toHexString());
  if (entity === null) {
    entity = new Schedule(event.params.id.toHexString());
    let token = Token.load(event.params.token.toHexString());
    if (token === null) {
      token = new Token(event.params.token.toHexString());
      const erc20 = ERC20.bind(event.params.token);
      token.address = event.params.token;
      token.symbol = erc20.try_symbol().value;
      token.name = erc20.try_name().value;
      token.decimals = erc20.try_decimals().value;
      token.save();
    }
    entity.scheduleId = event.params.id;
    entity.owner = event.params.owner;
    entity.token = token.id;
    entity.from = event.params.from;
    entity.to = event.params.to;
    entity.amountPerSec = event.params.amountPerSec;
    entity.starts = event.params.starts;
    entity.nextUpdate = event.params.starts;
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
