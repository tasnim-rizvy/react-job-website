import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const JobDesc = ({ job }) => {
	const navigate = useNavigate();

	const deleteJob = async (id) => {
		await fetch(`/api/jobs/${id}`, {
			method: 'DELETE',
		});
		return;
	};

	const onDeleteClick = (jobID) => {
		const confirm = window.confirm('Delete this listing?');
		if (confirm) {
			deleteJob(jobID);
			navigate('/jobs');
		} else {
			return;
		}
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
			<main>
				<div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
					<div className="text-gray-500 mb-4">{job.type}</div>
					<h1 className="text-3xl font-bold mb-4">{job.title}</h1>
					<div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
						<i className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
						<p className="text-orange-700">{job.location}</p>
					</div>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-md mt-6">
					<h3 className="text-indigo-800 text-lg font-bold mb-6">
						Job Description
					</h3>

					<p className="mb-4">{job.description}</p>

					<h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

					<p className="mb-4">{job.salary} / Year</p>
				</div>
			</main>

			<aside>
				<div className="bg-white p-6 rounded-lg shadow-md">
					<h3 className="text-xl font-bold mb-6">Company Info</h3>

					<h2 className="text-2xl">{job.company.name}</h2>

					<p className="my-2">{job.company.description}</p>

					<hr className="my-4" />

					<h3 className="text-xl">Contact Email:</h3>

					<p className="my-2 bg-indigo-100 p-2 font-bold">
						{job.company.contactEmail}
					</p>

					<h3 className="text-xl">Contact Phone:</h3>

					<p className="my-2 bg-indigo-100 p-2 font-bold">
						{job.company.contactPhone}
					</p>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-md mt-6">
					<h3 className="text-xl font-bold mb-6">Manage Job</h3>
					<Link
						to={`/edit-job/${job.id}`}
						className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
					>
						Edit Job
					</Link>
					<button
						onClick={() => onDeleteClick(job.id)}
						className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
					>
						Delete Job
					</button>
				</div>
			</aside>
		</div>
	);
};

JobDesc.propTypes = {
	job: PropTypes.object,
	deleteJob: PropTypes.func
};

export default JobDesc;
