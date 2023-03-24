import { AttestationCreated as AttestationCreatedEvent } from "../generated/AttestationStation/AttestationStation";
import { Attestation, Global } from "../generated/schema";
import { integer } from "@protofire/subgraph-toolkit";

const globalkey = "global";

export function handleAttestationCreated(event: AttestationCreatedEvent): void {
  let attestation = new Attestation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  let global = Global.load(globalkey);
  if (global == null) {
    global = new Global(globalkey);
  }

  // zero indexed
  attestation.index = global.attestations;

  attestation.creator = event.params.creator;
  attestation.receiver = event.params.about;
  attestation.key = event.params.key;
  attestation.keyString = event.params.key.toString();
  attestation.val = event.params.val;
  attestation.valueString = event.params.val.toString();

  attestation.blockNumber = event.block.number;
  attestation.blockTimestamp = event.block.timestamp;
  attestation.transactionHash = event.transaction.hash;
  attestation.save();

  global.attestations = global.attestations.plus(integer.ONE);
  global.save();
}
