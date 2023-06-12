import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Sidebar.css";

export const Sidebar = () => {
    const [url, setUrl] = useState<string>("");
    const location = useLocation().pathname;

    useEffect(() => {
        setUrl(location);
    }, [location]);

  return (
    <div className='sidebar'>
        <div className='sidebar-wrap'>
            <header>
                {url === "/"
                ? ( <h1><img src="/logo.svg" alt="ロゴ" /></h1> )
                : (<p><img src="/logo.svg" alt="ロゴ" /></p>)}
                <nav>
                    <ul className='sidebar-list'>
                        <li className='sidebar-list-item'>
                            <Link to="#">
                                TOP
                            </Link>
                        </li>
                        <li className='sidebar-list-item'>
                            <Link to="#profile">
                                PROFILE
                            </Link>
                        </li>
                        <li className='sidebar-list-item'>
                            <Link to="#skill">
                                SKILL
                            </Link>
                        </li>
                        <li className='sidebar-list-item'>
                            <Link to="#work">
                                WORKS
                            </Link>
                        </li>
                        <li className='sidebar-list-item'>
                            <Link to="#blog">
                                BLOG
                            </Link>
                        </li>
                        <li className='sidebar-list-item'>
                            <Link to="/contact">
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
        <p className='sidebar-login'><Link to={"/login"}>LOGIN</Link></p>
    </div>
  )
}
