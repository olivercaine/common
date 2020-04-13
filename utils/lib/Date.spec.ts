import { expect } from 'chai';
import { fullYearsBetweenDates, prettyDate } from './Date';

describe('Given a date', () => {
  describe('When prettyfying it', () => {
    it('Then it should be formatted correctly', () => {
      const date = new Date(2017, 0, 21, 19);

      const result = prettyDate(date);

      expect(result).to.equal('Saturday, 21st January at 7:00pm');
    });
  });
});

describe.only('When calculating number of years between dates', () => {
  describe('Given the dates are just under a year apart', () => {
    it('Then the number of years should be 0', () => {
      expect(fullYearsBetweenDates(new Date(2000, 1, 10), new Date(2001, 1, 9))).to.equal(0);
    });
  });
  describe('Given the dates are exactly a year apart', () => {
    it('Then the number of years should be 1', () => {
      expect(fullYearsBetweenDates(new Date(2000, 1, 10), new Date(2001, 1, 10))).to.equal(1);
    });
  });
  describe('Given the dates are just over a year apart', () => {
    it('Then the number of years should be 1', () => {
      expect(fullYearsBetweenDates(new Date(2000, 1, 10), new Date(2001, 1, 11))).to.equal(1);
    });
  });
  describe('Given only one date provided which 10 years ago', () => {
    it('Then the number of years should be 10', () => {
      const date10YearsAgo = new Date(new Date().getFullYear() - 10, new Date().getMonth(), new Date().getDate());

      const result = fullYearsBetweenDates(date10YearsAgo);

      expect(result).to.equal(10);
    });
  });
});
