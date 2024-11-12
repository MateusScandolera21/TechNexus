# database.py
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "postgresql://username:password@localhost/dbname"  # Substitua pelo seu banco de dados

engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"options": "-c timezone=utc"}) # Define o horário com UTC (Tempo Universal Coordenado)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine) # cria uma fábrica de sessões SQLAlchemy.

Base = declarative_base() # cria uma classe base para os modelos.
