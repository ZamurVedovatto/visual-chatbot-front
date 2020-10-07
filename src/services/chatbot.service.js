import http from './http-common';

const getAll = () => {
  return http.get('/chatbot')
}

const deleteAll = () => {
  return http.delete('/chatbotdeleteall')
}

const newMessage = data => {
  return http.post('/chatbot', data)
}

export default {
  getAll,
  deleteAll,
  newMessage
}
