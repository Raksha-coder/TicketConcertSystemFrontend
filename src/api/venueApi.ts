import axiosInstance from './axiosInstance';

const GET_ALL_VENUES = 'api/Venue/getVenueList'; 
const CREATE_VENUE = 'api/Venue/createVenue'; 

export const getAllVenues = async (): Promise<any> => {
  debugger;
  const response = await axiosInstance.get<any>(GET_ALL_VENUES);
  return response.data;
};

export const createVenue = async (venueData: {
  name: string;
  location: string;
  capacity: number;
}): Promise<any> => {
  debugger;
  const response = await axiosInstance.post(CREATE_VENUE, venueData);
  return response.data;
};