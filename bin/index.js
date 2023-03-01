#! /usr/bin/env node

import path from 'path'
import fse from 'fs-extra'
import getPackages from './package.js'
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));



var prompt = launchedFromCmd() ? '>' : '$'
function createAppName(pathName) {
    return path.basename(pathName)
        .replace(/[^A-Za-z0-9.-]+/g, '-')
        .replace(/^[-_.]+|-+$/g, '')
        .toLowerCase()
}

function emptyDirectory(dir, fn) {
    fse.readdir(dir, function (error, files) {
        if (error && error.code !== 'ENOENT') throw error
        fn(!files || !files.length)
    })
}

function launchedFromCmd() {
    return process.platform === 'win32' &&
        process.env._ === undefined
}

async function createApplication(name, destination) {
    console.log("Creating a new project 🌪️🌪️🌪️")

    if (destination !== '.') {
        fse.mkdir(destination, (error) => error && console.error(error))
    }
    console.log("🪜")


    // copy source folder to destination
    try {
        fse.copySync(__dirname + '/../template', destination)
        console.log("🪜")
    } catch (error) {
        console.error(error)
    }

    console.log("🪜")
    console.log('✅ The Project has been created successfully! 🎉')
    console.log('👉 To get started, run the commands below:')

    if (destination !== '.') {
        console.log('   %s cd %s', prompt, destination)
    }
    console.log('   %s npm install', prompt,)
    console.log('   %s npm run start-dev', prompt)
    process.exit(0)
}


const destinationPath = process.argv[2] || '.';
const appName = createAppName(path.resolve(destinationPath));

// Generate application
emptyDirectory(destinationPath, function (empty) {

    if (empty) {
        createApplication(appName, destinationPath)
    } else {
        console.error("❌ The project folder is not empty! \n❗Please try again with an empty folder.")
        process.exit(0)
    }

})





