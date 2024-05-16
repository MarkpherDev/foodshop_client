import { Link } from 'react-router-dom'

interface NavMenuProps {}

export const NavMenu: React.FC<NavMenuProps> = ({}) => {
	return (
		<>
			<nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
				<Link to={'/'} className='mr-5 hover:text-gray-900'>
					Inicio
				</Link>
				<Link to={'/productos'} className='mr-5 hover:text-gray-900'>
					Productos
				</Link>
			</nav>
			<Link
				to={'/login'}
				className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
				Iniciar Session
			</Link>
		</>
	)
}
