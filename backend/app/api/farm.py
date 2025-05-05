from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.models.farm import Farm, FarmCreate, FarmRead
from app.config.db import get_db  

router = APIRouter()

# app/routes/farm.py

@router.post("/create-farm", response_model=FarmRead)
def create_farm(farm: FarmCreate, db: Session = Depends(get_db)):
    db_farm = Farm(
        name=farm.name,
        comment=farm.comment 
    )
    db.add(db_farm)
    db.commit()
    db.refresh(db_farm)
    return db_farm




from fastapi import Query
from sqlalchemy import asc, desc, or_

@router.get("/read-farms", response_model=list[FarmRead])
def read_farms(
    skip: int = 0,
    limit: int = 100,
    search: str = "",
    sort_by: str = "date_modified", 
    sort_order: str = "desc",      
    db: Session = Depends(get_db),
):
    query = db.query(Farm)

    # Filtering
    if search:
        query = query.filter(
            or_(
                Farm.name.ilike(f"%{search}%"),
                Farm.comment.ilike(f"%{search}%"),
                Farm.location.ilike(f"%{search}%")
            )
        )

    # Sorting
    sort_column = {
        "date_created": Farm.date_created,
        "date_modified": Farm.date_modified
    }.get(sort_by, Farm.date_modified)

    if sort_order == "asc":
        query = query.order_by(asc(sort_column))
    else:
        query = query.order_by(desc(sort_column))

    farms = query.offset(skip).limit(limit).all()
    return farms

