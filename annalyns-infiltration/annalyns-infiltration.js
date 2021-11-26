export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return (knightIsAwake || archerIsAwake || prisonerIsAwake);
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return (!archerIsAwake && prisonerIsAwake)
}

function freeWithDog(archerIsAwake, petDogIsPresent) {
  return (!archerIsAwake && petDogIsPresent)
}

function freeWithoutDog(petDogIsPresent, knightIsAwake, archerIsAwake, prisonerIsAwake){
  return (!petDogIsPresent && !knightIsAwake && !archerIsAwake && prisonerIsAwake)
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  return (
      freeWithDog(archerIsAwake, petDogIsPresent) ||
      freeWithoutDog( petDogIsPresent, knightIsAwake, archerIsAwake, prisonerIsAwake)
  )
}
