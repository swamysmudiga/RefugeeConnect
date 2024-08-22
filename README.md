[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/j48a217e)
# Project Title : Refugee Connect

## Project Description
RefugeeConnect is a comprehensive platform aimed at bridging the gap between refugees and essential services, fostering community support, and empowering refugees to integrate successfully into their new environments. This platform will provide a range of services accessible via web applications, catering to the needs of refugees, service providers, donors, and the wider community.

## User Role Workflow
![Logo](/Users/swamymudiga/IdeaProjects/final-project-refugeeconnect/frontend/refugee-connect/src/images/UserFlowDaigram.png)

## Team Members
- Akshay Datir (NUID: 002822621) - AKA “AD”
- Pranav Kapse (NUID: 002871241) - AKA “PK”
- Kishor Kashid (NUID: 002833393) - AKA “KK”
- Swamy Mudiga (NUID: 002826360) - AKA “SM”
---

## Tech Stack

### Backend
- **[Node.js](https://nodejs.org/)**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **[Express.js](https://expressjs.com/)**: Fast, unopinionated, minimalist web framework for Node.js.
- **[Mongoose.js](https://mongoosejs.com/)**: Elegant MongoDB object modeling for Node.js.
- **[MongoDB](https://www.mongodb.com/)**: NoSQL database for modern, data-driven applications.
- **[Progressive Web App (PWA)](https://web.dev/progressive-web-apps/)**: Web applications that load like regular web pages or websites but can offer user functionalities such as working offline, push notifications, and device hardware access.
- **[Internationalization (i18n)](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization)**: Framework for translating and localizing the app to various languages and regions.

### Frontend
- **[React.js](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[Redux](https://redux.js.org/)**: A Predictable State Container for JS Apps.
- **[MapBox](https://www.mapbox.com/)**: A mapping platform for custom designed maps.
- **[Google API](https://developers.google.com/apis-explorer)**: APIs provided by Google for integrating various services like Maps, Calendar, etc.
- **[DialogFlow](https://cloud.google.com/dialogflow)**: Google's natural language understanding tool to design and integrate a conversational user interface into mobile apps, web applications, devices, and bots.

### <ins>*<span>AI</span>*</ins>
- **[Kommunicate AI](https://www.kommunicate.io/)**: AI-driven customer support automation and chat platform.

### Other
- **[JWT (JSON Web Tokens)](https://jwt.io/)**: A compact, URL-safe means of representing claims to be transferred between two parties for authentication and authorization.
- **[Stripe API](https://stripe.com/docs/api)**: A suite of APIs powering online payment processing and commerce solutions.

---

## Getting Started

To get started with RefugeeConnect:

### Clone the Repository
```bash
git clone https://github.com/yourusername/RefugeeConnect.git
```

### Install Necessary Packages

#### Backend
Navigate to the backend directory and install the required packages:
```bash
cd backend
npm install
```

#### Frontend
Navigate to the frontend directory and install the required packages:
```bash
cd frontend/refugee-connect
npm install
```

### Start the Backend Server
In the backend directory, start the server:
```bash
node server.js
```

### Start the Frontend Application
In a new terminal, navigate to the frontend directory and run the application:
```bash
cd frontend
npm run dev
```
---
## Contact

For any queries or discussions regarding contributions, you can reach out to me via email:

- mudiga.s@northeastern.edu
- swamymudiga2023@gmail.com

---

### Milestone 1: Project Selection, Creating Object Model, Identifying REST API resources, and Creating OpenAPI Specification Yam
1. Selected Project Topic as per the Professor given link ([UN Global Issues](https://www.un.org/en/global-issues)) (Assignee: Everyone)
2. Created an Object Model for the project using Domain Driven Design (Assignee: Everyone)
3. Identified REST API resources and created OpenAPI Specification YAML (Assignee: Everyone)
4. REST API creation - Refugee (Assignee: AD)
5. REST API creation - Resources (Assignee: KK)
6. REST API creation - Donation (Assignee: SM)
7. REST API creation - User (Assignee: PK)
8. REST API creation - Camp (Assignee: AD)

Mermaid code
---
title: RefugeeConnect
---
classDiagram
  class Person{
    +int PersonID
    +string Name
    +int Age
    +string Nationality
    +string Gender
    +DateTime DateOfBirth
    +string Address
    +string PhoneNumber
    +string Email
    +string SocialSecurityNumber
    +string BloodType
  }
  class RefugeeRegistration{
    +string CountryOfOrigin
    +string RefugeeStatus
    +DateTime ArrivalDate
    +string Ethnicity
    +string Religion
    +string LanguagesSpoken
    +string HealthStatus
    +string EducationLevel
    +string Occupation
    +string FamilyStatus
    +bool HasDependents
    +string PreviousLocation
    +string CurrentLocation
    +string LegalStatus
    +string AssistanceNeeded
    +double Height
    +double Weight
  }
  class Instructor{
    +String InstructorRegion
    +String Specialization
    
  }
  class Camp{
    +int CampID
    +String CampName
    +int CampCapacity
    +string Location
    +int Capacity
    +int CurrentOccupancy
    +List<string> Facilities
    +List<string> Services
    +string Management
    +string Status
    +string SecurityLevel
    +string Accessibility
    +List<string> SupportingOrganizations
    +string Infrastructure
  }
  class User{
    +String Username
    +String Password
    +String Email
    +String ContactNo
  }
 
  class Donation{
    +int DonationId
    +String DonorName
    +String DonatedTo
    +int DonationAmount
    +DateTime DonationDate
  }
  class Resource{
    +string Name
    +string Description
    +string Location
    +bool IsAvailable
  }

  class RefugeeStory{
    +int RefugeeID
    +string Title
    +string RefugeeName
    +string Story
  }
  class LoginPage{
    +String Username
    +String Password
    +int PersonID
    +String PersonType
  }

  class FoodDistributionCenter{
    %% +String location
    +int capacity
    +StorageConditions storageConditions

  }
  class WaterPoints{
    %% +String location
    +int capacity
    +boolean functional
    +WaterQuality waterQuality
    +MaintenanceSchedule maintenanceSchedule
  }
  class MedicalClinic{
    %% +String name
    %% +String location
    +List~Doctor~ doctors
    +List~Nurse~ nurses
    +List~Patient~ patients
    +List~Appointment~ appointments
    +String[] services
    +String phoneNumber
    +String emailAddress
  }

  class Doctor {
    +String name;
    +String specialization;
}
class Nurse {
    +String name;
    +int experienceYears;
}
class Patient {
    +String name;
    +int age;
    +String gender;
}
class Appointment {
    +LocalDateTime dateTime;
    +Doctor doctor;
    +Patient patient;
}

  class Accomodations{
    %% +String name;
    %% +String location;
    +int capacity
    +boolean isOccupied
    +double costPerMonth
    +String[] facilities
    +String description
  }
 
  LoginPage "1"--> "1"Person

  Person <|-- User
  Person <|--RefugeeRegistration
  Person <|--Instructor
  Camp"*"<--"1"Instructor

  Donation "*" o-- "1" User
  Resource *-- User

  Camp"1"o-- "1"RefugeeRegistration
  RefugeeRegistration "1"--* "*"RefugeeStory

  Resource <-- FoodDistributionCenter
  Resource <-- MedicalClinic
  Resource <-- Accomodations
  Resource <-- WaterPoints


MedicalClinic o-- Doctor
MedicalClinic o-- Nurse
MedicalClinic o-- Patient
MedicalClinic o--Appointment
Appointment o-- Doctor
Appointment o-- Patient
