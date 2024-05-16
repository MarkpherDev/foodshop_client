import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import DashboarView from './views/DashboarView'

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AppLayout />}>
					<Route path='/' element={<DashboarView />} index />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
