// const fs = require('fs');
// const path = require('path');

// let my_path = 'C:\\Users\\umair\\OneDrive\\Desktop\\Programming\\Backend\\video 91 exercise 15 clear the clutter'

// const files = fs.readdirSync(my_path)

// // 1. For each file in `my_path`:

// // a. Get the file's extension.

// files.forEach((file) => {
//     const filePath = path.join(my_path, file)
//     /// Check if it's a file (not a directory)
//     const stats = fs.statSync(filePath);
//     if (stats.isFile()) { // here we check that path ends with files or not
//         // Get the file extension
//         const ext = path.extname(file).toLowerCase();
//         console.log(`${ext.substring(1)}`);

//         // b. Create the destination directory path (e.g., `my_path/ext`).
//         const destinationPath = path.join(my_path,`${ext.substring(1)}`)

//         // c. Check if the destination directory exists.
//         const stat = fs.statSync(destinationPath)
//         if (stat.isDirectory()) {
//             // e. Move the file from `my_path/file` to `my_path/ext/file`.
//         }
//         else{ // d. If not, create it.
//             // e. Move the file from `my_path/file` to `my_path/ext/file`.
//         }
        
//     }
// })

const fs = require('fs');
const path = require('path');

let my_path = 'C:\\Users\\umair\\OneDrive\\Desktop\\Programming\\Backend\\video 91 exercise 15 clear the clutter';

const files = fs.readdirSync(my_path);

// 1. For each file in `my_path`:
files.forEach((file) => {
    const filePath = path.join(my_path, file);

    // Check if it's a file (not a directory)
    const stats = fs.statSync(filePath);
    if (stats.isFile()) {
        // a. Get the file's extension
        const ext = path.extname(file).toLowerCase();
        const extension = ext.substring(1); // Remove the dot from the extension

        // b. Create the destination directory path (e.g., `my_path/ext`)
        const destinationDir = path.join(my_path, extension);

        // c. Check if the destination directory exists
        if (!fs.existsSync(destinationDir)) {
            // d. If not, create it
            fs.mkdirSync(destinationDir);
        }

        // e. Move the file from `my_path/file` to `my_path/ext/file`
        const destinationFilePath = path.join(destinationDir, file);
        fs.renameSync(filePath, destinationFilePath);

        console.log(`Moved: ${file} -> ${destinationFilePath}`);
    }
});

