import { useState } from 'react'
import { UserSearchApp } from './UserSearchApp'
import Articles from './CustomHookPractice/components/Articles'
import WeatherApp from './useQueryPractice/components/WeatherApp'
import CommentForm from './useMutationPractice/components/CommentForm'
import UserManagementApp from './useQueryPractice/components/UserManagementApp'

const App = () => {
  return (
    <>
      <UserManagementApp />
    </>
  )
}

export default App
