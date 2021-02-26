# Healthy You

## Installation
(For reference, I'm using CentOS 8)
(Most of the starter code was borrowed from https://bezkoder.com/react-node-express-mysql/ for the time being)

Install MySQL
https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-centos-7

Install Node / NPM
https://nodejs.org/en/download/package-manager/#centos-fedora-and-red-hat-enterprise-linux

Run `git clone https://github.com/ra536/healthy-you` and cd into it. 

Run `npm install` to install all node modules in package.json.

You may also have to `cd react-gmf` and also run `npm install` there.

Essentially, our outer file structure is for the back-end, while everything in `react-gmf` is front-end.  The two will communicate with REST API requests.

So far, the database hasn't been set up yet, along with middle-end.


## Steps to run
Make a file in your server directory called .env

Set up environment variables in .env according to the screenshot posted on discord (TODO)

To run the back-end, type node server.js from the server directory.

To run the back-end with nodemon enabled, type npm start from the server directory. (Allows server to update without having to restart it after every change)

To run the front-end, type npm start from the client directory.

## Troubleshooting
If you have not done an npm install recently you may have to follow these steps:

Firstly cd into the server folder and then:

To have your server automatically update without having to restart it, install the package nodemon with npm install nodemon

Install dotenv for management of environment variables with: npm install dotenv