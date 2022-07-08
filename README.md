## Bagsiden

0. cd backend
1. npm i
2. sudo mongod --dbpath=/Users/kristianmeier/data/db
3. node seed.js
4. node index.js

## Forsiden

1. npm i
2. npm start

## Yderligere Info

1. In backend/config/default.json - Choose if Authentication should be enabled.
2. Check and manipulate data in Mongodb atlas
3. Check in postman/browser om alle http://localhost:3900/api/genres og http://localhost:3900/api/practices kan ses
4. Til production skal denne i en env. export vidly_jwtPrivateKey=yourSecureKey

## Test

1. npm test
