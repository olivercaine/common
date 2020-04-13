import * as moment from 'moment';

export const prettyDate = (date: Date, format: string = 'dddd, Do MMMM [at] h:mma'): string => {
    return moment(date).format(format); // https://momentjs.com/
}

export const fullYearsBetweenDates = (fromDate: Date, toDate?: Date): number => {
  
    if (toDate === undefined) {
      toDate = new Date();
    }

    let age = toDate.getFullYear() - fromDate.getFullYear();

    const months = toDate.getMonth() - fromDate.getMonth();
    if (months < 0 || months === 0 && toDate.getDate() < fromDate.getDate()) {
      age--;
    }

    return age;
}
