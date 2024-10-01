// index.js (main Express app)
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models'); // Import the models directory
const path = require('path');
const app = express();
app.use(bodyParser.json());

app.use(express.static('public'));

// Serve the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'templates', 'index.html'));
});

// Serve the event-specific page
app.get('/event/:id', async (req, res) => {
    const eventId = req.params.id;
    try {
        const event = await db.Event.findByPk(eventId);
        if (event) {
            // In a real scenario, you might use a template engine to dynamically generate HTML here
            console.log('Serving file:', path.join(__dirname, 'public', 'templates', 'event.html'));
            res.sendFile(path.join(__dirname, 'public', 'templates', 'event.html'));
        } else {
            res.status(404).send('Event not found');
        }
    } catch (error) {
        console.error('Error occurred:', error);  // Log the error to the console
        res.status(500).send('Server Error');
    }
});

// Get all events
app.get('/api/events', async (req, res) => {
    console.log('in get request events');
    try {
        const events = await db.Event.findAll();
        
        res.json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: error.message });
    }
});

// Get a single event by id
app.get('/api/events/:id', async (req, res) => {
    try {
        const event = await db.Event.findByPk(req.params.id);
        if (event) {
            res.json(event);
        } else {
            res.status(404).json({ error: 'Event not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/ordered-events', async (req, res) => {
    try {
        const events = await db.Event.findAll({
            order: [
                ['start_date', 'DESC']
            ]
        });
        res.json(events);
    }
    catch (error) {
        res.status(500).json({ error: error.message});
    }
});

app.get('/api/upcoming-events', async (req, res) => {
    try {
        const upcomingEvents = await db.Event.findAll({
            where: {
                start_date: {
                    [db.Sequelize.Op.gte]: new Date() // Filter for events starting today or in the future
                }
            },
            order: [
                ['start_date', 'ASC'] // Order by start_date ascending (earliest first)
            ]
        });
        res.json(upcomingEvents);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all events
app.get('/api/publications', async (req, res) => {
    console.log('in get request publications');
    try {
        const publications = await db.Publication.findAll();
        
        res.json(publications);
    } catch (error) {
        console.error('Error fetching publications:', error);
        res.status(500).json({ error: error.message });
    }
});

// Serve the event-specific page
app.get('/publication/:id', async (req, res) => {
    const publicationId = req.params.id;
    try {
        const publication = await db.Publication.findByPk(publicationId);
        if (publication) {
            // In a real scenario, you might use a template engine to dynamically generate HTML here
            console.log('Serving file:', path.join(__dirname, 'public', 'templates', 'publication.html'));
            res.sendFile(path.join(__dirname, 'public', 'templates', 'publication.html'));
        } else {
            res.status(404).send('Event not found');
        }
    } catch (error) {
        console.error('Error occurred:', error);  // Log the error to the console
        res.status(500).send('Server Error');
    }
});

// Get a single event by id
app.get('/api/publications/:id', async (req, res) => {
    try {
        const publication = await db.Publication.findByPk(req.params.id);
        if (publication) {
            res.json(publication);
        } else {
            res.status(404).json({ error: 'Publication not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/upcoming-publications', async (req, res) => {
    try {
        const publications = await db.Publication.findAll({
            order: [
                ['published_date', 'DESC']
            ]
        });
        res.json(publications);
    }
    catch (error) {
        res.status(500).json({ error: error.message});
    }
});

app.get('/api/people', async (req, res) => {
    try {
      const people = await db.Person.findAll();
      res.json(people);
    } catch (error) {
      console.error('Error fetching People:', error);
      res.status(500).json({ error: error.message, stack: error.stack });
    }
  });
// // Create a new event
// app.post('/api/events', async (req, res) => {
//     try {
//         const { title, description, start_date, end_date, location } = req.body;
//         const newEvent = await db.Event.create({ title, description, start_date, end_date, location });
//         res.json(newEvent);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });


// // Update an event
// app.put('/api/events/:id', async (req, res) => {
//     try {
//         const { title, description, start_date, end_date, location } = req.body;
//         const event = await db.Event.findByPk(req.params.id);
//         if (event) {
//             event.title = title;
//             event.description = description;
//             event.start_date = start_date;
//             event.end_date = end_date;
//             event.location = location;
//             await event.save();
//             res.json(event);
//         } else {
//             res.status(404).json({ error: 'Event not found' });
//         }
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // Delete an event
// app.delete('/api/events/:id', async (req, res) => {
//     try {
//         const event = await db.Event.findByPk(req.params.id);
//         if (event) {
//             await event.destroy();
//             res.status(204).send();
//         } else {
//             res.status(404).json({ error: 'Event not found' });
//         }
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});