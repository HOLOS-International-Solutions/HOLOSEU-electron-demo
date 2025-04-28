from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.orm import declarative_base
from pydantic import BaseModel
from app.config.db import Base




# SQLAlchemy model for Farm
class Farm(Base):
    __tablename__ = "farms"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)  # Auto-generate the ID
    name = Column(String, index=True)
    location = Column(String)
    size = Column(Float)

# Pydantic model for creating a farm (input validation)
class FarmCreate(BaseModel):
    name: str
    location: str
    size: float

    class Config:
        orm_mode = True  # This tells Pydantic to treat SQLAlchemy models as dictionaries

# Pydantic model for reading a farm (output response model)
class FarmRead(BaseModel):
    id: int
    name: str
    location: str
    size: float

    class Config:
        orm_mode = True
