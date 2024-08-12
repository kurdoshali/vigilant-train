// index.js (main Express app)
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models'); // Import the models directory

const app = express();
app.use(bodyParser.json());

app.use(express.static('public'));
// Get all events
app.get('/api/events', async (req, res) => {
    console.log('in get request events');
    try {
        const events = await db.Event.findAll();
        console.log('Returning events:', events);
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

app.get('/api/upcoming-events', async (req, res) => {
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});