# notes

## connection - the moment user visits..a connection gets established

## after connection, Event Emitting happens
Emitting events
The main idea behind Socket.IO is that you can send and receive any events you want, with any data you want. Any objects that can be encoded as JSON will do, and binary data is supported too.

## on 
on detects event, like connection, disconnect, emitted events
as event named (chat message) it gets detected by on

## information handshake contains after getting connected

-a user connected
 id: 'puoQCN0DS_Z12hkbAAAB',
  handshake: {
    headers: {
      host: 'localhost:3000',
      connection: 'keep-alive',
      'sec-ch-ua-platform': '"Windows"',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36',
      accept: '*/*',
      'sec-ch-ua': '"Chromium";v="142", "Google Chrome";v="142", "Not_A Brand";v="99"',
      'sec-ch-ua-mobile': '?0',
      'sec-fetch-site': 'same-origin',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      referer: 'http://localhost:3000/',
      'accept-encoding': 'gzip, deflate, br, zstd',
      'accept-language': 'en-US,en;q=0.9',
      cookie: 'connect.sid=s%3AyaA28E6se-d8uhJG4KQ-hSXjoXEa1nEG.nDNxY4HQQIGTUEUlti2NWptdS6H64kweN2nPhSvr%2F0E'
    },
    time: 'Thu Nov 06 2025 11:03:02 GMT+0530 (India Standard Time)',
    address: '::1',
    xdomain: false,
    secure: false,
    issued: 1762407182725,
    url: '/socket.io/?EIO=4&transport=polling&t=zqdf9tx3',
    query: [Object: null prototype] {
      EIO: '4',
      transport: 'polling',
      t: 'zqdf9tx3'
    },
    auth: {}
  },

##after emit, broadcasting happens
- emit = in order to send an event to everyone (including sender).
- broadcast = to everyone, except for a certain emitting socket, broadcast flag for emitting from that socket (like not sending message to the sender)

# common api -
## basic emit
// client to server
-client to server = socket.emit("event name", arg)

-server = io.on("connection", (socket) => {
  //server to client
  socket.on("event name", (arg) => {
    io.emit("chat message", arg)
    console.log("message: " + arg); 
  })
})