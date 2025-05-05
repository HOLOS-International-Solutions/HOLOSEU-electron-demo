from sqlalchemy import Column, Integer, String, DateTime, func
from pydantic import BaseModel, constr
from typing import Annotated
from datetime import datetime
from app.config.db import Base


# SQLAlchemy model for farm table
class Farm(Base):
    __tablename__ = "farms"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(100), index=True)
    comment = Column(String(500), index=True)
    location = Column(String(100), index=True, default='NOT_SET') 
    date_created = Column(DateTime(timezone=True), server_default=func.now())
    date_modified = Column(DateTime(timezone=True), onupdate=func.now(), server_default=func.now())

    
# Pydantic model for validation farm creation inputs
class FarmCreate(BaseModel):
    name: Annotated[str, constr(min_length=1, max_length=100)]
    comment: Annotated[str, constr(min_length=1, max_length=500)]
    location : Annotated[str, constr(min_length=1,max_length=100)] = "NOT_SET"
    
    class Config:
        orm_mode = True


# Pydantic model for defining output for get operations
class FarmRead(BaseModel):
    id: int
    name: str
    comment: str
    location: str
    date_created: datetime
    date_modified: datetime

    class Config:
        orm_mode = True
