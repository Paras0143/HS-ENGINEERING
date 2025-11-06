# Dark Mode Debugging Steps

## Step 1: Check if dark class is being added
1. Open your site in browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Type: `document.documentElement.classList`
5. Click the theme toggle button
6. Type again: `document.documentElement.classList`
7. You should see "dark" appear in the list

## Step 2: Check if toggle function is being called
1. Look at Console tab
2. Click theme toggle button
3. You should see:
   - "Current theme: light"
   - "toggleTheme called, current theme: light"
   - "Switching from light to dark"

## Step 3: Manually test dark mode
1. In Console, type: `document.documentElement.classList.add('dark')`
2. Press Enter
3. Does the page turn dark? 
   - YES = Toggle logic is broken
   - NO = Tailwind dark mode not working

## If Step 3 shows NO (Tailwind not working):
The issue is that Tailwind CSS is not generating dark mode classes.

Run this command in your terminal:
```
npm run dev
```

Then check if you see any errors about Tailwind.
