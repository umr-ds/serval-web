function create_alert(id, message) {
    return  '<div id="' + id + '" class="alert alert-info alert-dismissible fade" role="alert">' +
                '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                message +
            '</div>';
}

function createAutoClosingAlert(id, message, parent, delay) {
    var time_id = id + Date.now()
    $(parent).append(create_alert(time_id, message));
    var alert = $("#" + time_id);
    $(".fade").addClass("in")
    window.setTimeout(function() {alert.alert('close')}, delay);
}