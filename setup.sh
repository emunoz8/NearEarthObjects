#!/bin/bash

# Step 1: Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Step 2: Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "npm is not installed. Please install npm first."
    exit 1
fi

# Step 3: Install Expo CLI if not installed globally
if ! command -v expo &> /dev/null
then
    echo "Expo CLI not found. Installing Expo globally..."
    npm install -g expo
else
    echo "Expo CLI is already installed."
fi

# Step 4: Install dependencies from package.json
echo "Installing dependencies..."
npm install

# Step 5: Set up environment variables (if using .env for sensitive keys)
if [ -f .env ]; then
    echo ".env file found. Setting up environment variables..."
    source .env
else
    echo "No .env file found. Make sure to set up your API keys and other sensitive data if needed."
fi

# Step 6: Start the Expo project
echo "Starting Expo project..."
expo start

# Step 7: Done
echo "Setup completed successfully!"
