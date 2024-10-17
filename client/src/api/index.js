import axios from 'axios';
import { io } from 'socket.io-client';
import store from '../store';
import { addMessage , errorMessge} from '../store/chatSlice';
import constants from '../constants';
const { NEW_MSG, ERR_MSG } = constants.WS_EVENTS;


const httpClient = axios.create({
  baseURL: 'http://localhost:3000',
});

const socket = io('ws://localhost:3000');

// export const getHome = () => httpClient.get('/');
export const getMessages = () => httpClient.get('/');

export const createUser = (values) => httpClient.post('/users', values);

export const createNewMessages = (message) =>
  socket.emit(NEW_MSG, message);

socket.on(NEW_MSG, (message) => {
  store.dispatch(addMessage(message));
});
socket.on(ERR_MSG, (error) => {  
  store.dispatch(errorMessge(error));
});
