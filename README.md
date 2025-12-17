Bear Collection Manager SPA
This project is a "Bear Minimum" SoftUni ReactJS Exam course work. The pun intends that the project is absolutely inadequate and barely meets the requirements (or doesn't) for passing the ReactJS exam in SoftUni.

Due to lack of time (and skills) this project is a sort of a smashed vase that has been glued together. LLMs have been heavily used in the means of creating it.
Nevertheless the project works as it's supposed to... with a few shortcomings.

Built with React for managing a personal "Bear Collection".
It provides a complete user experience for authentication, resource creation, viewing, and modification (CRUD), demonstrating best practices in React hooks, context-based state management, and asynchronous data fetching.

Features
The application supports a full set of features for registered users and public visitors:

User Authentication & Authorization
Registration: Create a new user account.
Login/Logout: Securely log in and out.
Persistence: User session is persisted across page refreshes using localStorage.
Guarded Routes: Key routes (Create, Edit, MyBears) are protected and require authentication.

Bear Management (CRUD)
Create (/bears/create): Authenticated users can add new bears to the collection using the AddBear component.
Catalog (/bears/catalog): Public route to view all bears.
My Collection (/bears/myBears): View a filtered list of bears owned only by the logged-in user. Includes direct Edit and Delete actions for management efficiency.
Details (/bears/:bearId/details): View individual bear data.
Includes Like/Unlike functionality for authenticated users to engage with content.
Includes Edit and Delete buttons visible only to the resource owner.
Edit (/bears/:bearId/edit): Edit form pre-populated with current bear data, submitting a PUT request to update the record.
DELETE (/bears/:bearId/delete)

***what I did not have time to debug is that when you Edit a bear it gets removed from the user's personal collection MyBears and gets moved into the general catalog collection.

💻 Tech Stack
Frontend: React (functional components and hooks)
Routing: React Router
State Management: React Context API (UserContext) and local state hooks.
API Interaction: Custom useRequest hook for centralized data fetching.
Development Server:  Vite

Core Architecture & Custom Hooks
The application's logic is modularized using custom hooks, centralizing business logic away from components

