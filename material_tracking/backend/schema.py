import strawberry
from strawberry.sqlalchemy.mapper import StrawberrySQLAlchemyMapper
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Client, Invoice, Transaction

mapper = StrawberrySQLAlchemyMapper()

@mapper.type(Client)
class ClientType:
    id: int
    name: str
    markup: float

@mapper.type(Invoice)
class InvoiceType:
    id: int
    total: float
    client: ClientType

@mapper.type(Transaction)
class TransactionType:
    id: int
    amount: float
    invoice: InvoiceType

@strawberry.type
class Query:
    @strawberry.field
    def clients(self, info) -> list[ClientType]:
        session: Session = SessionLocal()
        clients = session.query(Client).all()
        session.close()
        return clients

schema = strawberry.Schema(query=Query)
