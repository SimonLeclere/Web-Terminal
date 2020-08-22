const COMMANDS = {
  help: 'Supported commands: <span class="code">about</span>, <span class="code">contact</span>, <span class="code">clear</span>, <span class="code">commands</span>',
  
  about: "Beebop is a bot for Discord that develops according to the needs of its users. It currently has about a hundred commands and is translated into French and English. It has several new commands organized in 7 categories: economy, images, utilities, music, moderation, games and information.<br><br>You need a particular command? You have a problem on your server? Would you like to have personalized features? Don't hesitate to suggest your addition on the support server or by using the b!suggest command.<br><br>The features most appreciated by Beebop users are its simple and powerful music system, its server backup system, its different games, its giveaways system and its lounge system :)",

  contact: "You can contact me on any of following links:<br><a href='https://discord.gg/U2VGrkT' class='succeess link'>My Discord server</a>, <a href='https://github.com/SimonLeclere' class='succeess link'>My Github</a>",

  beebop: ":)",

  commands: "Beebop possède actuellement plus d'une centaine de commandes.",

  "what are u doing step bro": "mmh",

  "hack.exe": "hack.exe<br><br>Getting credit card informations...<br>done.<br><br>processing login data...<br>done.<br><br>target computer infection...<br>done.<br><br>Hack successfully completed."
};


const BLACKLISTED_KEY_CODES = [ 38 ];
let userIInput, terminalOutput;

const app = () => {
  userIInput = document.getElementById("userIInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="succeess">➜</span> <span class="diirectory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userIInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    if(input === "clear") {
      userIInput.innerHTML = "";
      terminalOutput.innerHTML = "<div class=\"terminal-line\"><span class=\"help-msg\"><pre>██████╗ ███████╗███████╗██████╗  ██████╗ ██████╗ \n██╔══██╗██╔════╝██╔════╝██╔══██╗██╔═══██╗██╔══██╗\n██████╔╝█████╗  █████╗  ██████╔╝██║   ██║██████╔╝\n██╔══██╗██╔══╝  ██╔══╝  ██╔══██╗██║   ██║██╔═══╝ \n██████╔╝███████╗███████╗██████╔╝╚██████╔╝██║     \n╚═════╝ ╚══════╝╚══════╝╚═════╝  ╚═════╝ ╚═╝     \n\n</pre><br>Welcome to the Beebop presentation page — Type <span class=\"code\">help</span> for a list of supported commands.</span></div>";
      return
    }
    execute(input);
    userIInput.innerHTML = "";
    return;
  }

  userIInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userIInput.innerHTML = userIInput.innerHTML.slice(
    0,
    userIInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);