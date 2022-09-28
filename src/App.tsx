import { ApolloProvider } from '@apollo/client'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import { ThemeProvider, Provider } from '@habx/ui-core'

import { client } from './api/apollo'
import Setup from './Setup'

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  * {
    box-sizing: border-box;
  }
`

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Provider>
        <ApolloProvider client={client}>
          <Setup />
        </ApolloProvider>
      </Provider>
    </ThemeProvider>
  )
}

export default App
