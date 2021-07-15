import { Link } from 'react-router-dom';
const Navbar = () => {
	return (
		<nav
			className='navbar has-shadow'
			role='navigation'
			aria-label='main navigation'
		>
			<div className='container is-fluid'>
				<ul className='navbar-brand'>
					<li className='navbar-item'>
						<Link to='/'>My Favorite videos</Link>
					</li>
				</ul>
				<ul className='navbar-menu'>
					<li className='navbar-end'>
						<Link className='navbar-item' to='/new-video'>
							Create New Video
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
