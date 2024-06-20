#!/bin/bash

# Ensure the script exits on any error
set -e

# Define the submodule directories
submodules=("./runtime" "./blocks" "./gui")

# Add each submodule
for submodule in "${submodules[@]}"; do
    echo "updating submodule $submodule..."
    git submodule init
    git submodule update
done

# Navigate into each submodule directory, publish with yalc, and add to the project
for submodule in "${submodules[@]}"; do
    echo "Publishing $submodule..."
    (cd $submodule && yalc publish)

    # Extract the base name and prepend 'scalez-' to construct the package name
    package_name="scalez-$(basename $submodule)"

    echo "Adding $package_name to the project..."
    yalc add $package_name
done

echo "Submodules added and published successfully."
