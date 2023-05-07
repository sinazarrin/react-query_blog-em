import React from 'react'
import { Posts } from './Posts'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Blog posts</h1>
      <Posts />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App