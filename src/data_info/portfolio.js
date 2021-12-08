import square from '../images/square.png'
import ifymarket from '../images/ifymarket.png'
import airbnb from '../images/airbnb.png'
import globtopus from '../images/globtopus.png'

export const portfolio_details = [
    {
        title: 'ifyMARKET.com',
        description: 'Instead of building calculator app for my portfolio, I decided to build something ' +
            'where I could use my previous experience so I decided to create a platform for local ' +
            'producers, suppliers, growers to sell online.',
        url: 'https://www.ifymarket.com/business/',
        technologies: 'Python, Flask, MongoDB, Heroku, Firebase, Nginx, HTML, Stripe, CSS, Javascript, jQuery, leaflet.js...',
        image: ifymarket,
        features: [
            'CMS with fully featured online store',
            'Stripe connected account for businesses to accept online payments on the platform',
            'Multiple team members access, several access levels',
            'Assigning orders directly on the orders map',
            '...'
        ]
    },
    {
        title: 'Demo airbnb',
        description: 'Full-Stack demo booking application ',
        url: 'https://mk-react-flask.herokuapp.com',
        technologies: 'Reactjs, Python/Flask, MongoDB, Firebase, HTML, CSS, Javascript,',
        image: airbnb,
        features: ['Searching for the perfect room',
            'Booking the room',
            'Preview of my bookings']
    },
    {
        title: 'globtopus.com',
        description: 'How are you today?',
        url: 'http://www.globtopus.com',
        technologies: 'Python, Flask, MongoDB, Javascript, HTML, CSS, jQuery',
        image: globtopus,
        features: ['Project from CodeInstitute',
        'Attempt to find out how does the world feel...;-)',
        'Currently under re-development']
    },

]