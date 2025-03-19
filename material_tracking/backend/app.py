from flask import Flask
from strawberry.flask.views import GraphQLView
from schema import schema
from database import Base, engine

app = Flask(__name__)

# Создаем таблицы в БД
Base.metadata.create_all(bind=engine)

# Подключаем GraphQL
app.add_url_rule("/graphql", view_func=GraphQLView.as_view("graphql", schema=schema))

if __name__ == "__main__":
    app.run(debug=True)
npx create-react-app frontend --template typescript