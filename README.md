# mongo
MongoDB workshop

## Run docker
docker run -d -p 27017:27017 --name workshop_mongo bitnami/mongodb:5.0


docker exec -it workshop_mongo bash

## Install mongosh

brew install mongosh

## Connect to mongosh

mongosh "mongodb://172.17.0.3:27017"

OR

mongosh




