# React, JavaScript, Node.js, and JSX Study Guide


# Node.js

## What is Node.js?

Node.js is a **JavaScript runtime environment**.  That lets us run JavaScript outside the browser.

JavaScript was originally made to run in browsers. Node.js took Chrome’s JavaScript engine, called **V8**, and added server-side abilities such as:

```text
file system access
network requests
HTTP servers
database connections
environment variables
backend APIs
```

Because of Node.js, we can write backend/server code using JavaScript.

## How Node.js Works

Node.js works mainly through the **event loop**, which manages asynchronous callbacks.

Instead of creating a new thread for every request, Node.js uses a **non-blocking** model.

For example, when Node.js reads a file or waits for a database response, it does not freeze the whole program. It starts the task, continues doing other work, and comes back when the task is done.

If a Node.js program has no pending work, it exits automatically.

---

# React

## What is React?

React is a JavaScript library for building user interfaces using **components**.

A **component** is a reusable piece of UI (just like functions in other languages)

Instead of manually changing the DOM again and again, React lets us describe what the UI should look like for a given state.

React’s main idea is:

```text
State changes
↓
Component re-renders
↓
React compares the new UI with the old UI
↓
React updates only the necessary DOM parts
```

---

# DOM 

The **DOM** means **Document Object Model**.

It is the browser’s internal tree-like representation of your HTML page.

For example, this HTML:

```html
<body>
  <h1>Hello</h1>
  <button>Click me</button>
</body>
```

becomes a DOM tree like:

```text
document
└── html
    └── body
        ├── h1
        └── button
```

Each part of this tree is a **node**. Some nodes are **elements**.

An **element** is usually an HTML tag on the page, such as:

```html
<div></div>
<p></p>
<button></button>
<input />
<img />
```

A **DOM element** is an actual HTML element that exists in the browser page, such as a button, div, input field, heading, etc.

# React DOM, React Native, and Virtual DOM

## React DOM

**React DOM** is the package that connects React to the browser DOM (React DOM is for the browser)
## React Native

**React Native** lets developers use React concepts to build mobile apps for iOS and Android (React Native is for mobile (android, IOS))
## Virtual DOM

The **Virtual DOM** is a lightweight description of what the UI should look like.

---

# JSX conversion into JS 

Browsers do not understand JSX directly.

JSX code gets compiled by tools like **Babel**, **Vite**, **Webpack**, or frameworks like **Next.js** into normal JavaScript.

---

# React Root

The React root controls rendering inside a specific DOM container.

Example:

```js
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(element);
```

This line:

```js
const container = document.querySelector("#root");
```

means:

```text
Find the place in the HTML page where the React app should go.
```

This line:

```js
const root = createRoot(container);
```

means:

```text
Let React manage this DOM container.
```

This line:

```js
root.render(element);
```

means:

```text
Put this React UI into that container.
```

Usually, your HTML has something like:

```html
<div id="root"></div>
```

React takes control of this div and renders the app inside it.

---

# React Component Lifecycle

React components go through three main phases:

```text
Mount
Update
Unmount
```

## Mount

**Mount** means the component appears on the screen for the first time.

## Update

**Update** means the component re-renders because state, props, or context changed.

## Unmount

**Unmount** means the component is removed from the screen.

A component unmounts when React stops rendering it.

---

# JSX

JSX stands for **JavaScript XML**.

JSX is a syntax extension for JavaScript, commonly used with React to create user interfaces. It lets developers write HTML-like structures directly inside JavaScript code.

The easiest way to spot JSX is to look for tags like these inside JavaScript:

```jsx
<div>
<p>
<button>
<input />
<ComponentName />
```

## Why Use JSX?

We use JSX because it makes React UI easier to write, read, and maintain.

Without JSX, React elements are written like this:

```js
const element = React.createElement(
  "div",
  { className: "card" },
  React.createElement("h1", null, "Hello"),
  React.createElement("p", null, "Welcome to React")
);
```

With JSX, the same UI becomes:

