let engineIndicatorLight	= "red blinking";
let spaceSuitsOn	= true;
let shuttleCabinReady	= true;
let crewStatus =	spaceSuitsOn && shuttleCabinReady;
let computerStatusCode	= 200;
let shuttleSpeed =	15000;

// 2 -  Engine Indicator Light

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}

// 3a - Crew Status
if (crewStatus) {
  console.log("Crew Ready");
} else {
  console.log("Crew Not Ready");
}

// 3b - Computer Status Code
if (computerStatusCode === 200) {
  console.log("Please stand by. Computer is rebooting.");
} else if (computerStatusCode === 400) {
  console.log("Success! Computer online.");
} else {
  console.log("ALERT: Computer offline!");
}


// 3c - Shuttle Speed
if (shuttleSpeed > 17500) {
  console.log("ALERT: Escape velocity reached!");
} else if (shuttleSpeed < 8000) {
  console.log("ALERT: Cannot maintain orbit!");
} else {
  console.log("Stable speed");
}


// 4a - Predict
if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
   console.log("all systems go");
} else {
   console.log("WARNING. Not ready");
}

// 4b - Predict
if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
   console.log("WARNING. Not ready");
} else {
   console.log("all systems go");
}

let fuelLevel = 21000;
let engineTemperature = 1200;


// 5 Implement the following checks using if/else if/else statements:

// 5 a-f - Fuel level

if (fuelLevel > 20000 && engineTemperature <= 2500) {
  console.log("Full tank. Engines good.");
} else if (fuelLevel  > 10000 && engineTemperature <= 2500) {
  console.log("Fuel level above 50%.  Engines good.");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
  console.log("Fuel level above 25%. Engines good.");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
  console.log("Check fuel level. Engines running hot.");
 } else if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking") {
   consolelog("ENGINE FAILURE IMMINENT!");
 } else console.log("Fuel and engine status pending...")

// 6 Final bit of fun!

let commandOverride = false;

// 6a
if (commandOverride){
  console.log("Shuttle Ready to Launch!");
} else if (fuelLevel > 20000 && engineTemperature <= 2500) {
  console.log("Shuttle Ready to Launch!");
} else console.log("Shuttle is NOT Ready to Launch");

//6b
if (fuelLevel > 20000 && engineIndicatorLight !== "red blinking" || commandOverride === true) {
  console.log("Cleared to launch!");
} else console.log("Launch scrubbed!");

