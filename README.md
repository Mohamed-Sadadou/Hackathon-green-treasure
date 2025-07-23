# Green Treasure – AI-Powered Eco-Sorting Assistant

**Green Treasure** is an AI-powered web application backend designed to identify real-world objects and determine their recyclability status along with proper sorting procedures. This project was developed during a sustainability-focused hackathon to promote environmental responsibility through technology.

## Project Overview

Green Treasure leverages artificial intelligence to assist users in making informed recycling decisions by:

- **Object Recognition**: Identifying objects through advanced image recognition technology
- **Recyclability Assessment**: Determining whether detected objects can be recycled
- **Sorting Guidance**: Providing specific instructions for proper waste disposal
- **Gamification**: Rewarding environmentally responsible actions through a point-based system

## System Architecture

### Node.js REST API

The backend follows a structured MVC (Model-View-Controller) architecture built with Express.js:

```
BackEnd/
└── API NodeJS/
    ├── Controller/
    │   ├── Categorie.js
    │   ├── Compagnie.js
    │   ├── Products.js
    │   ├── Rewards.js
    │   └── Utilisateur.js
    ├── Models/
    │   ├── BD.js
    │   ├── Categorie.js
    │   ├── Compagnie.js
    │   ├── Products.js
    │   ├── Rewards.js
    │   └── Utilisateur.js
    ├── Routes/
    │   ├── Categorie.js
    │   ├── Compagnie.js
    │   ├── Products.js
    │   ├── Rewards.js
    │   ├── Routes.js
    │   └── Utilisateur.js
    ├── upload/
    │   ├── Categorie/
    │   ├── Compagnie/
    │   ├── Products/
    │   ├── Rewards/
    │   └── Utilisateur/
    ├── package.json
    ├── package-lock.json
    └── server.js
```

### Flask Microservice

A lightweight Python service handles AI inference and object classification:

```
Api Flask/
├── model/
├── __init__.py
├── app.py
└── requirements.txt
```

## Repository Structure

This repository contains a full-stack solution with organized file uploads and modular architecture:

- **Modular MVC Architecture**: Each entity (Categories, Companies, Products, Rewards, Users) has dedicated controller, model, and route files
- **Organized File Storage**: Separate upload directories for different content types
- **AI Integration**: Flask microservice for machine learning inference
- **Database Abstraction**: Centralized database connection and management

## Technology Stack
- **Database**: MongoDB for data persistence
- **AI Service**: Flask microservice for machine learning inference
- **Computer Vision**: Pre-trained model for object detection and classification
- **File Handling**: Multer for image upload processing
- **Architecture Pattern**: MVC (Model-View-Controller)

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- Python 3.8+
- MongoDB

### Node.js API Setup
```bash
cd "BackEnd/API NodeJS"
npm install
node server.js
```

### Flask API Setup
```bash
cd "Api Flask"
pip install -r requirements.txt
python app.py
```

## How It Works

1. **Image Upload**: User submits a photograph of an object
2. **AI Classification**: Flask microservice processes the image and identifies the object type
3. **Database Query**: Node.js API retrieves recyclability information and sorting guidelines
4. **Response Generation**: System provides detailed sorting instructions and disposal recommendations
5. **Gamification**: Users earn points for proper waste sorting behavior

## Use Cases

- **Household Recycling**: Help families properly sort domestic waste
- **Educational Tool**: Teach sustainable practices in schools and communities
- **Corporate Sustainability**: Assist businesses in implementing proper waste management
- **Public Awareness**: Promote environmental responsibility through user engagement

## API Endpoints

The REST API provides endpoints organized by entity:

**Categories Management**
- Category classification and management
- Recyclable material categorization

**Companies Integration**
- Partner company information
- Recycling center partnerships

**Products Recognition**
- Object identification results
- Product recyclability database

**Rewards System**
- User point tracking
- Achievement management
- Gamification features

**User Management**
- User authentication and profiles
- Activity tracking and history

Each entity has dedicated controller, model, and route files, with organized file upload capabilities for images and media content.

## Future Enhancements

- Mobile application development
- Real-time camera integration
- Advanced recycling center location services
- Enhanced gamification features
- Multi-language support

## Contributing

This project was developed during a hackathon environment. Contributions are welcome to improve functionality, add features, or enhance the AI model accuracy.

## Author

**Mohamed Sadadou**  
AI Engineer | Computer Vision Specialist | MERN Stack Developer

## License

This project is open-source and available under the MIT License.

---

**Note**: This application was created as part of a sustainability hackathon initiative to promote environmental awareness and responsible waste management practices.
