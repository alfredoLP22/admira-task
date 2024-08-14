# Admira task

## Setup Instructions

1. Clone the repository: `git clone https://github.com/alfredoLP22/admira-task.git`
2. Navigate to the project directory: `cd admira-task`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`

## Design Choices

- **Architecture:** Separation by folders based on their utility (hooks, views, data, components). Just to clarify, I used fake data based on the information provided in the task description because during the creation of Google Ads and Meta Ads accounts, a credit card was required, which I do not have. Therefore, I used JSON Server for the fake API.
- **Styling:** Utilized Tailwind CSS for familiarity, allowing for design flexibility, along with custom CSS for the modal.
- **State Management:** For the sake of speed, I used props instead of a global state management system.
- **Charts:** Chose Recharts due to its variety of chart types, compatibility, and easy integration with React, as they are designed for use in React (e.g., Recharts).
- **Enviroment variables** Rename .env.example to .env and change VITE_API_URL inside

## Code Comments

- Check the code for inline comments explaining the more complex parts.
