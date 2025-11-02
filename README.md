# Exercises — JSONPlaceholder (Users & Posts)

---

## USERS

### 1. Fetch users using the users endpoint and console them in the screen;
	fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(data => console.log("Data content: ", data));
		
### 2. Fetch users using the users endpoint and console table them in the screen;
	fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(data => console.table("Data content (table): ", data));

---

## POSTS

### 1. Fetch users using the posts endpoint and console them in the screen;
	fetch("https://jsonplaceholder.typicode.com/posts")
		.then(response => response.json())
		.then(data => console.log("Data content: ", data));

### 2. Fetch users using the posts endpoint and console table them in the screen;
	fetch("https://jsonplaceholder.typicode.com/posts")
		.then(response => response.json())
		.then(data => console.table("Data content (table): ", data));

### Improvements with the visual

Used `React` to fetch the user data base with a GET HTTP Request, as well as rendering all the users, including id, name, username, email, phone and website.
The design of the page was improved by format all of the data in a table with good formatation and style with `CSS`.
The same precedment was aplied with the post data: used `React` to fetch data with a GET HTTP Request and rendered all the contents like userId, id, title and body in a table.
Then a design was made with the table to display the info neatly.

### Sources 

- Users — https://jsonplaceholder.typicode.com/users
- Posts — https://jsonplaceholder.typicode.com/posts
