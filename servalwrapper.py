import subprocess
import string

SERVALDBINARY="/Users/ruby/git/serval-dna/servald"


class ServalWrapper(object):

    def __init__(self):
        self.peerlist = []
        self.my_id = ""


    def get_status(self):
        result = subprocess.check_output([SERVALDBINARY,"status"])
        for i in result.split():
            if i.startswith("status"):
                return i.split(":")[1]

    def get_id_self(self):
        result = subprocess.check_output([SERVALDBINARY,"id", "self"])
        for i in result.split():
            if len(i) > 8:
                self.my_id = i
                return i

    def get_id_allpeers(self):
        self.peerlist = []
        result = subprocess.check_output([SERVALDBINARY,"id", "allpeers"])
        for i in result.split():
            if len(i) > 8:
                self.peerlist.append(i)

        return self.peerlist

    def meshms_send(self, recipient, payload):
        if self.my_id == "":
            self.get_id_self()
        print string.join([SERVALDBINARY,"meshms", "send", "message", self.my_id, recipient, "\"" + payload + "\""])
        result = subprocess.check_output([SERVALDBINARY,"meshms", "send", "message", self.my_id, recipient, payload])
        print result

    def meshms_list_messages(self, partner):
        if self.my_id == "":
            self.get_id_self()

        print string.join([SERVALDBINARY,"meshms", "list", "messages", self.my_id, partner])
        result = subprocess.check_output([SERVALDBINARY,"meshms", "list", "messages", self.my_id, partner])
        msgs = []
        msg_start = False

        for i in result.split("\n"):
            if msg_start:
                msgs.append(i)
            else:
                if i.startswith("_id"):
                    msg_start = True
        return msgs

    def rhizome_list(self):
        result = subprocess.check_output([SERVALDBINARY,"rhizome", "list"])
        files = []
        msg_start = False

        for i in result.split("\n"):
            if msg_start:
                files.append(i)
            else:
                if i.startswith("_id"):
                    msg_start = True
        return files

    def rhizome_file_add(self, filepath):
        if self.my_id == "":
            self.get_id_self()
        result = subprocess.check_output([SERVALDBINARY, "rhizome", "add", "file", self.my_id, filepath])
        print result

    def rhizome_file_export(self, fileid, filepath):
        result = subprocess.check_output([SERVALDBINARY, "rhizome", "export", "file", fileid, filepath])
        print result

    def rhizome_file_delete(self, fileid):
        result = subprocess.check_output([SERVALDBINARY, "rhizome", "delete", "file", fileid])
        print result
        result = subprocess.check_output([SERVALDBINARY, "rhizome", "clean"])
        print result

