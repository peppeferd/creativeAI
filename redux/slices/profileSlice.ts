import { createSlice } from '@reduxjs/toolkit'
import { useUser } from '@auth0/nextjs-auth0/client'

const { user, error, isLoading } = useUser()
const userid = user?.sub

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    uid: userid,
    credits: 0,
  } as Profile,
  reducers: {},
})
