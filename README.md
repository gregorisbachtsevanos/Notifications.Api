# Notification.Api

## Overview

This repository contains the backend code for the Notification Service of the [Milestone](https://github.com/gregorisbachtsevanos/Milestone.Client) project. Utilizing Express.js and TypeScript, this service manages all notification-related functionalities, including the scheduling and delivery of alerts for task deadlines, milestones, and other important project events. By integrating with MongoDB, it supports flexible and varied notification types, ensuring timely updates are sent to users via email, SMS, or in-app notifications. This service is essential for keeping teams informed and on track with project timelines.

## Tech Stack

- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB
- **ORM/ODM**: Mongoose
- **Testing**: (Choose one, e.g., Jest, Mocha, etc.)

## Features

- **API Endpoints**
  - POST /notifications
  - GET /notifications/{userId}
  - PUT /notifications/{notificationId}
  - DELETE /notifications/{notificationId}
  
- **Database Management**
  - Store and retrieve notification.
  - NoSQL data handling.

- **Notification System**
  - Schedule and send notifications for task deadlines and progress updates.

- **Responsibilities**
  - Manage notifications for task deadlines, milestones, and reminders.
  - Send notifications via email, SMS, or in-app.
  - Integrate with the roadmap for calendar-based notifications.

## Getting Started

### Prerequisites

- Node.js
- npm
- TypeScript
- MongoDB setup

### Installation

1. **Clone the repository**:
   ```
   git clone https://github.com/gregorisbachtsevanos/Notifications.Api.git
   ```

2. **Create a .env file in the root of your project and add your Firebase config:**
   ```
   VITE_API_URL= 
   VITE_API_URL= 
   ```
   
3. **Install dependencies**:
   ```bash
   cd Notifications.Api
   npm install 
   ```
   
4. **Start the development server**:
   ```
   npm run dev:uat
   ```
   
5. **Start the production server**:
   ```
   npm run dev:prod
   ```
   
### Project Structure
```
src/\
├── controllers/\
├── models/\
├── routes/\
├── middleware/\
├── utils/\
├── services/\
└── app.ts
```

License
This project is licensed under the MIT License - see the LICENSE file for details.
