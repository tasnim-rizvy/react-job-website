import { Link } from 'react-router-dom';

const BackToListing = () => {
	return (
		<section>
			<div className="container m-auto py-6 px-6">
				<Link
					to="/jobs"
					className="text-indigo-500 hover:text-indigo-600 flex items-center"
				>
					<i className="fas fa-arrow-left mr-2"></i> Back to Job Listings
				</Link>
			</div>
		</section>
	);
};

export default BackToListing;
