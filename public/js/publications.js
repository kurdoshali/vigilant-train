document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/publications')
        .then(response => response.json())
        .then(publications => {
            const publicationsContainer = document.getElementById('publications-container');

            publications.forEach(publication => {
                console.log(publication);
                const publicationElement = document.createElement('div');
                publicationElement.className = 'book-item';

                publicationElement.innerHTML = `
                    <a href="/publication/${publication.id}">
                        <img src="${publication.picture_url}" alt="Book Cover">
                        <p><strong>${publication.title}</strong></p>
                        <p>${publication.author}</p>
                    </a>
                `;

                publicationsContainer.appendChild(publicationElement);
            });
        })
        .catch(error => {
            console.error('Error fetching publications:', error);
        });
});