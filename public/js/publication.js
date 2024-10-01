document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const publicationId = window.location.pathname.split('/').pop(); // Extract publication ID from URL

    fetch(`/api/publications/${publicationId}`)
        .then(response => response.json())
        .then(publication => {
            console.log(publication)
            document.getElementById('bookTitle').textContent = publication.title;
            document.getElementById('bookAuthor').textContent = publication.author;
            document.getElementById('bookDescription').textContent = publication.description;
            document.getElementById('publishedDate').textContent = new Date(publication.published_date).toDateString();
            // document.getElementById('bookCover').src = publication.picture_url;
            document.getElementById('ctaButton').href = publication.link_url;
        })
        .catch(error => {
            console.error('Error fetching publication:', error);
        });
});