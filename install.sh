#!/bin/bash

# Function to install npm dependencies in a directory
install_dependencies() {
  local dir=$1
  if [ -d "$dir" ]; then
    echo "Installing dependencies in $dir"
    cd "$dir" || exit
    npm install
    cd - || exit
  else
    echo "Directory $dir does not exist."
  fi
}

# Install dependencies in the root directory
echo "Installing dependencies in the root directory"
npm install

# Install dependencies in submodules
install_dependencies "runtime"
install_dependencies "blocks"
install_dependencies "gui"

echo "All dependencies installed."
