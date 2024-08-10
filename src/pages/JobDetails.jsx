import { useLoaderData } from 'react-router-dom';
import BackToListing from '../components/BackToListing';
import JobDesc from '../components/JobDesc';
import PropTypes from 'prop-types';

const JobDetails = ({ deleteJob }) => {
	const job = useLoaderData();

	return (
		<>
			<BackToListing />
			<section className="bg-indigo-50">
				<div className="container m-auto py-10 px-6">
					<JobDesc job={job} deleteJob={deleteJob} />
				</div>
			</section>
		</>
	);
};

JobDetails.propTypes = {
	deleteJob: PropTypes.func,
};

export default JobDetails;
