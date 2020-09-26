var Service = require("node-windows").Service;
const server = require("./server");

// Create a new service object
var svc = new Service({
  name: "application as Windows Service",
  description: "application as Windows Service",
  script: "server",
});

svc.on("uninstall", function () {
  svc.stop();
  console.log("Uninstall complete.");
  console.log("The service exists: ", svc.exists);
});

svc.uninstall();

// svc.on("install", () => {
//   console.log("Installing first time");
//   svc.start();
//   exit();
// });

// svc.on("alreadyinstalled", () => {
//   svc.stop();
//   svc.uninstall();
// });

// svc.on("uninstall", () => {
//   svc.install();
// });

// svc.install();

// svc.on("alreadyinstalled", () => {
//   console.log("Inside the Already installed bloc");
//   svc.stop();
//   svc.uninstall();
// });

// svc.on("uninstall", () => {
//   console.log("again installing");
//   svc.install();
// });

// svc.install();

// svc.on("install", function () {
//   svc.start();
//   // svc.exit();
// });

// svc.install();
// svc.exit();

// svc.on("uninstall", function () {
//   svc.start();
//   svc.stop();
//   console.log("uninstall");
//   // exit();
// });

// svc.uninstall();

// Listen for the "install" event, which indicates the

// process is available as a service.
//STARTING THE SERVICE
// svc.on("install", function () {
//   svc.start();
// });

// svc.on("uninstall", function () {
//   console.log("uninstall");
// });

// svc.on("alreadyinstalled", () => {
//   svc.stop();
//   // svc.uninstall();
// });

// // svc.on("uninstall", () => {
// //   svc.install();
// // });

// // svc.install();

// // svc.on("uninstall", function () {
// //   console.log("Uninstall complete.");
// //   console.log("The service exists: ", svc.exists);
// // });

// svc.install();
// // svc.alreadyinstalled();
// // svc.uninstall();

// svc.install();

// svc.on("install", () => {
//   svc.start();
// });

// svc.on("alreadyinstalled", () => {
//   svc.stop();
//   svc.uninstall();
// });

// svc.on("uninstall", function () {
//   console.log("Uninstall complete.");
//   console.log("The service exists: ", svc.exists);
//   svc.install();
//   exit();
// });

// svc.on("uninstall", () => {
//   svc.install();
// });

// svc.on("alreadyinstalled", () => {
//   // svc.stop();
//   svc.start();
//   // svc.install();
//   // svc.uninstall();
// });

// svc.alreadyinstalled();
