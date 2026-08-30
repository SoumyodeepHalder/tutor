import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faCode, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// Hardcoded array containing your specific card titles with an empty image placeholder property
const initialCards = [
    {
        id: 1,
        title: "Master DSA with Most Important 150 Questions",
        category: "Data Structures & Algorithms",
        tags: ["Data Structures", "Algorithms", "Interview Prep"],
        image: "" // <-- Insert your downloaded image link here later
    },
    {
        id: 2,
        title: "Master Quantitative Aptitude with 100 Questions",
        category: "Aptitude & Logic",
        tags: ["Math", "Quants", "Placement Prep"],
        image: "" // <-- Insert your downloaded image link here later
    },
    {
        id: 3,
        title: "Master Logical Rasoning Aptitude with 100 Questions",
        category: "Aptitude & Logic",
        tags: ["Logical Reasoning", "Puzzles", "Aptitude"],
        image: "" // <-- Insert your downloaded image link here later
    },
    {
        id: 4,
        title: "Build a Fullstack Chat Application with MERN Stack",
        category: "Fullstack Development",
        tags: ["MongoDB", "Express", "React", "Node.js", "WebSockets"],
        image: "" // <-- Insert your downloaded image link here later
    },
    {
        id: 5,
        title: "Build a Fullstack Videocalling Application with MERN Stack",
        category: "Fullstack Development",
        tags: ["MERN Stack", "WebRTC", "Socket.io", "Tailwind CSS"],
        image: "" // <-- Insert your downloaded image link here later
    },
    {
        id: 6,
        title: "Build an Authentication-Api using Express and MongoDB",
        category: "Backend Development",
        tags: ["Node.js", "Express", "JWT", "MongoDB", "Security"],
        image: "" // <-- Insert your downloaded image link here later
    },
    {
        id: 7,
        title: "Build an Agentic Ai Coding Assistant using langchain framework",
        category: "Artificial Intelligence",
        tags: ["LangChain", "LLMs", "AI Agents", "Python/JS"],
        image: "" // <-- Insert your downloaded image link here later
    }
];

