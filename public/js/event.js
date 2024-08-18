document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = window.location.pathname.split('/').pop(); // Extract event ID from URL

    fetch(`/api/events/${eventId}`)
        .then(response => response.json())
        .then(event => {
            document.getElementById('event-title').textContent = event.title;
            document.getElementById('event-description').textContent = event.description;
            document.getElementById('event-start').textContent = new Date(event.start_date).toLocaleString();
            document.getElementById('event-end').textContent = new Date(event.end_date).toLocaleString();
            document.getElementById('event-location').textContent = event.location;
        })
        .catch(error => {
            console.error('Error fetching event:', error);
        });
});