import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from app.config.config import SQLALCHEMY_DATABASE_URL

# Ensure the SQLite database file exists
if "sqlite" in SQLALCHEMY_DATABASE_URL:
    db_path = SQLALCHEMY_DATABASE_URL.replace("sqlite:///", "")  # Remove the "sqlite:///" prefix to get the path
    if not os.path.exists(db_path):
        os.makedirs(os.path.dirname(db_path), exist_ok=True)  # Create the directory if it doesn't exist
        open(db_path, 'w').close()  # Create the empty SQLite file

# Create engine
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False} if "sqlite" in SQLALCHEMY_DATABASE_URL else {})

# Create session maker
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base for all models
Base = declarative_base()

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
