# Node.js Installation on Ubuntu using Curl

This guide will walk you through the steps to install Node.js on Ubuntu using curl.

## Prerequisites

- Make sure you have curl installed. If not, you can install it using:

  bash
  sudo apt-get update
  sudo apt-get install curl

## Steps:

1. Update Package Lists

sudo apt update

2. Install Curl

sudo apt install curl

3. Run the Node.js Setup Script

   curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

4. Install Node.js and npm

sudo apt install nodejs

5. To verify the installation, check the Node.js and npm versions:

   bash
   node -v
   npm -v

   This should display the installed Node.js and npm versions.

# Install and set up the latest stable version of POSTMAN.

## Steps:

1.  Add the postman repository

sudo sh -c 'echo "deb https://dl.pstmn.io/download/latest/linux64" > /etc/apt/sources.list.d/postman.list'

2. Import the Postman GPG Key

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61

3. Update the package list

sudo apt-get update

4. Install Postman

sudo apt-get install postman
