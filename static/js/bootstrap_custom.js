function create_alert(message) {
    return  '<div class="alert alert-info alert-dismissible" role="alert">' +
                '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                message +
            '</div>';
}