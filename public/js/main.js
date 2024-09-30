async function testApiCalls() {
    // Test All Events
    const allEventsResponse = await fetch('../api/events');
    const allEvents = await allEventsResponse.json();
    console.log('All Events:', allEvents);

    // Test Single Event by ID
    const singleEventResponse = await fetch('../api/events/1');
    const singleEvent = await singleEventResponse.json();
    console.log('Event with ID 1:', singleEvent);

    const allPublicationsResponse = await fetch('../api/publications');
    const allPublications = await allPublicationsResponse.json();
    console.log('All Publications: ', allPublications);

    const allPeopleResponse = await fetch('../api/people');
    const allPeople = await allPeopleResponse.json();
    console.log('All People', allPeople);

}

async function filteredEventsCall() {
    const filteredEventsResponse = await fetch('../api/upcoming-events');
    const filteredEvents = await filteredEventsResponse.json();
    console.log('filtered by date events:', filteredEvents);
}


testApiCalls();
filteredEventsCall();
