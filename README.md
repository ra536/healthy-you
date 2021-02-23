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
