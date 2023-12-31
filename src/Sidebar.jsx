import React from 'react';
import sublinks from './data'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './Context';


const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
    <aside className='sidebar'>
        <div className='sidebar-contianer'>
            <button className='close-btn'>
                <FaTimes />
            </button>
            <div className='sidebar-links'>
                {sublinks.map((item) => {
                    const { links, page, pageId } = item;
                    return (
                        <article key={pageId}>
                            <h4>{page}</h4>
                            <div className='sidebar-sublinks'>
                                {links.map((link) => {
                                    const { url, icon, label, id } = link;
                                    return (
                                        <a key={id} href={url}>
                                            {icon} {label}
                                        </a>
                                    )
                                })}
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    </aside>
}

export default Sidebar