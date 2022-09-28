<p align="center" style="margin: 0 auto">
  <img height="80" src="https://res.cloudinary.com/habx/image/upload/logos/habx-framed.png" />
</p>

# Front-end technical test 👨‍💻

<details>
  <summary>Click to read the original assignment</summary>

The objective of this test is to see how you adapt to our technologies and our way of coding, potentially integrating new concepts for you. We expect you to consider the test as a task you could be given during a sprint.

The goal of this test is to recreate a housing setup like we have at
[habx](https://www.habx.com/fr/). It should take you less than 2 hours but feel free to take more time if you still have something to show us!

<p align="center" style="margin: 0 20%">
  <img height="200" src="https://res.cloudinary.com/habx/image/upload/tech/front-test/setup.png" />
</p>

This repository is the template of the test, you are asked to complete
it to fill all the requirements.

## How to start the test

Fork the repo and clone it, then:

```shell
  npm ci
  npm start
```

When you're done you can just send us the repository link 👨‍🏫

## Requirements

### Description

The component should be a form with 4 fields:

- **Budget** (price in euros)
- **Surface** (area in square meters)
- **Typology** (nb of rooms) _one option possible_
- **Exposure** (north, south, east, west) _multiple options possible_

The form should have a minimum of _validation_ and be _based on project
properties_ that should be fetched from the api.

User inputs have to be saved with the `upsertSetup` mutation with all
required values.

That's it ! ⛳️

### Tech

We ask you to use [React](https://github.com/facebook/react) with [apollo-client](https://github.com/apollographql/react-apollo) to make
your GraphQL API calls. 👮‍♂️

### Nice to have

Pick at least one among the following

- use [Typescript](https://github.com/microsoft/TypeScript) in strict mode (you can generate graphql types by running `npm run build:types`) 🤓
- do some animations with tools you like 💃
- test the application: you can use `jest` or even `cypress` if you
  want 🤹‍♀️

#### Recommended libraries

Here are some libraries we use daily, but you can use whatever you want ! 😉

- [@habx/ui-core](https://github.com/habx/ui-core) our UI components
  library ✨
- [styled-components](https://github.com/styled-components/styled-components) 💅
- [final-form](https://github.com/final-form/react-final-form) 🎛

You could start by editing the `Setup` component. You are free to imagine the UI/UX. 👨‍🎨

## Feedbacks

Any thoughts about our development environment ? (create-react-app/graphql...)
What tools are you using daily ?

## API

The api is mocked client side and is described bellow

### Graphql API

[Graphql schema](./src/api/schema.graphql)

#### Project query

```graphql
query {
  project {
    id
    name
    properties {
      priceRange
      surfaceRange
      exposures
      typologies
    }
  }
}
```

#### Setup mutation

```graphql
mutation ($setup: SetupInput!) {
  upsertSetup(setup: $setup)
}
```

If you have any question, don't hesitate to ask our team 🤘

Good luck ! 🤗

</details>

## Live version

This test has been deployed and you can [check it out here](https://habx-front-test.vercel.app/).

## Tech used

Everything was already set up within the project.

- typescript
- create-react-app
- habx ui-core (concrete)
- final-form
- styled-components
- apollo client & graphQL

## Running locally

- Clone the repo
- Execute `npm install`
- Execute `npm run start`
- Open http://localhost:3000

## Steps and thought process

The test took me about 5 hours to complete.

Here are the steps I took to complete it:

1. Read the assignment, clone the repo, check out the codebase.
2. Try to understand how Apollo works. It was my first experience with it. Almost everything was set up, I just had to read the offical documentation and complete small parts to make everything work.
3. Build a simple interface with Concrete (without form validation yet). I checked out the documentation and browsed the Storybook to find the right components for my use-case.
4. Split the code into smaller (non-reusable) components.
5. Add form validation with final-form. I struggled on some parts, but eventually ended up making it all work as I wanted.
6. Deploy on vercel and write this README.

Along the way I added `styled-reset`, a "CSS reset" package for styled-components.

I also added a prettier config file `.prettierrc.json` to match the eslint config, and also edited `tsconfig.json` to take into account my custom type declarations from `types.d.ts`.

## Potential improvements

Since I decided to use the packages and tools included in the project, I knew I was going to spend more time getting to know these tools. Because of this, I didn't have time to add tests or animations. Oh, and it's not responsive...

## Feedbacks

Concrete is a great library, with a nice documentation and a neat Storybook.

I had a hard time using `final-form` for form validation, especially for the checkboxes. It felt a bit weird to use as I'm more used to `react-hook-form` and I think that their API is clearer and more flexible.

Other than that, the development experience was enjoyable!
