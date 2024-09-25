import { existsSync, unlinkSync } from 'fs';
import path from 'path';
import { watch } from 'chokidar';
import AdmZip from 'adm-zip';
 
const folderPath = 'C:\\Users\\RND-06\\Documents\\GitHub\\Clairvoyant_2\\lambda_scripts\\clairvoyant_2_iot_api';
// const folderPath = 'C:\Users\Swajal\Desktop\Clairvoyant_2\lambda_scripts\clairvoyant_2_iot_api';
const zipFilePath = 'C:\\Users\\RND-06\\Documents\\GitHub\\Clairvoyant_2\\lambda_scripts\\clairvoyant_2_iot_api.zip';
 
// Function to create a zip file of the folder
function createZip() {
  const zip = new AdmZip();
  zip.addLocalFolder(folderPath);
  zip.writeZip(zipFilePath);
  console.log(`Created new zip file: ${zipFilePath}`);
}
 
// Function to delete the existing zip file
function deleteZip() {
  if (existsSync(zipFilePath)) {
    unlinkSync(zipFilePath);
    console.log(`Deleted existing zip file: ${zipFilePath}`);
  }
}
 
// Watch for changes in the folder
const watcher = watch(folderPath, {
  ignored: /[\/\\]\./, // ignore dotfiles
  persistent: true
});
 
watcher.on('change', (changedFilePath) => {
  console.log(`File ${changedFilePath} has been changed`);
  createZip();
});
 
watcher.on('add', (addedFilePath) => {
  console.log(`File ${addedFilePath} has been added`);
  createZip();
});
 
watcher.on('unlink', (deletedFilePath) => {
  console.log(`File ${deletedFilePath} has been deleted`);
  createZip();
});
 
watcher.on('unlinkDir', (deletedDirPath) => {
  console.log(`Directory ${deletedDirPath} has been deleted`);
  createZip();
});
 
console.log(`Watching ${folderPath} for changes...`);
 
// Initial zip creation when script starts
createZip();
 
// Monitor script exit to clean up
process.on('exit', () => {
  watcher.close();
});
 
// Monitor interruption signals (Ctrl+C)
process.on('SIGINT', () => {
  watcher.close();
  process.exit();
});
 