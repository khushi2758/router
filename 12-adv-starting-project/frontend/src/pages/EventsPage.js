
import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {

      const data = useLoaderData();
      /*if(data.isError) {
        return <p>{data.message}</p>;
      }*/
      const events = data.events;
      // const events = data.events; // useLoaderData() returns the data returned by the loader function
      return <EventsList events={events} />

 
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
 // return { isError: true, message: 'Could not fetch events.' };
 throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    status: 500,
    statusText: 'Could not fetch events.'
  });
  } else {
   //const resData = await response.json();
   //  return resData.events; // return the data to the loader function


    return response; // return the data to the loader function
    }

}