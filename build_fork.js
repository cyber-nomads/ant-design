const package = require('./package.json')
const {writeFileSync} = require('fs');
const {execSync} = require('child_process')

const commands = {
    "lastCommit": "git log --pretty=format:'%h' -n 1",
    "rmDistFolder": "rm -rf dist/",
    "build": "npm run build:original > build.log"
}

const timestamp = new Date().getTime()
const lastCommit = execSync(commands.lastCommit)

console.log("Build fork process start...")
console.log(`- Info: last git commit hash: ${lastCommit}`)
console.log(`- Info: timestamp: ${timestamp}`)

console.log("Removing previous builds...")
execSync(commands.rmDistFolder)

console.log("Renaming the repo for build...")
package.name = "antd"
package.version = `${package.version.split("-")[0]}-${timestamp}-${lastCommit}`
writeFileSync('./package.json', JSON.stringify(package, 4, null))

console.log("Executing a build (can take a while)...")
execSync(commands.build)

console.log("Renaming the repo for publishing...")
package.name = "@cybernomads/antd-fork"


writeFileSync('./package.json', JSON.stringify(package, 4, null))


console.log(`Build fork process has ended. ${package.name}@${package.version} is ready to be published by doing:

\$ npm publish --access public 

You can check the details at ./build.log

Thanks and happy coding!

`)