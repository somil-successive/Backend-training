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
