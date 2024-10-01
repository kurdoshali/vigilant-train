const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://kurdoshali:gwu_iop_db2024@localhost:5432/gwu_iop_db');
const Event = require('../models/event')(sequelize, DataTypes);
const Publication = require('../models/publication')(sequelize, DataTypes);
const person = require('../models/person')(sequelize, DataTypes);
async function seedDatabase() {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: true }); // Drop and recreate the tables

        const events = [
            { title: 'Event 1', description: 'Description for event 1', start_date: new Date('2024-08-01T10:00:00Z'), end_date: new Date('2024-08-01T14:00:00Z'), location: 'Location 1', speaker: 'Jane Rowly' },
            { title: 'Event 2', description: 'Description for event 2', start_date: new Date('2024-08-02T14:00:00Z'), end_date: new Date('2024-08-02T14:00:00Z'), location: 'Location 2', speaker: 'Jon Snow' },
            { title: 'Event 3', description: 'Description for event 3', start_date: new Date('2024-09-03T14:00:00Z'), end_date: new Date('2024-09-03T14:00:00Z'), location: 'Location 3', speaker: 'Tierny Lannister' },
            { title: 'Event 4', description: 'Description for event 4 longer description to test for formatting with longer description', start_date: new Date('2024-09-04T14:00:00Z'), end_date: new Date('2024-09-04T14:00:00Z'), location: 'Location 4 longer location', speaker: 'Saul Goodman' },
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

        const people = [
          {
            "name": "Manav Raval",
            "position": "Founder and Director",
            "picture_url": "https://via.placeholder.com/150",
            "major": "International Affairs & Peace Studies",
            "minor": null,
            "hometown": "Florence, New Jersey",
            "biography": "Manav Raval is the Founder and Director of the Institute of Politics. Manav started the Institute to provide politically-minded students with the ability to immerse themselves in politics in various ways. Manav has previously served as a researcher for RTI International, UNESCO, and USAID. He hopes to pursue a doctoral program shortly after graduating. Interested in the field of international development, Manav aims to work closely with locals, organizations, academics, and scholars to tackle development issues throughout his career. Manav is an avid baseball fan, movie buff, and nap participant alongside his dog, Duke. "
          },
          {
            "name": "Amy Saez",
            "position": "Chief Financial Officer",
            "picture_url": "https://via.placeholder.com/150",
            "major": "International Business & Finance",
            "minor": null,
            "hometown": "San Juan, Puerto Rico",
            "biography": "Amy serves as the Chief Financial Officer at the Institute of Politics. Amy joined the Institute of Politics (IOP) as CFO to leverage her financial expertise and leadership skills in a meaningful way. Amy is driven by a desire to create opportunities for students in politics and address the lack of dedicated career advising at GW, contributing to the IOP's mission of inspiring political action and practical learning. Amy is also DC Trek Director for the GW Women in Business. "
          },
          {
            "name": "Lily Vanderlaan",
            "position": "Director of Student Programs",
            "picture_url": "https://via.placeholder.com/150",
            "major": "Political Science",
            "minor": "Psychology and Immigration Studies",
            "hometown": "Fort Myers, Florida",
            "biography": "Lily is IOP’s director of student programs and believes that IOP will provide students with the opportunity to be involved in both local and national politics. She is studying political science, psychology, and immigration studies. She hopes to attend law school to practice immigration law and work with refugees after graduating from GW. She is currently a part of the Phi Alpha Delta legal fraternity, works for the Messina Group Consulting firm, and works as a case assistant for an immigration lawyer."
          },
          {
            "name": "Chase Fredriksen Isaacs",
            "position": "Chief Programming Officer",
            "picture_url": "https://via.placeholder.com/150",
            "major": "Psychological and Brain Sciences",
            "minor": "Cross Cultural Communication and Linguistics",
            "hometown": "New York, NY",
            "biography": "Chase Fredriksen Isaacs serves as the Chief Programming Officer for the Institute of Politics (IOP). She joined IOP with the specific goal of making politics more accessible for individuals who aren’t engaging in political discourse on a daily basis. Chase also serves as the Vice-President for BridgeGW, a multi-partisan political organization on campus that works to decrease polarization across college campuses through moderated discussions. When not engaged in politics, Chase works as a research assistant in The Goodman Emotion and Resilience Lab where she works to further her career in psychology and eventually apply to PhD programs in Clinical Psychology. Her unique background in advocacy, nonprofit work, and knowledge of human behavior allows her to provide a new perspective to politics."
          },
          {
            "name": "Amina Iman",
            "position": "Chief Operating Officer",
            "picture_url": "https://via.placeholder.com/150",
            "major": "International Affairs",
            "minor": "Arabic",
            "hometown": "Alexandria, Virginia",
            "biography": "Amina Iman serves as the Chief Operating Officer for the IOP. Since joining the Institute in June of 2023, Amina has contributed to advancing IOP’s administrative goals as a result of her passion and experience in creating empowering spaces for youth and aspiring professionals in which they are provided the tools and opportunities to succeed, specifically within the realm of political science and diplomacy. Amina also serves as the Director of Government Relations for GW’s leading refugee advocacy organization, No Lost Generation. She has held various research and board-level positions for DMV-based government and non-governmental institutions, granting her valuable experience and critical insight into ensuring her leadership and sociopolitical analytical skills translate into meaningful policy solutions."
          },
          {
            "name": "Belsem Aljobory",
            "position": "Student Chair of Department of Student Task Forces",
            "picture_url": "https://via.placeholder.com/150",
            "major": "International Affairs",
            "minor": "International Business",
            "hometown": "Philadelphia, Pennsylvania",
            "biography": "Belsem Aljobory serves as the Student Chair of the Department of Student Task Forces for the IOP. Belsem joined the Institute to empower other students to transform their ideas into impactful initiatives acting as mini-NGOs. Her experience as a founder of the As We Rise Foundation, combined with her extensive background in international affairs and research, informs her approach to leadership and mentorship to the Student Task Forces within the Institute. Belsem has held various roles in government and non-governmental organizations, which have helped to hone her skills in policy analysis and global engagement. "
          },
          {
            "name": "Skylar Blumenauer",
            "position": "Student Chair of Research Department",
            "picture_url": "https://via.placeholder.com/150",
            "major": "Political Science",
            "minor": "International Affairs, Law and Society",
            "hometown": "Navarre, Ohio",
            "biography": "Skylar Blumenauer serves as the Student Chair of the Research Department for the Institute of Politics. She joined IOP her sophomore year with the hope of improving and increasing the political programming, especially research, that is available to GW students. Skylar is also the Co-Director of the Newsletter in the Women’s Pre-Law Student Association and a writer for the GW Justice Journal, where she has written various small research articles on a variety of political topics. Outside of GW, Skylar works as an Associate at the Pan American Development Foundation."
          },
          {
            "name": "Bryson Handy",
            "picture_url": "https://via.placeholder.com/150",
            "major": "International Affairs and Economics",
            "minor": null,
            "hometown": "Lawrenceville, Georgia",
            "biography": "Bryson Handy is a sophomore who has been involved in the Institute of Politics (IOP) since his freshman year. He believes IOP will provide a space for all students to engage their political interest with peers. Bryson also serves as the Secretary of Young Black Professionals in International Affairs, Director of the Onero Institute Africa Program, and is a Posse Scholar."
          },
          {
            "name": "Mia Adams",
            "picture_url": "https://via.placeholder.com/150",
            "major": "Political Science",
            "minor": "History",
            "hometown": "Easton, Massachusetts",
            "biography": "Mia is a senior at GW and has been involved in IOP since her sophomore year because she values its promotion of civic engagement and political research. Mia is specifically interested in law and policy making, and has internship experience in Congress. She’s also pursuing her Master’s Degree in Legislative Affairs through GW’s dual degree program. In addition to the Institute, Mia is a member of the GW Phi Alpha Delta Pre-Law Fraternity, Issue Captain of the GW Undergraduate Moot Court Team, and has written for The GW Hatchet."
          },
          {
            "name": "Olivia Rosewarne",
            "picture_url": "https://via.placeholder.com/150",
            "major": "Economics and International Business",
            "minor": null,
            "hometown": "Sunderland, Massachusetts",
            "biography": "Olivia has been a member of the IOP since its inception. She believes the IOP not only strengthens the political network for students in related majors but also offers valuable programs for anyone interested in politics. Through its research and student initiatives, the IOP provides opportunities for all students to engage with real-world issues, which Olivia views as significant to student development. She has experience in government roles and a passion for international economic development. Olivia is also the co-president of GW's Women's Club Volleyball team."
          },
          {
            "name": "Hannah Lytle",
            "picture_url": "https://via.placeholder.com/150",
            "major": "Political Science and Criminal Justice",
            "minor": null,
            "hometown": "Kansas City, Missouri",
            "biography": "Hannah is a founding member of IOP. She is passionate about providing students with opportunities to interact with their communities to promote effective change and believes IOP will be an important resource to provide students with the chance to be involved with politics in a more personal way. Hannah is also the president of the Undergraduate GW Moot Court Team and president of the PGP at GW."
          },
          {
            "name": "Shifa Ali",
            "picture_url": "https://via.placeholder.com/150",
            "major": "Political Science",
            "minor": null,
            "hometown": "Long Island, NY",
            "biography": "Shifa is a junior at The George Washington University studying Political Science and Public Health. Shifa joined IOP during her sophomore year and is extremely passionate about public policy, specifically health policy. Shifa is looking forward to working with like-minded students on political projects and conducting research during her time at IOP.  On campus, Shifa is the Director of Member Conduct of Pi Beta Phi’s DC Alpha Chapter and Social Media Director for Dear Asian Youth at GW. She is also interning at a political marketing firm, conducting research and copywriting advertising materials for political action committees."
          },
          {
            "name": "Henry Scriven-Young",
            "picture_url": "https://via.placeholder.com/150",
            "major": "Political Communication",
            "minor": "Chinese and Sustainability",
            "hometown": "Naperville, Illinois",
            "biography": "Henry Scriven-Young has been a dedicated member of the Institute of Politics (IOP) since its inception, contributing to its growth from a small group to an organization with over 20 members. Driven by a passion for politics and leadership, Henry also serves as the Ranking Student on the GW Dining Student Advisory Panel, Director of Membership for the National Residence Hall Honorary (NRHH), and External Vice President of GW’s University Singers. He is proud to be part of an organization that brings inspiring, educational, and exciting opportunities to students."
          },
          {
            "name": "Emely Cespedes",
            "picture_url": "https://via.placeholder.com/150",
            "major": "International Affairs",
            "minor": "Sustainability",
            "hometown": "Upper Saddle River, NJ",
            "biography": "Emely decided to get involved in IOP because of the great potential the institute has to provide incredible experiences for students. These experiences range from research, internships, guest speakers, and trips around the nation's capital. Emely believes IOP creates a bridge that will bring amazing opportunities to students of all backgrounds and political affiliations. Currently, Emely is also the co-director of the newsletter and communications for the Women’s Pre-Law Student Organization. Throughout her time at GW, Emely has been involved in politics through her coursework and internships. Emely hopes to attend law school after graduation to further pursue her passion for politics and law."
          },
          {
            "name": "Grace Newman",
            "picture_url": "https://via.placeholder.com/150",
            "major": "Business Analytics",
            "minor": "Public Policy",
            "hometown": "Western Springs, Illinois",
            "biography": "Grace is a senior at GW and has been involved in IOP since her sophomore year.  Motivated by IOP’s ability to connect students with the political world in numerous subject areas, Grace has worked to bring in students from all backgrounds and interests to the Institute. Grace has worked in corporate finance and analytics. She hopes to work in a forecasting role following graduation.  Outside of academics and working, Grace enjoys going on bike rides and playing cards."
          },
          {
            "name": "Jonesy Strell",
            "picture_url": "https://via.placeholder.com/150",
            "major": "Political Science",
            "minor": null,
            "hometown": null,
            "biography": "Jonesy joined IOP his sophomore year to help create an organization that connects political science students with opportunities for real-world experience and networking. He’s driven by his passion for bridging the gap between academic learning and practical political engagement. He organized two campus town halls featuring government officials to give students a chance to explore careers in politics and build connections with seasoned professionals. Also, serving as a Senator in the George Washington University Student Government Association, Jonesy chairs the Financial Services & Allocations Committee, overseeing the allocation of funds to hundreds of campus clubs."
          }
        ];

        for (const peopleData of people) {
            const p = await person.create(peopleData);
            console.log('Member created:', p);
        }

        console.log('Database seeding completed.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await sequelize.close();
    }
}

seedDatabase();