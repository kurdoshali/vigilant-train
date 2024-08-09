const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://kurdoshali:gwu_iop_db2024@localhost:5432/gwu_iop_db');
const Event = require('../models/event')(sequelize, DataTypes);

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

        console.log('Database seeding completed.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await sequelize.close();
    }
}

seedDatabase();