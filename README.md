[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/j48a217e)
Project Title: Refugee Connect
Project Description: RefugeeConnect is a comprehensive platform aimed at bridging the gap between refugees and 
essential services, fostering community support, and empowering refugees to integrate successfully into their new environments. 
This platform will provide a range of services accessible via web applications, catering to the needs of refugees,
service providers, donors, and the wider community.

• Refugee Management (Refugee):
    • CRUD operations for managing refugee profiles.
    • Capture and store refugee details including biometric scans.
    • Categorization of refugees for efficient management.
• Resource Management (Services):
    • CRUD operations for managing essential resources.
    • Filtering resources based on refugee needs.
• Instructor Module (Instructor):
    • Ability to add refugees details including biometric scans to the platform.
• User Engagement (User):
    • Facilitate donation processes.
    • Add Resource Management
    • Access to refugee stories.
    • Browse refugees categorized by needs and location.

Team Member details

Akshay Datir (NUID: 002822621) Aka “AD”
Pranav Kapse (NUID: 002871241) AKA “PK”
Kishor Kashid (NUID: 002833393) AKA “KK”
Swamy Mudiga (NUID: 002826360) AKA “SM”

Milestone 1: Project Selection, Creating Object Model, Identifying REST API resources, and Creating OpenAPI Specification Yaml

Selected Project Topic as per the Professor given link(https://www.un.org/en/global-issues) (Assignee: Everyone)
Create an Object Model for the project using Domain Driven Design (Assignee: Everyone)
REST API creation and Mermaid Code - Refugee (Assignee: AD)
REST API creation and Mermaid Code - Resources (Assignee: KK)
REST API creation and Mermaid Code - Donation (Assignee: SM)
REST API creation and Mermaid Code - User (Assignee: PK)
REST API creation and Mermaid Code - Camp (Assignee: AD)
Created a schema for yaml file for all the above endpoints(Assignee: Everyone)

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
