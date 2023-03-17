import { AttestationCreated as AttestationCreatedEvent } from "../generated/AttestationStation/AttestationStation"
import { Attestation } from "../generated/schema"
import { parseBytes32String, toUtf8String } from '@ethersproject/strings'

export function handleAttestationCreated(event: AttestationCreatedEvent): void {
  let entity = new Attestation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creator = event.params.creator
  entity.receiver = event.params.about
  entity.key = event.params.key
  entity.keyString = parseBytes32String(event.params.key)
  entity.value = toUtf8String(event.params.val)

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
