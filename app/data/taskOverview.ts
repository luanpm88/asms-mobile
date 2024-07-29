import {
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
  Avatar7,
  Avatar8,
} from '../data/images';

export const rows = [
  {
    id: 1,
    task: 'Designing Landing Page',
    members: [Avatar6, Avatar8, Avatar2],
    progress: 60,
    status: 'in progress',
    timeLeft: '2 Days',
  },
  {
    id: 2,
    task: 'Setting Up Analytics',
    members: [Avatar1, Avatar7, Avatar3, Avatar8],
    progress: 100,
    status: 'completed',
    timeLeft: '3 Hours',
  },
  {
    id: 3,
    task: 'Fixing UI/UX Issues',
    members: [Avatar7, Avatar4, Avatar1, Avatar5, Avatar2],
    progress: 0,
    status: 'pending',
    timeLeft: '5 Days',
  },
 
];
