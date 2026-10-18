# Sample University Portal (React demo)

A fictional student-portal clone for learning React. All names and numbers are fake.

## Run it
```
npm install
npm run dev
```
Open the link Vite prints (usually http://localhost:5173).

## Where to look
- `src/App.jsx` — the root component; holds the `page` state (useState)
- `src/components/` — Navbar, WelcomeCard, StatCard, ProfileCard, PersonalInfo
- `src/data/mockData.js` — fake data passed down as props
- `src/styles.css` — colors are CSS variables at the top (`:root`)

## Exercises
1. Change `--brand` in styles.css to a new color.
2. Edit the numbers in mockData.js and watch the cards update.
3. Add a fourth `<StatCard />` in App.jsx.
4. Build the "finances" page instead of "Coming soon".
5. Make the menu close when you click outside it.
