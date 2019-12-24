import { expect } from 'chai';
import { prettyDate } from './Date'

describe('Given a date', () => {
  describe('When prettyfying it', () => {
    it('Then it should be formatted correctly', () => {
      const date = new Date(2017, 0, 21, 19)

      const result = prettyDate(date)

      expect(result).to.equal('Saturday, 21st January at 7:00pm')
    })
  })
})
