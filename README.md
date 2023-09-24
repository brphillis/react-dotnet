**React/Typescript + ASP.NET Integration by Brock Phillis**

I have created this project to very easily integrate a single react application into a ASP.NET project (will work across any project that can serve data to the frontend), i made this while coming up for a solution for integrating react into a .NET based CMS.

While troubleshooting I noticed alot of developers using multiple react applications across the same project where integration was complicated, this solution allows you to use one react application across your project. This works using react portals and context for data communication and can easily be modified to use a state management libary like Redux or Zustand.

The example components include can be rendered seperately in any part of your project and maintain communication throughout the same application.

**Step 1: Project Upload**

1. Begin by placing the React project to the root directory of your main project. Ensure that the React project is located under the "React" folder in the root directory of your main project.

**Step 2: Include React in Your Layout File**

2. In your main layout file (e.g., "\_Layout.cshtml" for ASP.NET Razor Pages), you can easily integrate your React application using the following div and script tag
   (your may be different, you need to find your react build file source):

```html

<div id="root" />

<script src="~/React/dist/assets/index-9d91450e.js?v=@( File.GetLastWriteTime(string.Format("{0}/React/dist/assets/index-9d91450e.js", Path.GetDirectoryName(AppDomain.CurrentDomain.BaseDirectory))).ToString("ddMMyyHHmmss"))"></script>
```

This script tag dynamically loads the latest build of your React application.

**Step 3: Register your new component**

3. Navigate to /App.tsx and register your new component in the component map.

**Step 4: Rendering React Components**

4. You can render React components within your .NET views. These components can be placed anywhere in the DOM and can receive data via props.
   (lowercase element name in your view)

**Example:**

```html
<navbar items="@Model.NavBar.Items" day="Thursday"></navbar>
```

In this example, we're rendering a `NavBar` React component and passing data to it via props. You can use server-side code (like `@Model.NavBar.Items`) or string data (like `"Thursday"`) to populate the component's props.
