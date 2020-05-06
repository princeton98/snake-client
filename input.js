let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  handleUserInput(stdin);
  stdin.resume();
  return stdin;
}
const handleUserInput = function (stdin) {
  stdin.on("data", (stdin) => {
    if (stdin === '\u0003') {
      process.exit();
    }
    if (stdin === "w") {
      //console.log("up");
      connection.write("Move: up")
    }
    if (stdin === "a") {
      //console.log("left");
      connection.write("Move: left")
    }
    if (stdin === "s") {
      //console.log("down");
      connection.write("Move: down");
    }
    if (stdin === "d") {
      //console.log("right");
      connection.write("Move: right")
    }
    if (stdin === "h") {
      connection.write("Say: hello")
    }
    if (stdin === "k") {
      connection.write("Say: I'm screwed")
    }
    if (stdin === "f") {
      connection.write("Say: Gotcha!")
    }
    if (stdin === "r") {
      connection.write("Say: nice try");
    }
    if (stdin === "e") {
      connection.write("Say: Nice one");
    }
    if (stdin === "c") {
      connection.write("Say: One more!");
    }
  }
  )
};



let obj2 = { setupInput }
module.exports = obj2;