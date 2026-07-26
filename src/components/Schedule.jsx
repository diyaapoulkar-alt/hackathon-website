import React, { useState } from 'react';
import { SCHEDULE } from '../data/hackathonData';
import { Calendar, Clock, Bookmark, BookmarkCheck, Filter, Tag } from 'lucide-react';

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [filterCategory, setFilterCategory] = useState('All');
  const [bookmarkedEvents, setBookmarkedEvents] = useState([]);

  const categories = ['All', 'General', 'Hacking', 'Workshop', 'Mentorship', 'Social'];

  const toggleBookmark = (title) => {
    if (bookmarkedEvents.includes(title)) {
      setBookmarkedEvents(bookmarkedEvents.filter((b) => b !== title));
    } else {
      setBookmarkedEvents([...bookmarkedEvents, title]);
    }
  };

  const currentSchedule = SCHEDULE[selectedDay];
  const filteredEvents = currentSchedule.events.filter((event) => {
    if (filterCategory === 'All') return true;
    return event.category === filterCategory;
  });

  return (
    <section id="schedule" className="py-24 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block mb-2">
            // HACKATHON AGENDA
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Interactive Event Timeline
          </h2>
          <p className="mt-4 text-slate-400">
            Bookmark key keynotes, workshops, and mentor check-in sessions.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex justify-center items-center gap-3 mb-10 overflow-x-auto pb-2">
          {SCHEDULE.map((dayData, idx) => (
            <button
              key={dayData.day}
              onClick={() => setSelectedDay(idx)}
              className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all flex items-center gap-3 cursor-pointer whitespace-nowrap ${
                selectedDay === idx
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>{dayData.day}</span>
              <span className="text-xs opacity-75 font-mono">({dayData.date})</span>
            </button>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                filterCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              #{cat}
            </button>
          ))}
        </div>

        {/* Timeline Event List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredEvents.map((event) => {
            const isBookmarked = bookmarkedEvents.includes(event.title);

            return (
              <div
                key={event.title}
                className="p-6 sm:p-8 rounded-3xl glass-card border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-bold whitespace-nowrap flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {event.title}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-[10px] font-mono text-purple-300">
                        {event.category}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm">{event.desc}</p>
                  </div>
                </div>

                <button
                  onClick={() => toggleBookmark(event.title)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer ${
                    isBookmarked
                      ? 'bg-amber-500/20 border-amber-500/50 text-amber-400'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                  title={isBookmarked ? 'Bookmarked' : 'Bookmark Event'}
                >
                  {isBookmarked ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
