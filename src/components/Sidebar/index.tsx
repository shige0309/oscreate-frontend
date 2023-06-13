import { useCallback, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Sidebar.css";
import { useWindowSize } from "../../hooks/useWindowSize";
import {Link as Scroll} from 'react-scroll';
import { HashLink } from "react-router-hash-link";

export const Sidebar = () => {
    const [url, setUrl] = useState<string>("");
    const location: string = useLocation().pathname;
    const [sidebarActive, setSidebarActive] = useState<string>("");
    const [slideActive, setSlideActive] = useState<boolean>(false);
    const [width] = useWindowSize();

    useEffect(() => {
        setUrl(location);
    }, [location]);

    const hamburgerTrigger = useCallback(() => {
        if(sidebarActive === "active") {
            setSidebarActive("");
        } else {
            setSidebarActive("active");
        }
    },[sidebarActive]);

    const slideTrigger = useCallback(() =>{
        if(width <= 769) {
            if(sidebarActive === "") {
                setSidebarActive("active");
            } else {
                setSidebarActive("");
            }
            setSlideActive(!slideActive);
        }
    },[sidebarActive, slideActive, width]);

  return (
    <div>
        <div className={`c-sidebar ${sidebarActive ?? "active"}`}>
            <div className="c-sidebar-wrap">
                <header>
                    {url === "/"
                    ? ( <h1><img src="/logo.svg" alt="ロゴ" /></h1> )
                    : (<p><img src="/logo.svg" alt="ロゴ" /></p>)}
                    <nav>
                        <ul className="c-sidebar-list">
                            <li className="c-sidebar-list-item">
                                {url === "/" 
                                    ?<Scroll to="top" smooth={true} onClick={slideTrigger}>TOP</Scroll>
                                    :<Link to="/">TOP</Link>
                                }
                            </li>
                            <li className="c-sidebar-list-item">
                                {url === "/" 
                                    ?<Scroll to="profile" smooth={true} onClick={slideTrigger}>
                                        PROFILE
                                    </Scroll>
                                    :<HashLink to="/#profile">PROFILE</HashLink>
                                }
                            </li>
                            <li className="c-sidebar-list-item">
                                {url === "/" 
                                    ?<Scroll to="profile" smooth={true} onClick={slideTrigger}>
                                        SKILL
                                    </Scroll>
                                    :<HashLink to="/#profile">SKILL</HashLink>
                                }
                            </li>
                            <li className="c-sidebar-list-item">
                                {url === "/" 
                                    ?<Scroll to="work" smooth={true} onClick={slideTrigger}>
                                        WORKS
                                    </Scroll>
                                    :<HashLink to="/#work">WORKS</HashLink>
                                }
                            </li>
                            <li className="c-sidebar-list-item">
                                {url === "/" 
                                    ?<Scroll to="blog" smooth={true} onClick={slideTrigger}>
                                        BLOG
                                    </Scroll>
                                    :<HashLink to="/#blog">BLOG</HashLink>
                                }
                            </li>
                            <li className="c-sidebar-list-item">
                                <Link to="/contact">
                                    CONTACT
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
            <p className="c-sidebar-login"><Link to={"/login"}>LOGIN</Link></p>
        </div>
        <div className={`c-sidebar-hamburger ${sidebarActive ?? "active"}`}>
            <div className="c-sidebar-hamburger-wrap">
                <div className="c-sidebar-hamburger-block">
                    <button className={`c-sidebar-hamburger-trigger ${sidebarActive ?? "active"}`} onClick={hamburgerTrigger}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