```jsx
const element = (
  <div className="card">
    <h1>Hello</h1>
    <p>Welcome to React</p>
  </div>
);
```

JSX is easier to understand because it looks similar to the UI we are trying to create.

---

# JSX vs HTML

JSX looks like HTML, but it eventually gets converted into JavaScript. Because of this, there are some important differences.

## `class` vs `className`

In HTML:

```html
<div class="card"></div>
```

In JSX:

```jsx
<div className="card"></div>
```

## `for` vs `htmlFor`

In HTML:

```html
<label for="email">Email</label>
```

In JSX:

```jsx
<label htmlFor="email">Email</label>
```

## CamelCase Attributes

In HTML:

```html
<button onclick="handleClick()">Click</button>
```

In JSX:

```jsx
<button onClick={handleClick}>Click</button>
```

Other examples:

```text
autoplay  → autoPlay
tabindex  → tabIndex
onclick   → onClick
```

## Self-Closing Tags

In HTML, this is allowed:

```html
<img src="image.png">
```

In JSX, it should be:

```jsx
<img src="image.png" />
```

## Inline Styles

In HTML:

```html
<h1 style="font-size: 2rem; color: red;">Hello</h1>
```

In JSX:

```jsx
<h1 style={{ fontSize: "2rem", color: "red" }}>
  Hello
</h1>
```

The first pair of curly braces enters JavaScript mode. The second pair creates a JavaScript object.

---

# JSX vs Template Languages

Template languages, such as Handlebars, EJS, or Pug, help us write dynamic UI, but they work differently from JSX.

A template language usually takes:

```text
a template + data → HTML string
```

Example with Handlebars:

```handlebars
<div>
  {{#if user}}
    <h1>{{user.name}}</h1>
  {{/if}}
</div>
```

This uses special template syntax like:

```text
{{#if}}
{{#each}}
{{user.name}}
```

JSX is different because it compiles to JavaScript, not directly to an HTML string.

In React, we write:

```jsx
<div>
  {user && <h1>{user.name}</h1>}
</div>
```

This uses normal JavaScript logic.

Simple comparison:

```text
Template language = separate mini-language for generating HTML
JSX = HTML-like syntax that becomes JavaScript
```

---

# Expression Slots

In React, **expression slots** are the curly brackets `{ }` inside JSX.

They let us insert JavaScript values or expressions into HTML-like JSX.

We use expression slots because JSX needs a way to switch from “HTML-like markup” back into **JavaScript mode**.

The main purpose is:

```text
Expression slots make JSX dynamic.
```

Without expression slots, JSX would mostly be static text.

Example without expression slot:

```jsx
const element = (
  <div>
    Items left to purchase: shoppingList.length
  </div>
);
```

This would literally show:

```text
Items left to purchase: shoppingList.length
```

Example with expression slot:

```jsx
const shoppingList = ["apple", "banana", "carrot"];

const element = (
  <div>
    Items left to purchase: {shoppingList.length}
  </div>
);
```

React evaluates:

```js
shoppingList.length
```

and displays:

```text
Items left to purchase: 3
```

---

# Expressions and Statements

## Expression

An **expression** is JavaScript code that produces a value.

Examples:

```js
1
"hello"
5 * 10
num > 100
isHappy ? "happy" : "sad"
[1, 2, 3].pop()
```

## Statement

A **statement** performs an action or instruction.

Examples:

```js
let hi = 5;

if (hi > 10) {
  console.log("Greater than 10");
}
```

Statements do not directly produce a value in the same way expressions do.
This matters in JSX because JSX expression slots only accept expressions, not statements.

---
# Conditional Rendering

## Using `if`

You cannot write an `if` statement directly inside JSX expression slots.

Wrong:

```jsx
function Friend({ name, isOnline }) {
  return (
    <li>
      {if (isOnline) {
        <div className="green-dot" />
      }}
      {name}
    </li>
  );
}
```

This is invalid because `if` is a statement, not an expression.

