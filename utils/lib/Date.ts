import * as moment from 'moment';

export const prettyDate = (date: Date, format: string = 'dddd, Do MMMM [at] h:mma'): string => {
    return moment(date).format(format); // https://momentjs.com/
}

export const fullYearsBetweenDates = (fromDate: Date, toDate?: Date): number => {
  return moment(toDate || new Date()).diff(moment(fromDate), 'years');
}
