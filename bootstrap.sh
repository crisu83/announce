#!/usr/bin/env bash

# Install git
apt-get install -y git

# Install screen
apt-get install -y screen

# Install MongoDB
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | tee /etc/apt/sources.list.d/10gen.list
apt-get update
apt-get install mongodb-10gen

# Install node.js
apt-get install -y python-software-properties python g++ make
add-apt-repository ppa:chris-lea/node.js
apt-get update
apt-get install -y nodejs

# Install Yeoman, Grunt, BOWER and generators globally
npm install -g yo grunt-cli bower generator-angular
cd /vagrant

# Install rest of the modules
npm install