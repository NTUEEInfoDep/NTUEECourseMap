# NTUEE Course Map

A course map for NTUEE students

## Development

### Prerequisites

install all dependencies

```sh
# NTUEECourseMap
pnpm install:all
```

### Frontend

install dependencies

```sh
# NTUEECourseMap/frontend
pnpm install
```

start the frontend(default at `localhost:5173`)

```sh
# NTUEECourseMap/frontend
pnpm dev
```

### Backend

copy `.env.development` to `.env`

```sh
# NTUEECourseMap/backend
cp .env.development .env
```

spin up database

```sh
# NTUEECourseMap
docker compose -f docker-compose.yml up -d
```
and paste the following to `.env`
```sh
DATABASE_URL="postgresql://user:password@localhost:5432/NTUEECourseMap?schema=public"
```

setup: install dotenv-cli and ts-node globally

```sh
# NTUEECourseMap/backend
pnpm setup
```

prisma generate and migrate

```sh
# NTUEECourseMap/backend
pnpm generate
pnpm migrate
```

#### run the backend(default at `localhost:5000`)

```sh
# NTUEECourseMap
pnpm backend
```

#### adminer at port 8080, or run

```sh
# NTUEECourseMap/backend
pnpm studio
```

## For a fresh start
If you have initialized the database before, and you want to get a clean database, you should follow the steps below:

1. shutdown the database with `docker compose -f docker-compose.yml down`
2. Delete the `NTUEECourseMap/backend/prisma/migrations` folder
3. follow the steps above to initialize the database again
