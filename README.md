# user-image-upload
## Installation Guide
### Server setup
* Clone the repository
* cd user-image-upload and run
```
   npm i
```
* create `.env` file and add/replace env variables with. See `.env.sample` file
```
    DB_USER=devel
    DB_PASS=ezekevin
    DB_NAME=userImage
    DB_HOST=localhost
    DB_DIALECT=postgres
    ACCESS_KEY_ID=<keyId>
    SECRETE_ACCESS_KEY=<secrete key>
    AWS_BUCKET=intro-files
    TEST_DB_NAME=new
```
* run migrations with
 ``` 
   npm run migrate
 ```
* start server with `npm start`
### Client setup
* In the root project folder, cd client and run `npm i`
* start client server with `npm start`
