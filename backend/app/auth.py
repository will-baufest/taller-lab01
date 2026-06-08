from datetime import datetime, timedelta, timezone
from typing import Optional

import bcrypt
import os
from jose import JWTError, jwt

SECRET_KEY = os.environ.get(
    "SECRET_KEY",
    "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7",
)
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_SECONDS = 300
REFRESH_TOKEN_EXPIRE_SECONDS = 60 * 60 * 24 * 7  # 7 days

# Pre-computed bcrypt hash for the admin user.
# To regenerate: python -c "import bcrypt; print(bcrypt.hashpw(b'admin123', bcrypt.gensalt()).decode())"
_ADMIN_HASHED_PASSWORD = b"$2b$12$7TrlECIzJSoHIrsPZM956egdTn9Lh7YW3g1JdOmHg2q6v5Pgi4IQ."

FAKE_USERS_DB = {
    "admin": {
        "username": "admin",
        "hashed_password": _ADMIN_HASHED_PASSWORD,
    }
}


def verify_password(plain_password: str, hashed_password: bytes) -> bool:
    return bcrypt.checkpw(plain_password.encode(), hashed_password)


def authenticate_user(username: str, password: str) -> Optional[dict]:
    user = FAKE_USERS_DB.get(username)
    if not user:
        return None
    if not verify_password(password, user["hashed_password"]):
        return None
    return user


def create_access_token(data: dict) -> str:
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + timedelta(seconds=ACCESS_TOKEN_EXPIRE_SECONDS)
    to_encode.update({"exp": expire, "type": "access"})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)


def create_refresh_token(data: dict) -> str:
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + timedelta(seconds=REFRESH_TOKEN_EXPIRE_SECONDS)
    to_encode.update({"exp": expire, "type": "refresh"})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)


def decode_token(token: str) -> Optional[dict]:
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except JWTError:
        return None