Correct:

```jsx
function Friend({ name, isOnline }) {
  let prefix;

  if (isOnline) {
    prefix = <div className="green-dot" />;
  }

  return (
    <li>
      {prefix}
      {name}
    </li>
  );
}
```

Here, the `if` runs before the return. JSX only receives the value stored in `prefix`.

## Using `&&`

The `&&` operator is useful when we want to render something only if a condition is true.

```jsx
{isOnline && <div className="green-dot" />}
```

This means:

```text
If isOnline is true, render the green dot.
If isOnline is false, render nothing.
```

`&&` is like a shorter version of:

```jsx
{isOnline ? <div className="green-dot" /> : null}
```

Important note: the left side of `&&` should ideally be a boolean.

## Using the Ternary Operator

Use a ternary when you need an `if/else` choice.

```jsx
{isOnline ? <p>Online</p> : <p>Offline</p>}
```

---

# Iteration in React

React does not have its own special loop syntax inside JSX.

Instead, React uses normal JavaScript.

The most common way to render a list is with **`.map()`.**

## `for` Loops and JSX

A `for` loop is a statement, so you cannot directly put it inside JSX expression slots.

Wrong:

```jsx
<ul>
  {for (let user of users) {
    <li>{user}</li>
  }}
</ul>
```

Correct with a loop before return:

```jsx
function App() {
  const listItems = [];

  for (let user of users) {
    listItems.push(<li key={user}>{user}</li>);
  }

  return <ul>{listItems}</ul>;
}
```

Most React developers prefer `.map()` because it is shorter and returns an array directly.

---
# Props

Props are data passed into a component, similar to arguments passed into a function.

Example:

```jsx
function Button({ variant }) {
  return <button>{variant}</button>;
}

<Button variant="primary" />
<Button variant="secondary" />
```

---

# Children Prop

The `children` prop is whatever you put between a component’s opening and closing tags.

Children lets us pass content into a component.

Example:

```jsx
function Button({ children }) {
  return (
    <button>
      {children}
    </button>
  );
}
```

Usage:

```jsx
<Button>Save</Button>
```

Here, `children` is:

```text
Save
```

React passes `"Save"` into the `Button` component as `children`.

---
# State

State is data remembered inside a component that can change over time.

State is used when something in the UI needs to change while the app is running.

Example:

```jsx
const [hasAgreed, setHasAgreed] = React.useState(false);
```

This means:

```text
At first, the user has not agreed.
```

So initially:

```js
hasAgreed = false;
```

Then a checkbox can use that state:

```jsx
<input
  id="confirm-checkbox"
  type="checkbox"
  checked={hasAgreed}
  onChange={() => setHasAgreed(!hasAgreed)}
/>
```

This part:

```jsx
checked={hasAgreed}
```

means:

```text
If hasAgreed is true, the checkbox is checked.
If hasAgreed is false, the checkbox is unchecked.
```

This part:

```jsx
onChange={() => setHasAgreed(!hasAgreed)}
```

means:

```text
When the user clicks the checkbox, flip the value.
```

That is state. It changes while the app is running.

---

# Forms in React

Forms in React are used to collect input from the user, such as:

```text
text
email
password
checkboxes
radio buttons
dropdowns
search queries
login details
signup data
```

The web platform provides many form controls, including:

```text
text inputs
textareas
radio buttons
checkboxes
select dropdowns
range sliders
color pickers
```

---

#  React 19

# 1. Actions 
Actions are functions, usually asynchronous, that handle data mutations and user interactions.

Actions simplify form submission and async updates by helping with:

```text
pending states
errors
form submissions
optimistic updates
```

## Older React Form Handling

In older React, form submission was usually handled manually with:

```text
onSubmit
event.preventDefault()
useState for input values
useState for loading/pending
useState for errors
try/catch/finally
```

---

# 2. Hooks and APIs

React 19 introduced useful hooks and APIs for Actions and forms.

## `useActionState`

`useActionState` helps manage state that comes from an Action.

