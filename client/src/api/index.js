import axios from 'axios';
import { io } from 'socket.io-client';
import store from '../store';
import { addMessage , errorMessge} from '../store/chatSlice';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000',
});

const socket = io('ws://localhost:3000');

// export const getHome = () => httpClient.get('/');
export const getMessages = () => httpClient.get('/');

export const createUser = (values) => httpClient.post('/users', values);

export const createNewMessages = (message) =>
  socket.emit('newMessage', message);

socket.on('newMessage', (message) => {
  store.dispatch(addMessage(message));
});
socket.on('errorMsg', (error) => {  
  store.dispatch(errorMessge(error));
});
