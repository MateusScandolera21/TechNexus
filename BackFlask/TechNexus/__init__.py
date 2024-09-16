from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')

    db.init_app(app)
    migrate.init_app(app, db)
    CORS(app)  # Habilitar CORS para permitir conexões de diferentes origens

    from .routes import auth_bp
    app.register_blueprint(auth_bp, url_prefix='/api')

    return app
