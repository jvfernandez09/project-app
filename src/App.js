import React, { Component } from 'react'
import { ApolloClient } from "apollo-client"
import { ApolloProvider } from "react-apollo"
import { InMemoryCache } from 'apollo-cache-inmemory'
import { RestLink } from 'apollo-link-rest'
import { setContext } from 'apollo-link-context'

import Routes from './routes'

import './index.css'

const restLink = new RestLink({
  uri: 'https://api.unsplash.com',
  headers: {
    "Content-Type": "application/json"
  },
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(restLink),
  cache: new InMemoryCache()
})


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    )
  }
}

export default App
