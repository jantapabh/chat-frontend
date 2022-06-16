// import type { NextApiRequest, NextApiResponse } from "next";
// import io from "socket.io-client";

// const SocketHandler = io("http://localhost:4001");

// export default SocketHandler;

import { Server } from 'socket.io'

const SocketHandler = (req: any, res:any) => {
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    const io = new Server(res.socket.server)
    res.socket.server.io = io
  }
  res.end()
}

export default SocketHandler