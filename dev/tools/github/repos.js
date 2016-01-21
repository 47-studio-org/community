// This script basically copies any labels from githubLabels.json
// to every repo specified below. It is simple, but it works.
//
// ## Install
// `npm i -g github-labels`
// Add repos to repos[]

const exec = require('child_process').exec
const githubRepos = require('github-repositories')

githubRepos('ipfs').then(data => {
  // manually specify data here if needed
  return data.map((item) => {
    exec('labels -c githubLabels.json ' + item.full_name,
      (error, stdout, stderr) => {
        console.log(`stdout: ${stdout}`)
        console.log(`stderr: ${stderr}`)
        if (error !== null) {
          console.log(`exec error: ${error}`)
        }
      }
    )
  })
})
