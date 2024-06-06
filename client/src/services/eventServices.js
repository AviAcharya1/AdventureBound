import api from './api';

export const createEvent = async (eventData) => {
  const res = await api.post('/events', eventData);
  return res.data;
};

export const getEvents = async () => {
  const res = await api.get('/events');
  return res.data;
};

export const deleteEvent = async (id) => {
  const res = await api.delete(`/events/${id}`);
  return res.data;
};
