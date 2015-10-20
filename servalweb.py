import urlparse

from flask import Flask
from flask import render_template
from flask import request
from flask import jsonify
from flask import send_file
from servalwrapper import ServalWrapper
import requests
import io

app = Flask(__name__)
servald = ServalWrapper()


def parse_request_data(request_data):
    data = urlparse.parse_qs(request_data)
    return data


@app.route('/')
def serval_web_client():
    serval_id = None
    peers = None
    try:
        serval_id = servald.get_id_self();
        peers = servald.get_id_allpeers();
    except:
        print "Servald not running"
    return render_template("index.html", id=serval_id, peers=peers)


@app.route('/restful/rhizome/<string:id>/<string:name>')
def get_file(id, name):
    data = requests.get('http://peter:venkman@localhost:4110/restful/rhizome/' + id + '/decrypted.bin').content
    return send_file(io.BytesIO(data), as_attachment=True, attachment_filename=name)


@app.route('/refresh', methods=['POST'])
def refresh():
    peers = servald.get_id_allpeers()
    data = {'peers': peers}
    return jsonify(data)


@app.route('/delete', methods=['POST'])
def delete():
    request_data = parse_request_data(request.data)
    if 'file_id' in request_data and request_data['file_id'] != '':
        file_id = request_data['file_id'][0]
        servald.rhizome_file_delete(file_id)
        return jsonify({})
    else:
        return jsonify({'error': 'No file selected.'})


if __name__ == '__main__':
    app.run(debug=True)
