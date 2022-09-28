import gql from 'graphql-tag'

export const projectQuery = gql`
  query project {
    project {
      id
      name
      properties {
        priceRange {
          min
          max
        }
        surfaceRange {
          min
          max
        }
        exposures
        typologies
      }
    }
  }
`

export const mutationSetup = gql`
  mutation upsertSetup($setup: SetupInput!) {
    upsertSetup(setup: $setup)
  }
`
