#!/bin/bash
cp ./binary_ubuntu/* .
export FABRIC_CFG_PATH=$PWD
sh ./link_fabric.sh
# sh ./docker-images.sh
# sleep 5
# docker-compose up -d
