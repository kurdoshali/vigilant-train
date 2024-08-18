document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const publicationId = window.location.pathname.split('/').pop(); // Extract publication ID from URL

    fetch(`/api/publications/${publicationId}`)
        .then(response => response.json())
        .then(publication => {
            console.log(publication)
            document.getElementById('publication-title').textContent = publication.title;
            document.getElementById('publication-author').textContent = publication.author;
            document.getElementById('publication-description').textContent = publication.description;
            document.getElementById('publication-published_date').textContent = new Date(publication.published_date).toLocaleString();
            document.getElementById('publication-image').textContent = publication.picture_url;
            document.getElementById('publication-link').textContent = publication.link_url;
        })
        .catch(error => {
            console.error('Error fetching publication:', error);
        });
});