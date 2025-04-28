from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.models.farm import Farm, FarmCreate, FarmRead
from app.config.db import get_db  

router = APIRouter()

@router.post("/create-farm", response_model=FarmRead)
def create_farm(farm: FarmCreate, db: Session = Depends(get_db)):
    db_farm = Farm(name=farm.name, location=farm.location, size=farm.size)
    db.add(db_farm)
    db.commit()
    db.refresh(db_farm)
    return db_farm



@router.get("/read-farms", response_model=list[FarmRead])
def read_farms(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    farms = db.query(Farm).offset(skip).limit(limit).all()
    return farms
