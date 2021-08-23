import React from 'react';
import {FaInbox, FaRegCalendarAlt,FaRegCalendar} from "react-icons/fa";
const Sidebar = ({selectTab,setselectTab}) => {
    return (
        <div className="sidebar">
            <div onClick={()=>{setselectTab('INBOX')}} className={(selectTab==='INBOX')?'active':'null'}><FaInbox className="icon"/>Inbox</div>
            <div  onClick={()=>{setselectTab('TODAY')}}  className={(selectTab==='TODAY')?'active':'null'}><FaRegCalendarAlt className="icon"/>Today</div>
            <div  onClick={()=>{setselectTab('Next 7 days')}} className={(selectTab==='Next 7 days')?'active':'null'} ><FaRegCalendar className="icon"/>Next 7 days</div>
        </div>
    )
}

export default Sidebar
