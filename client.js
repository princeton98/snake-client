const net = require("net");

/** 
 *  Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: "135.23.222.148",
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  // recieving data from server
  conn.on('data', (data) => {
    console.log(data);
  })
  return conn;
}
let obj = { connect }
module.exports = obj;