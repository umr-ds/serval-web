function convertUnixTimestamp(timestamp) {
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

var byteUnits = ["B", "kB", "MB", "GB", "TB"];

function byteToString(size) {
    var p = Math.floor(Math.log(size) / Math.log(1000));
    return (size / Math.pow(1000, p)).toFixed(2) + " " + byteUnits[p];
}