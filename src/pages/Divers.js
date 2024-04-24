import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Component for Forum Thread
const Thread = ({ thread }) => {
  return (
    <div className="thread">
      <h3>{thread.title}</h3>
      <p>{thread.content}</p>
      <p>Author: {thread.author}</p>
    </div>
  );
};

// Component for Forum
const Forum = () => {
  const [threads, setThreads] = useState([]);
  const [newThread, setNewThread] = useState({ title: '', content: '', author: '' });

  const handleNewThreadChange = (e) => {
    const { name, value } = e.target;
    setNewThread({ ...newThread, [name]: value });
  };

  const handleNewThreadSubmit = (e) => {
    e.preventDefault();
    setThreads([...threads, newThread]);
    setNewThread({ title: '', content: '', author: '' });
  };

  return (
    <div className="forum">
      <h2>Forum</h2>
      <div className="thread-list">
        {threads.map((thread, index) => (
          <Thread key={index} thread={thread} />
        ))}
      </div>
      <form onSubmit={handleNewThreadSubmit}>
        <input type="text" name="title" placeholder="Thread Title" value={newThread.title} onChange={handleNewThreadChange} />
        <textarea name="content" placeholder="Thread Content" value={newThread.content} onChange={handleNewThreadChange}></textarea>
        <input type="text" name="author" placeholder="Your Name" value={newThread.author} onChange={handleNewThreadChange} />
        <button type="submit">Create Thread</button>
      </form>
    </div>
  );
};


const localizer = momentLocalizer(moment);

const myEventsList = [
  {
    title: 'Event 1',
    start: new Date(moment().add(1, 'days')),
    end: new Date(moment().add(2, 'days')),
  },
  {
    title: 'Event 2',
    start: new Date(moment().add(0, 'weeks')),
    end: new Date(moment().add(1, 'weeks')),
  },
];

// Main Component
const App = () => {
  return (
    <div className="app">
      <NavBar />
      <div className="py-16">
      <Calendar
      localizer={localizer}
      events={myEventsList}
      defaultDate={new Date()}
      defaultView='week'
    />
      </div>
      <Footer />
      
    </div>
  );
};

export default App;
