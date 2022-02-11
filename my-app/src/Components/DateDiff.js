export function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[1], mdy[0]);
}

export function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second - first) / (1000 * 60 * 60 * 24)).toString();
}
export function getTotalYears(date1,date2) {
    var totalDays = datediff(parseDate(date2),parseDate(date1));
    return (totalDays/365).toPrecision(2);
}

export function getToday(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    return String(dd + '/' + mm + '/' + yyyy);
}