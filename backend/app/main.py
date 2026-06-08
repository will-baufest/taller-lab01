from fastapi import FastAPI, HTTPException, status

from app.auth import (
    ACCESS_TOKEN_EXPIRE_SECONDS,
    authenticate_user,
    create_access_token,
    create_refresh_token,
    decode_token,
)
from app.models import RefreshRequest, RefreshResponse, TokenRequest, TokenResponse

app = FastAPI(
    title="JWT Auth API",
    description="FastAPI application implementing JWT authentication",
    version="0.1.0",
)


@app.post("/token", response_model=TokenResponse, status_code=status.HTTP_200_OK)
def login(request: TokenRequest):
    """
    Authenticate with username and password to receive a JWT access token
    (expires in 300 seconds) and a refresh token.
    """
    user = authenticate_user(request.username, request.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    access_token = create_access_token(data={"sub": user["username"]})
    refresh_token = create_refresh_token(data={"sub": user["username"]})

    return TokenResponse(
        access_token=access_token,
        refresh_token=refresh_token,
        token_type="bearer",
        expires_in=ACCESS_TOKEN_EXPIRE_SECONDS,
    )


@app.post("/token/refresh", response_model=RefreshResponse, status_code=status.HTTP_200_OK)
def refresh_token(request: RefreshRequest):
    """
    Exchange a valid refresh token for a new JWT access token.
    """
    payload = decode_token(request.refresh_token)

    if payload is None or payload.get("type") != "refresh":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired refresh token",
            headers={"WWW-Authenticate": "Bearer"},
        )

    username = payload.get("sub")
    if username is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token payload",
            headers={"WWW-Authenticate": "Bearer"},
        )

    access_token = create_access_token(data={"sub": username})

    return RefreshResponse(
        access_token=access_token,
        token_type="bearer",
        expires_in=ACCESS_TOKEN_EXPIRE_SECONDS,
    )
