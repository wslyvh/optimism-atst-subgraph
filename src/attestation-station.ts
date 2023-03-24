import { AttestationCreated as AttestationCreatedEvent } from "../generated/AttestationStation/AttestationStation";
import { Attestation, Creator, CreatorKey, Global, Receiver } from "../generated/schema";
import { BigInt } from "@graphprotocol/graph-ts";
import { integer } from "@protofire/subgraph-toolkit";

const globalkey = "global";

export function handleAttestationCreated(event: AttestationCreatedEvent): void {
  let attestation = new Attestation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  // Create globals
  let global = Global.load(globalkey);
  if (global == null) {
    global = new Global(globalkey);
    global.attestations = BigInt.zero();
    global.creators = BigInt.zero();
    global.creatorKeys = BigInt.zero();
    global.receivers = BigInt.zero();
  }

  // Creators
  let creator = Creator.load(event.params.creator.toHex());
  if (!creator) {
    creator = new Creator(event.params.creator.toHex());
    creator.count = BigInt.zero();
    global.creators = global.creators.plus(integer.ONE);
  }
  creator.count = creator.count.plus(integer.ONE);
  creator.save();

  // Keys by creators allow for more efficient querying
  const key = event.params.creator
    .toHex()
    .concat(".")
    .concat(event.params.key.toString());
  let creatorKey = CreatorKey.load(key);
  if (!creatorKey) {
    creatorKey = new CreatorKey(key);
    creatorKey.count = BigInt.zero();
    global.creatorKeys = global.creatorKeys.plus(integer.ONE);
  }
  creatorKey.count = creatorKey.count.plus(integer.ONE);
  creatorKey.save();

  // Receivers
  let receiver = Receiver.load(event.params.about.toHex());
  if (!receiver) {
    receiver = new Receiver(event.params.about.toHex());
    receiver.count = BigInt.zero();
    global.receivers = global.receivers.plus(integer.ONE);
  }
  receiver.count = receiver.count.plus(integer.ONE);
  receiver.save();

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
