import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';

import jobLoader from './jobLoader'

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import AddJob from './pages/AddJob';
import JobDetails from './pages/JobDetails';
import EditJob from './pages/EditJob';
import NotFound from './pages/NotFound';

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path="/jobs" element={<Jobs />} />
				<Route path="/add-job" element={<AddJob />} />
				<Route
					path="/jobs/:id"
					element={<JobDetails />}
					loader={jobLoader}
				/>
				<Route path="/edit-job/:id" element={<EditJob />} loader={jobLoader} />
				<Route path="*" element={<NotFound />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
};

export default App;
