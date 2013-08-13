#!/usr/bin/env bash

# git
apt-get install -y git

# screen
apt-get install -y screen

# mongodb
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | tee /etc/apt/sources.list.d/10gen.list
apt-get update
apt-get install mongodb-10gen

# node.js
apt-get install -y python-software-properties python g++ make
add-apt-repository ppa:chris-lea/node.js
apt-get update
apt-get install -y nodejs

# grunt
npm install -g grunt-cli

# local node modules
cd /vagrant/client && npm install
cd /vagrant/server && npm install
