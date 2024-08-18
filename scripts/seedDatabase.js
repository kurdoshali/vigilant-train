const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://kurdoshali:gwu_iop_db2024@localhost:5432/gwu_iop_db');
const Event = require('../models/event')(sequelize, DataTypes);
const Publication = require('../models/publication')(sequelize, DataTypes);
async function seedDatabase() {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: true }); // Drop and recreate the tables

        const events = [
            { title: 'Event 1', description: 'Description for event 1', start_date: new Date('2024-08-01T10:00:00Z'), end_date: new Date('2024-08-01T14:00:00Z'), location: 'Location 1' },
            { title: 'Event 2', description: 'Description for event 2', start_date: new Date('2024-08-02T14:00:00Z'), end_date: new Date('2024-08-02T14:00:00Z'), location: 'Location 2' },
            { title: 'Event 3', description: 'Description for event 3', start_date: new Date('2024-09-03T14:00:00Z'), end_date: new Date('2024-09-03T14:00:00Z'), location: 'Location 3' },
            { title: 'Event 4', description: 'Description for event 4 longer description to test for formatting with longer description', start_date: new Date('2024-09-04T14:00:00Z'), end_date: new Date('2024-09-04T14:00:00Z'), location: 'Location 4 longer location' },
            // Add more events as needed
        ];

        for (const eventData of events) {
            const event = await Event.create(eventData);
            console.log('Event created:', event);
        }
        const publications = [
            {
                title: 'Publication 1',
                description: 'Description for publication 1',
                published_date: new Date('2023-07-01'),
                author: 'Author 1',
                picture_url: 'https://via.placeholder.com/150',
                link_url: 'https://example.com/publication1'
            },
            {
                title: 'Publication 2',
                description: 'Description for publication 2',
                published_date: new Date('2023-07-02'),
                author: 'Author 2',
                picture_url: 'https://via.placeholder.com/150',
                link_url: 'https://example.com/publication2'
            },
            {
                title: 'Publication 3',
                description: 'Description for publication 3',
                published_date: new Date('2023-07-03'),
                author: 'Author 3',
                picture_url: 'https://via.placeholder.com/150',
                link_url: 'https://example.com/publication3'
            },
            {
                title: 'Publication 4',
                description: 'Description for publication 4',
                published_date: new Date('2023-07-04'),
                author: 'Author 4',
                picture_url: 'https://via.placeholder.com/150',
                link_url: 'https://example.com/publication4'
            },
            {
                title: 'Publication 5',
                description: 'Description for publication 5',
                published_date: new Date('2023-07-05'),
                author: 'Author 5',
                picture_url: 'https://via.placeholder.com/150',
                link_url: 'https://example.com/publication5'
            },
            {
                title: 'Publication 6',
                description: 'Description for publication 6',
                published_date: new Date('2023-07-06'),
                author: 'Author 6',
                picture_url: 'https://via.placeholder.com/150',
                link_url: 'https://example.com/publication6'
            },
            {
                title: 'Publication 7',
                description: 'Description for publication 7',
                published_date: new Date('2023-07-07'),
                author: 'Author 7',
                picture_url: 'https://via.placeholder.com/150',
                link_url: 'https://example.com/publication7'
            },
            {
                title: 'Publication 8',
                description: 'Description for publication 8',
                published_date: new Date('2023-07-08'),
                author: 'Author 8',
                picture_url: 'https://via.placeholder.com/150',
                link_url: 'https://example.com/publication8'
            },
            {
                title: 'Publication 9',
                description: 'Description for publication 9',
                published_date: new Date('2023-07-09'),
                author: 'Author 9',
                picture_url: 'https://via.placeholder.com/150',
                link_url: 'https://example.com/publication9'
            }
        ];
        
        for (const publicationData of publications) {
            const publication = await Publication.create(publicationData);
            console.log('Publication created:', publication);
        }

        console.log('Database seeding completed.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await sequelize.close();
    }
}

seedDatabase();