export default function CourseDashboard2() {
    const navigate = useNavigate();
    const [cardNum, setCardNum] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", ...new Set(initialCards.map(card => card.category))];

    const filteredCards = selectedCategory === "All"
        ? initialCards
        : initialCards.filter(card => card.category === selectedCategory);

    // const getDifficultyStyles = (level) => {
    //     switch (level) {
    //         case 'Beginner': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
    //         case 'Medium': case 'Intermediate': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
    //         case 'Hard': case 'Advanced': return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
    //         default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    //     }
    // };

    const handleSubmit = (id) => {
        if (id === 1) {
            navigate('/dsa');
        }
        else {
            navigate('/none')
        }
    }

    // Helper to render distinct vector icons inside the placeholder box based on category
    const renderPlaceholderIcon = (category) => {
        switch (category) {
            case "Data Structures & Algorithms":
                return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />;
            case "Aptitude & Logic":
                return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 11h.01M12 7h.01M15 11h.01M15 14h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />;
            case "Fullstack Development":
                return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />;
            case "Backend Development":
                return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v4a2 2 0 00-2-2m-7-4h.01M11 16h.01" />;
            case "Artificial Intelligence":
                return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />;
            default:
                return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />;
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
            <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="h-9 w-9  flex items-center justify-center font-bold text-white ">
                            <FontAwesomeIcon icon={faCode} className="text-indigo-400 text-base" />
                        </div>
                        <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                            CodeCraft
                        </span>
                    </div>
                    <div className='flex gap-3'>
                        <button className="text-sm font-medium hover:bg-slate-800 text-slate-200 px-4 py-2 rounded-lg border border-slate-900/50 hover:border-slate-700 transition-all duration-200 shadow-sm">
                            Home
                        </button>
                        <button className="text-sm font-medium hover:bg-slate-800 text-slate-200 px-4 py-2 rounded-lg border border-slate-900/50 hover:border-slate-700 transition-all duration-200 shadow-sm">
                            About Us
                        </button>
                        <button className="text-sm font-medium hover:bg-slate-800 text-slate-200 px-4 py-2 rounded-lg border border-slate-900/50 hover:border-slate-700 transition-all duration-200 shadow-sm">
                            Contact
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="mb-10 flex flex-col items-center">
                    <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        Get Resources Of DSA, Aptitude, MERN stack, LangChain
                    </h1>
                    <p className="mt-2 text-base text-slate-400 max-w-2xl">
                        Accelerate your learning curve. Move from algorithmic logic to shipping production-level fullstack applications and agentic AI networks.
                    </p>
                </div>

                <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-slate-800/60">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${selectedCategory === category
                                ? "bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/10"
                                : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-850"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCards.map((card) => (
                        <article
                            key={card.id}
                            className="group relative flex flex-col bg-slate-900/60 rounded-2xl border border-slate-800 hover:border-slate-700/80 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/5 hover:-translate-y-0.5"
                            onClick={() => handleSubmit(card.id)}
                        >
                            {/* Thumbnail Container Section */}
                            <div className="relative w-full aspect-video bg-slate-950 overflow-hidden border-b border-slate-800/50">
                                {card.image ? (
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                                        loading="lazy"
                                    />
                                ) : (
                                    /* Stylized Empty Placeholder Graphic with Category Icon */
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-b from-slate-900/40 to-slate-950">
                                        <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-2xl text-slate-500 group-hover:text-indigo-400 group-hover:border-indigo-500/20 group-hover:bg-indigo-500/5 transition-all duration-300 shadow-inner">
                                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                {renderPlaceholderIcon(card.category)}
                                            </svg>
                                        </div>
                                        <span className="text-[10px] uppercase font-semibold tracking-widest text-slate-600 mt-2.5">
                                            No Artwork Linked
                                        </span>
                                    </div>
                                )}

                                {/* Float Badge Overlay on Thumbnail */}
                                {/* <span className={`absolute top-3 right-3 text-[11px] font-medium px-2 py-0.5 rounded-md border backdrop-blur-md bg-slate-950/70 ${getDifficultyStyles(card.difficulty)}`}>
                                    {card.difficulty}
                                </span> */}
                            </div>

                            {/* Accent Divider Line */}
                            <div className="h-[2px] w-full bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-purple-500/10 group-hover:from-indigo-500 group-hover:via-violet-500 group-hover:to-purple-500 transition-all duration-300" />

                            <div className="p-6 flex flex-col flex-1">
                                {/* Meta-information Badges Block */}
                                <div className="flex items-center justify-between gap-2 mb-4">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/15 px-2.5 py-1 rounded-md">
                                        {card.category}
                                    </span>
                                    {/* <span className={`text-xs font-medium px-2 py-0.5 rounded-md border ${getDifficultyStyles(card.difficulty)}`}>
                    {card.difficulty}
                  </span> */}
                                </div>

                                {/* Primary Card Title Heading */}
                                <h3 className="text-lg font-bold text-slate-100 group-hover:text-white leading-snug tracking-tight mb-3 flex-1 line-clamp-2">
                                    {card.title}
                                </h3>

                                {/* Incremental Metrics Metadata Bar */}
                                {/* <div className="flex items-center space-x-4 text-xs font-medium text-slate-400 mb-5 border-t border-b border-slate-800/80 py-3">
                  <div className="flex items-center space-x-1.5">
                    <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span>{card.lessons} Modules</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{card.duration}</span>
                  </div>
                </div> */}

                                {/* Pill Tags Loop */}
                                <div className="flex flex-wrap gap-1.5 mb-6">
                                    {card.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="text-xs bg-slate-800/60 hover:bg-slate-800 text-slate-400 px-2 py-1 rounded transition-colors duration-150"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Interactive CTA Button */}
                                <button className="w-full mt-auto flex items-center justify-center space-x-2 bg-slate-800 group-hover:bg-indigo-600 text-slate-200 group-hover:text-white font-medium text-sm py-2.5 px-4 rounded-xl border border-slate-700/60 group-hover:border-indigo-500 transition-all duration-200 shadow-sm">
                                    <span>Start Learning</span>
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </main>
        </div>
    );
}

