# MEAN Stack 

MEAN (full) stack application which comprises of MongoDB, ExpressJS, Angular and NodeJS. 


Docker Compose is used to create 3 separate containers (frontend, api, database, loadbalancer)

## Angular

frontend contains the Angular App

## Expressjs

Api folder contains REST apis which is developed using expressjs

## Mongo DB Connection

Update the connection string, in api/server.js like below:

## NGINX

NGINX loadbalancer.
The frontend and api are exposed on the same port.


If running mongodb remotely (Like hosted db on mlab) :
`"connectionString": "mongodb://username:password@ds056789.mlab.com:56789/dbName"`

## How to run project

To run the project run below command:

`docker-compose up`
