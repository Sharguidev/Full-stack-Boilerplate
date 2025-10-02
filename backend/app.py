"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from utils import APIException, generate_sitemap
from admin import setup_admin
from models import db, User
#from models import Person

app = Flask(__name__)
app.url_map.strict_slashes = False

db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

MIGRATE = Migrate(app, db)
db.init_app(app)
CORS(app, resources={
    r"/*": {
        "origins": ["http://localhost:3000", "http://localhost:4321","http://localhost:4322"],
        "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization"],
        "supports_credentials": True
    }
})
setup_admin(app)

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    return generate_sitemap(app)

@app.route('/user', methods=['GET'])
def handle_hello():

    response_body = {
        "msg": "Hello, this is your GET /user response "
    }

    return jsonify(response_body), 200

@app.route('/contact', methods=['POST'])
def create_contact():
    body = request.get_json()
    contact = body.get('contact')

    # if contact is None:
    #     raise APIException("You need to specify the request body as json object", status_code=400)
    
    required_fields = ['name', 'last_name', 'email', 'address', 'phone', 'is_active']
    if not all (contact.get(field) for field in required_fields):
        return jsonify({"msg": "Missing required fields" + str(required_fields)}), 400

    if User.query.filter_by(phone=contact['phone']).first():
        return jsonify({"msg": "Phone is taken"}), 400

    if User.query.filter_by(email=contact['email']).first():
        return jsonify({"msg": "Email is taken"}), 400

    new_contact = User(
        name=contact['name'],
        last_name=contact['last_name'],
        email=contact['email'],
        address=contact['address'],
        phone=contact['phone'],
        is_active=contact['is_active']
    )

    db.session.add(new_contact)
    db.session.commit()

    return jsonify(new_contact.serialize()), 201


@app.route('/contact', methods=['GET'])
def get_contacts():
    contacts = User.query.all()
    return jsonify([contact.serialize() for contact in contacts]), 200

#Get contact by email, name or phone number

@app.route('/search', methods=['GET'])
def get_contact():

    search_term = request.args.get('q')

    if not search_term:
        return jsonify({"msg": "Please provide a name or an email or a phone number"}), 400

    contacts = User.query.filter(
        (User.name.ilike(f'%{search_term}%')) |
        (User.email.ilike(f'%{search_term}%')) |
        (User.phone.ilike(f'%{search_term}%'))
    ).all()
    
    if not contacts:
        return jsonify({"msg": "Contact not found"}), 404
    
    return jsonify([contact.serialize() for contact in contacts]), 200

@app.route('/contact/<int:id>', methods=['PUT'])
def update_contact(id):
    body = request.get_json()
    contact = User.query.get(id)

    if not contact:
        return jsonify({"msg": "Contact Not Found"}), 404

    if not body:
        return jsonify({"msg": "No Data Entry"}), 404

    contact.name = body.get('name', contact.name)
    contact.last_name = body.get('last_name', contact.last_name)
    contact.email = body.get('email', contact.email)
    contact.address = body.get('address', contact.address)
    contact.phone = body.get('phone', contact.phone)
    contact.is_active = body.get('phone', contact.is_active)

    db.session.commit()
    return jsonify(contact.serialize()), 200

@app.route('/contact/<int:id>', methods=['DELETE'])
def delete_contact(id):
    contact = User.query.get(id)

    if not contact:
        return jsonify({"msg": "No contact found"}), 404
        
    db.session.delete(contact)
    db.session.commit()
    return jsonify({"msg": "User deleted successfully"}), 200
    

# this only runs if `$ python src/app.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3000))
    app.run(host='0.0.0.0', port=PORT, debug=False)
