import { v4 as uuidv4 } from 'uuid';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Weather Application',
    desc:
      'An application to track Weather data of your place. I developed the website',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Blog Website',
    desc:
      'An informational Blogging website made up with the Templates and Framework of BootStrap.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Online Calculator',
    desc: 'Using Basic HTML and CSS advance styling',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Portfolio Website',
    desc: 'Self Portfolio using React , React Hooks and Basic HTML CSS',
    img: CavinImg,
  },
];

export default projects;
