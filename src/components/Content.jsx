import Tasks from './Tasks.jsx';
import Sidebar from './Sidebar.jsx';
import React,{useState} from 'react';

const Content = () => {
    const [selectTab, setselectTab] = useState('Inbox')
    return (
        <section className="content">
       
        <Sidebar selectTab={selectTab} setselectTab={setselectTab}/>
        <Tasks />
            
        </section>
    )
}

export default Content
