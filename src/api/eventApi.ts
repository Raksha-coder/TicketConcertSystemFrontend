import axiosInstance from './axiosInstance';

const CREATE_EVENT = 'api/Event/createEvent'; 

export const createEvent = async (data): Promise<any> => {
  debugger;
  const response = await axiosInstance.post(CREATE_EVENT, data);
  return response.data;
};