import moment from 'moment'

export const BaseDateFormat = (date: Date): string => {
    let time = moment(date)

    time.format('YYYY-MM-DDT')

    return time.toString()
}