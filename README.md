# BE Mini Application for Henan AM Task

This application using NodeJS, Express as the framework, PostgreSQL as the database and Sequelize as the ORM

User allowed to register into this app, and also login to the app.
User can make CRUD feature from this app.

This app already integrated with the frontend app. Make sure you already run the BE app before running the FE app

## Run Locally

Clone the project

```bash
  git clone https://github.com/si-saaref/be-app-desktopip.git
```

Go to the project directory

```bash
  cd be-app-desktopip
```

Install dependencies

```bash
  npm install
```

Create database from your terminal (better use command prompt)

```bash
  createdb db-be-desktopip
```

Create user admin for database (here you will get prompt to set the password)

```bash
  createuser -P -s -e adm-be-desktopip
```

Migrate the table to create it in database

```bash
  npm run migrate
```

Start the server

```bash
  npm run dev
```

## Environment Variables

To run this project, you have to add some variable name to your environment variable `.env` file

Edit file `.env-example` (rename the file to `.env`) and change the variable into

`DB_USERNAME`=`adm-be-desktopip`\
`DB_PASSWORD`=`adm123`\
`DB_NAME`=`db-be-desktopip`\
`DB_DIALECT`=`postgres`\
`DB_HOSTNAME`=`127.0.0.1`

## API Reference

#### Register User

```http
  POST /api/v1/auth/register
```

```bash
Payload Body
{
    "username": "test.dev",
    "email": "test_dev@gmail.com",
    "password": "TestDev123"
}

Example Response
{
    "message": "Register successfully",
    "status": 200,
    "data": {
        "id": 1,
        "email": "test_dev@gmail.com",
        "userName": "test.dev",
        "updatedAt": "2023-12-21T06:58:56.572Z",
        "createdAt": "2023-12-21T06:58:56.572Z"
    }
}
```

#### Login User

```http
  GET /api/v1/auth/login
```

```bash
Payload Body
{
    "email": "test_dev@gmail.com",
    "password": "TestDev123"
}

Example Response
{
    "message": "Login Successfully",
    "status": 200,
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJlbWFpbCI6InRlc3RfZGV2QGdtYWlsLmNvbSJ9LCJpYXQiOjE3MTc5NzQ3MDAsImV4cCI6MTcxODA2MTEwMH0.rr_vZCDp0ElBd8NSGECsKTfq-Tul67AsIlY8H0LXPvg"
    }
}
```

#### Get All List Movie

```http
  GET /api/v1/films
```

```bash
Example Response
{
    "message": "Successfully Get All Films Data",
    "status": 200,
    "data": [
        {
            "id": 2,
            "title": "Dustin Wakwaw",
            "description": "Dustin is the best place",
            "image_thumbnail": "http://dustin.co/dustin-wakwaw",
            "createdAt": "2024-06-10T08:04:26.038Z",
            "updatedAt": "2024-06-10T08:04:26.038Z"
        }
    ]
}
```

#### Add One Film

```http
  POST /api/v1/films
```

```bash
Payload Params
:idFilm = 1

Example Response
{
    "message": "Successfully Get All Films Data",
    "status": 200,
    "data": {
        "id": 2,
        "title": "Dustin Wakwaw",
        "description": "Dustin is the best place",
        "image_thumbnail": "http://dustin.co/dustin-wakwaw",
        "createdAt": "2024-06-10T08:04:26.038Z",
        "updatedAt": "2024-06-10T08:04:26.038Z"
    }
}
```

#### Add One Film

```http
  POST /api/v1/films
```

```bash
Payload Body
{
    "title": "Dustin Wakwaw",
    "description": "Dustin is the best place",
    "image_thumbnail": "http://dustin.co/dustin-wakwaw"
}

Example Response
{
    "message": "Successfully Added Film",
    "status": 201,
    "data": {
        "id": 2,
        "title": "Dustin Wakwaw",
        "description": "Dustin is the best place",
        "image_thumbnail": "http://dustin.co/dustin-wakwaw",
        "updatedAt": "2024-06-10T08:04:26.038Z",
        "createdAt": "2024-06-10T08:04:26.038Z"
    }
}
```

#### Update One Film

```http
  PUT /api/v1/films
```

```bash
Payload Body
{
    "title": "Dustin Tiffasolasido",
    "description": "Dustin is the best place",
    "image_thumbnail": "http://dustin.co/dustin-oweee"
}

Example Response
{
    "message": "Successfully Added Film",
    "status": 200,
    "data": {
        "id": 2,
        "title": "Dustin Tiffasolasido",
        "description": "Dustin is the best place",
        "image_thumbnail": "http://dustin.co/dustin-oweee",
        "updatedAt": "2024-06-10T08:04:26.038Z",
        "createdAt": "2024-06-10T08:04:26.038Z"
    }
}
```

#### Delete One Film

```http
  DELETE /api/v1/films/:idFilm
```

```bash
Payload Params
:idFilm = 2

Example Response
{
    "status": 204,
}
```

## Additional Information

In order to support security awareness,
I have add some dependecies that will protect the application against cyber attacks

These are the feature

- Helmet
- Cors
- Rate Limiter
