import * as moment from 'moment'

export const prettyDate = (date: Date, format: string = 'dddd, Do MMMM [at] h:mma'): string => {
    return moment(date).format(format); // https://momentjs.com/
}
