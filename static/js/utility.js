function convert_unix_timestamp(timestamp) {
    var message_date = new Date(timestamp*1000);
    var today = new Date();
    var result = "";

    if (!sameDay(message_date, today)) {
        result += message_date.toLocaleDateString() + " - ";
    }
    result += message_date.getHours() + ":" + message_date.getMinutes() + ":" + message_date.getSeconds();

    return result;
}

function sameDay(d1, d2) {
    return d1 - d1 % 86400000 == d2 - d2 % 86400000
}