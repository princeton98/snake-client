const { connect } = require("./client");
const setupInput = function () {
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
  }
  )
};
console.log("Connecting ...");
connect();
setupInput();



