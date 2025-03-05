#!/bin/bash

echo 'Run back-end...'

cd back-end/docker
sudo docker compose up -d

cd ../../

clear

echo 'Run front-end...'

cd front-end/docker
sudo docker compose up -d

cd ../../

clear

echo '> Front-end runing on: http://localhost:3000'
echo '> Back-end runing on: http://localhost:3333'
echo '> MongoDB runing on: mongodb://mongodb:27017/mac'
echo "-----------------------------------------------------"

read -p "Shut down containers? [Y]: " response

if [ "$response" = "y" ] || [ "$response" = "Y" ] || [ "$response" = "yes" ]; then
    cd front-end/docker
    sudo docker compose down

    cd ../../
    
    cd back-end/docker
    sudo docker compose down

    cd ../../

    clear

    echo "Completed!"
fi