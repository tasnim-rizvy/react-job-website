const jobLoader = async ({ params }) => {
	const res = await fetch(`/api/jobs/${params.id}`);
	if (!res.ok) {
		throw new Error('Found no job with this id');
	}
	const data = await res.json();
	return data;
};

export default jobLoader;