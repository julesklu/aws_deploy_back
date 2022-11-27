#!/bin/bash

cd

curl -sL https://deb.nodesource.com/setup_18.x -o /tmp/nodesource_setup.sh

sudo bash /tmp/nodesource_setup.sh

sudo apt-get install nodejs

sudo apt-get install unzip

# Create a dedicated directory for the application
sudo mkdir -p /var/app

# Get the app from S3
wget https://github.com/julesklu/aws_deploy_back/archive/refs/tags/1.0.0.tar.gz

# Unzip it into a specific folder
sudo unzip app.zip -d /var/app/
cd /var/app/aws_deploy_back-1.0.0

# Install dependencies
sudo npm install

#Start the app
sudo npm start