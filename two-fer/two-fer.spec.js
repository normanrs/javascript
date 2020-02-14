import { twoFer } from './two-fer'
// import pry from 'pryjs'

// eval(pry.it)
describe('twoFer()', () => {
  test('no name given', () => {
    expect(twoFer()).toEqual("One for you, one for me.")
  })

  test('a name given', () => {
    expect(twoFer("Alice")).toEqual("One for Alice, one for me.")
  })

  xtest('another name given', () => {
    expect(twoFer("Bob")).toEqual("One for Bob, one for me.")
  })
})
