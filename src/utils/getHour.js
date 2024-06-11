export function getHourFromDateTime(dateTimeStamp) {
    const timePart = dateTimeStamp.split(' ')[1];
    const hour = timePart.split(':')[0];
    const minutes = timePart.split(':')[1];
    return `${hour}:${minutes}`;
}