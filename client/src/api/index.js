import axios from 'axios'
import {config} from '../config/urlConfig.js'

const URL = config.url
//sign up APi

export const loginAdminAPI = (sendData) =>axios.post(`${URL}/user`, sendData);

export const loginUserAPI = (sendData) =>axios.post(`${URL}/user`, sendData);

export const loginMinistryAPI = (sendData) =>axios.post(`${URL}/user`, sendData);

export const CustomloginAdminAPI = (sendData) =>axios.post(`${URL}/user`, sendData);

export const CustomloginUserAPI = (sendData) =>axios.post(`${URL}/user`, sendData);

export const CustomloginMinistryAPI = (sendData) =>axios.post(`${URL}/user`, sendData);

//Sign in APi

export const loginUser = (sendData) => axios.post(`${URL}/user/login`, sendData);

export const loginAdmin = (sendData) => axios.post(`${URL}/user/login`, sendData);

export const loginMinistry = (sendData) => axios.post(`${URL}/user/login`, sendData);

//Appointment API
