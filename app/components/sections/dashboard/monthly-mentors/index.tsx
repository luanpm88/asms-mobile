import MentorCard from './MentorCard';
import SliderWrapper from '../../../common/SliderWrapper';
import { mentors } from '../../../../data/mentors';

const MonthlyMentors = () => {
  return <SliderWrapper title="Monthly Mentors" SliderCard={MentorCard} data={mentors} />;
};

export default MonthlyMentors;
