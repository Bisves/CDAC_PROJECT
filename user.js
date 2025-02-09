import axios from 'axios'
import { createUrl } from '../utils'

export async function login(email, password) {
    try {
      // create the url
      const url = createUrl('user/sign-in')
  
      // create the request body
      const body = {
        email,
        password,
      }
  
      // call the API
      const response = await axios.post(url, body)
  
      // get the response body
      return response.data
    } catch (ex) {
      return { status: 'error', error: ex }
    }
  }