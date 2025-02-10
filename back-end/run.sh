#!/bin/bash

#flatpak run rest.insomnia.Insomnia

sudo docker start mongodb
sudo docker ps

npm run dev