Most real forms need to show a result, error, or validation message. `useActionState` helps with this.

It returns three things:

```text
current state   → current result of the action
form action / dispatch function → function passed to the form action prop
Ispending boolean  → true while the action is running
```

## `useFormStatus`

`useFormStatus` helps child components know whether a form is currently pending.

This is useful for submit buttons inside forms.

## `useOptimistic`

`useOptimistic` helps show optimistic UI before the server confirms the change.

Example: showing a new comment immediately before the server has fully saved it.

---

# 3. Server Components 

Another big React 19 change is that **Server Components became stable** for frameworks that support them.

Server Components existed experimentally before, but React 19 made them stable.

Comparison:

```text
Normal Client Component:
Browser downloads JS → JS runs in browser → UI appears

Server Component:
Server runs component → sends result to browser → less JS needed in browser
```

Instead of sending JavaScript to the browser and making the browser fetch data, wait, and build the UI, the server can fetch the data first, prepare the component output, and then send a lighter result to the browser.

Server Components are useful for:

```text
fetching data
reading from databases
rendering non-interactive UI
reducing client-side JavaScript
```

---

# 4. Other Improvements

React 19 also added smaller quality-of-life improvements.
## Document Metadata

React 19 improves document metadata support.

You can put things like `<title>` and `<meta>` inside components, and React can manage them better.

Before this, many apps used libraries like React Helmet for this kind of behavior.

---

# Components

A component is a reusable piece of UI.

React components are like functions, but instead of returning normal values, they return JSX/UI.

---

# Component Instances

Whenever we render a component in React, we create a **component instance**.

---
# Fragments

A React Fragment lets us group multiple elements without creating an extra DOM element.

Syntax:

```jsx
<>
  ...
</>
```

Example:

```jsx
function App() {
  return (
    <>
      <h1>Welcome to my homepage!</h1>
      <p>Don't forget to sign the guestbook!</p>
    </>
  );
}
```

## Why Fragments Were Introduced

A React component must return one parent thing.

This gives an error:

```jsx
function App() {
  return (
    <h1>Welcome to my homepage!</h1>
    <p>Don't forget to sign the guestbook!</p>
  );
}
```

It is like trying to return two separate things:

```text
return thingOne
return thingTwo
```

One fix is to use a `<div>`:

```jsx
function App() {
  return (
    <div>
      <h1>Welcome to my homepage!</h1>
      <p>Don't forget to sign the guestbook!</p>
    </div>
  );
}
```

But sometimes adding a `<div>` is not ideal because it adds an extra real element to the DOM.

Example problem:

```jsx
function ListItems() {
  return (
    <div>
      <li>Item 1</li>
      <li>Item 2</li>
    </div>
  );
}
```

If this is used inside a `<ul>`, the final HTML becomes invalid:

```html
<ul>
  <div>
    <li>Item 1</li>
    <li>Item 2</li>
  </div>
</ul>
```

A `<ul>` should have `<li>` elements directly inside it, not a random `<div>`.

Fragments solve this:

```jsx
function ListItems() {
  return (
    <>
      <li>Item 1</li>
      <li>Item 2</li>
    </>
  );
}
```

---

# Arrow Functions

Arrow functions are a shorter, modern way to write functions.

They use `=>` instead of the `function` keyword.

Traditional function:

```js
function add(a, b) {
  return a + b;
}
```

Arrow function:

```js
const add = (a, b) => {
  return a + b;
};
```

Shorter arrow function:

```js
const add = (a, b) => a + b;
```
---

# Returning Nothing in React

If a component should render nothing, use:

```jsx
return null;
```

React will render nothing for `null`.

React also ignores `false` and `undefined` in many rendering situations, but `null` is the clearest and most common choice.

Be careful with `0`:

```jsx
return 0;
```

React will render `0` on the screen.

Simple rule:

```text
Use return null when you intentionally want to render nothing.
Do not use return 0 unless you actually want to display 0.
```

---
