import { useState } from 'react'
import React from 'react'
import AuthPage from './pages/AuthPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import SelectTemplate from './pages/SelectTemplate'
import CreateTemplate from './pages/CreateTemplate'
import {ConfigProvider, Space } from 'antd';
import LandingPage from './pages/LandingPage'
import EditPage from './pages/EditPage'
import { useAuthContext } from './context/authContext'

function App() {
  const {auth}=useAuthContext()
  return (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#160042',
      },
    }}
  >
      <Routes>
        <Route path='/login' element={<AuthPage/>} />
        {/* {auth?.accessToken ? ( */}
          <>
            <Route path='/select-template' element={<SelectTemplate/>} />
            <Route path='/create-template' element={<CreateTemplate/>}/>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/edit/:id' element={<EditPage/>}/>
          </>
          {/* ) : ( 
        <Route path='*' element={<Navigate to={"/login"}/>} />
        )} */}
      </Routes>
  </ConfigProvider>

  )
}

export default App
