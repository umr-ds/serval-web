function load_keyring(pin) {
    var url = "http://" + window.location.hostname + ":4110/restful/keyring/identities.json";

    if(typeof pin !== 'undefined') {
        url += "?pin=" + pin;
    }

    var username = 'pum';
    var password = 'pum123';
    return $.ajax({
        type: "GET",
        url: url,
        headers: {
            "Authorization": "Basic " + btoa(username + ":" + password)
        }
    });
}

function set_sid_details(sid, pin, did, name) {
    var url = "http://" + window.location.hostname + ":4110/restful/keyring/" + sid + "/set";

    if(param_is_valid(did)) {
        url += "?did=" + did;
    }

    if(param_is_valid(name)) {
        url += "?name=" + name;
    }

    if(param_is_valid(pin)) {
        url += "?pin=" + pin;
    }

    var username = 'pum';
    var password = 'pum123';
    return $.ajax({
        type: "GET",
        url: url,
        headers: {
            "Authorization": "Basic " + btoa(username + ":" + password)
        }
    });
}

function param_is_valid(param) {
    return typeof param !== 'undefined' && param != ""
}
