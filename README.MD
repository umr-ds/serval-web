Serval-Web
##########

Serval-Web serves as a web-frontend to control your serval daemon.
Python is required since it is based on Flask.

To run the server just start your serval daemon and set the correct path to it in servalwrapper.py.
You have to run the Flask-Server under the same permissions as the serval daemon, since some features require the command-line interface.

Note that this is a first draft and is still subject to change.

TODOs
#####

- Remove scrollbars from list groups if they don't need one
- Redesign the MeshMS interface to look more like an instant messenger
- Implement keyring-management
- ...
