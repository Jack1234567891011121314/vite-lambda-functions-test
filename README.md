# Getting Started

This template is designed to let you try running BOTH a vite server AND a lambda function server simultaneously.

The lambda functions run ON A SERVER. Therefore, they can access SECRETS (which you don't want to expose to your end users). Also, they use NODE, which is SERVER-SIDE JavaScript and therefore doesn't have access to browser APIs such as windows, elements, and so on.

Open two separate terminals to fire each one up independently...

1. Fire up the lambda function server on port 9000
npm run serve-lambda

2. Fire up the vite process to serve HTML...
npm run serve-vite

3. Open the vite port (4173). Assuming everything works correctly, you should be able to click the test link and see 
that you have both the vite server AND the lambda server up and running (all paths that start .netlify/functions/ should get
redirected to the lambda functions)

## But why?
What is the point of this repository?

We are making sure that we can 

1. serve vite + lambda functions in a dev environment 
2. serve up the same through NETLIFY.

Once you have this working well in CODESPACES, you will want to deploy to netlify where you will need to make sure netlify knows about your functions directory.

You will want to set an environmental variable called SECRET in netlify.

When you are done, you will have a function which magically multiplies a number entered by your user by a "secret" number not exposed in JavaScript and returns the product.

Is this secure? Assuming your users can't do long division, yes! But otherwise, no, it's just meant as a demonstration.

In the real world, any server-side task requiring a secret (like verifying who your user is, accessing a database, etc) would require this kind of setup.