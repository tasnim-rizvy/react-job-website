import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListing from '../components/JobListing';
import ViewAllButton from '../components/ViewAllButton';

const Home = () => {
	return (
		<>
			<Hero />
			<HomeCards />
			<JobListing />
			<ViewAllButton />
		</>
	);
};

export default Home;
