import { Link, Outlet } from 'react-router-dom'

export default function NavBar() {
    return (
        <>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>
            <Outlet />
        </>
    )
}
