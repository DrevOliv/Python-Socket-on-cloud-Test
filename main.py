import socket


#HOST = "192.168.0.107"
hostname = socket.gethostname()

HOST = socket.gethostname(hostname)
PORT = 8080


server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
#server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
server.bind((HOST, PORT))

server.listen()

print(f"Listening on {PORT} with host {HOST}")

comm, address = server.accept()


print(address)


message = comm.recv(1024).decode("utf-8")

print(message)

sendBack = """HTTP/1.1 200 OK
Date: Mon, 27 Jul 2009 12:28:53 GMT
Server: Apache/2.2.14 (Win32)
Last-Modified: Wed, 22 Jul 2009 19:15:56 GMT

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SomeDock</title>
</head>
<body>
    <h1>Funkar hahaha</h1>
</body>
</html>
"""

comm.sendall(sendBack.encode("utf-8"))
