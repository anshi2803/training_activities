const { writeFile, copyFile, readFile } = require("fs");
const r1 = require("readline-sync");
// const ob = require("./fileops.js");
const { Script } = require("vm");
const { ReadFile, WriteFile, CopyFile, ListFiles, CreateDirectory, RemoveDirectory } = require("./fileops");

const op = +r1.question("Enter your option");
switch (op) {
  case 1: {
    const filename = r1.question("Enter File name:");
    ReadFile(filename);
    break;
  }
  case 2: {
    const filename = r1.question("Enter file name: ");
    const message = r1.question("Enter message: ");
    WriteFile(filename, message);
    break;
  }
  case 3: {
    const source = r1.question("Enter Source: ");
    const dest = r1.question("Enter Destination: ");
    CopyFile(source, dest);
    break;
  }
  case 4: {
    const dirname = r1.question("Enter Directory name: ");
    ListFiles(dirname);
    break;
  }
  case 5: {
    const path = r1.question("Enter Path of file: ");
    CreateDirectory(path);
    break;
  }
  case 6:{
    const path = r1.question("Enter Path of file: ");
    RemoveDirectory(path);
    break;
  }
}
// module.import={  } from "fileops.js";

