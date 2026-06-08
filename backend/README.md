# JWT Auth API — Backend

FastAPI application implementing JWT-based authentication with token refresh support.

## Stack

| Tool | Purpose |
|------|---------|
| Python 3.11 | Runtime |
| FastAPI | Web framework |
| python-jose | JWT encoding/decoding |
| bcrypt | Password hashing |
| Poetry | Dependency management |
| Uvicorn | ASGI server |
| Docker / Docker Compose | Containerised deployment |

---

## Endpoints

### `POST /token` — Login

Authenticate with username and password to obtain a JWT access token (expires in **300 seconds**) and a refresh token.

**Request body (JSON):**
```json
{
  "username": "admin",
  "password": "admin123"
}
```

**Response:**
```json
{
  "access_token": "<jwt>",
  "refresh_token": "<jwt>",
  "token_type": "bearer",
  "expires_in": 300
}
```

---

### `POST /token/refresh` — Refresh Access Token

Exchange a valid refresh token for a new access token.

**Request body (JSON):**
```json
{
  "refresh_token": "<your-refresh-token>"
}
```

**Response:**
```json
{
  "access_token": "<new-jwt>",
  "token_type": "bearer",
  "expires_in": 300
}
```

---

## Running with Docker Compose (recommended)

```bash
# Optionally set a strong secret key (recommended in production):
export SECRET_KEY="your-strong-random-secret"

# From the backend/ directory:
docker compose up --build
```

The API will be available at **http://localhost:8000**.

Interactive docs (Swagger UI): **http://localhost:8000/docs**

---

## Running locally with Poetry

### Prerequisites

- Python 3.11+
- [Poetry](https://python-poetry.org/docs/#installation)

### Install dependencies

```bash
cd backend
poetry install
```

### Start the server

```bash
poetry run uvicorn app.main:app --reload
```

---

## Running tests

```bash
poetry run pytest
```

---

## Project structure

```
backend/
├── app/
│   ├── __init__.py
│   ├── auth.py        # JWT helpers & user validation
│   ├── main.py        # FastAPI routes
│   └── models.py      # Pydantic schemas
├── tests/
│   └── test_main.py
├── Dockerfile
├── docker-compose.yml
├── pyproject.toml
└── README.md
```
