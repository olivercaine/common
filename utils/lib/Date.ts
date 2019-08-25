import * as moment from 'moment'

export const prettyDate = (date: Date): string => {
    return moment(date).format('dddd, Do MMMM [at] h:mma'); // https://momentjs.com/
}
