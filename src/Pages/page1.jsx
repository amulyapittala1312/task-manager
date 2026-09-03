import React from 'react';
import { 
  BookOpen, 
  ArrowRight, 
  ArrowLeft, 
  Edit2, 
  MoreHorizontal, 
  FileText, 
  Paperclip, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw, 
  ArrowUpDown, 
  SlidersHorizontal, 
  CheckCircle2 
} from 'lucide-react';

export default function AssignmentSection() {
  const categories = [
    'AI assistance',
    'Management all at one place',
    'Evaluate on the go',
    'Multiple Variety',
  ];

  const evaluateList = [
    { name: 'Darrell Steward', date: '20 June, 11:15 AM' },
    { name: 'Jenny Wilson', date: '20 June, 11:15 AM' },
    { name: 'Courtney Henry', date: '20 June, 11:15 AM', tag: 'Late Submission' },
  ];

  const gradedList = [
    { name: 'Arlene McCoy', date: '20 June, 11:15 AM', score: '25', active: true },
    { name: 'Cameron Williamson', date: '20 June, 11:15 AM', score: '23' },
    { name: 'Theresa Webb', date: '20 June, 11:15 AM', score: '18' },
    { name: 'Albert Flores', date: '20 June, 11:15 AM', score: '07' },
    { name: 'Robert Fox', date: '20 June, 11:15 AM', score: '12' },
  ];

  const assignments = [
    {
      id: 1,
      subject: 'PHYSICS',
      classGroup: 'CLASS 12A',
      title: 'Understanding the Principles of Newtonian Mechanics: Exploring Motion and Forces.',
      type: 'Written Assignment',
      date: '02 July, 11:15 PM',
      author: 'Bessie Cooper',
      status: '21 Submissions',
      statusType: 'pending',
    },
    {
      id: 2,
      subject: 'PHYSICS',
      classGroup: 'CLASS 12A',
      title: 'Exploring the World of Electromagnetism: Investigating Electricity, Magnetism, and Electromagnetic Waves.',
      type: 'PDF Annotation Assignment',
      date: '02 July, 11:15 PM',
      author: 'Bessie Cooper',
      status: 'All Submitted',
      statusType: 'completed',
    },
  ];

  return (
    <main className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] w-full bg-[#f6f5ec] px-6 py-16 md:px-16 md:py-24 overflow-hidden flex flex-col justify-between">
        <div 
          className="absolute inset-0 opacity-40 pointer-events-none bg-cover bg-right"
          style={{ backgroundImage: `radial-gradient(circle at right, rgba(180, 160, 80, 0.4), transparent 60%)` }}
        />

        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-3 py-1 text-sm font-semibold text-black shadow-xs">
            <BookOpen className="h-4 w-4" />
            <span>Assignments</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl lg:text-6xl leading-[1.15]">
            Educators Assignment<br />
            hub. Validate with<br />
            lightening speed
          </h1>

          <p className="text-base text-gray-700 sm:text-lg leading-relaxed pt-2">
            Effortlessly manage and validate assignments with our all-in-one educator's tool for quicker, streamlined assessments.
          </p>

          <div className="pt-4">
            <button 
              type="button"
              className="inline-flex items-center gap-2 rounded-md bg-[#e52828] px-6 py-3.5 text-sm font-bold tracking-wider text-white uppercase shadow-md transition-all hover:bg-red-700 focus:outline-hidden"
            >
              Access Schoolbag Classes
              <ArrowRight className="h-4 w-4 stroke-[3]" />
            </button>
          </div>
        </div>

        <div className="relative z-10 mt-16 flex flex-wrap gap-3">
          {categories.map((item, index) => (
            <button
              key={index}
              type="button"
              className="rounded-full bg-black/80 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-black focus:outline-hidden"
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* Assignment Spotlight Section */}
      <section className="min-h-screen bg-[#F5F5F3] flex items-center justify-center p-6 md:p-12 lg:p-20 font-sans text-gray-900">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.15] text-black">
              Assignment Spotlight: Dive into the details
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal">
              Manage Your Assignments with ease. Assignment Detail View Page is your central command center for overseeing and evaluating student submissions, grading, and deadlines.
            </p>
          </div>

          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-2xl bg-black rounded-[32px] p-3 shadow-2xl border-4 border-gray-800">
              <div className="bg-white rounded-[20px] overflow-hidden shadow-inner text-xs sm:text-sm text-gray-800 border border-gray-100">
                
                <div className="flex items-center justify-between border-b px-4 py-3 bg-white">
                  <div className="flex items-center space-x-2 text-gray-700 font-medium">
                    <ArrowLeft size={16} />
                    <span>Written Assignment - A12</span>
                  </div>
                  
                  <div className="flex space-x-6 border-b border-transparent">
                    <button className="text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1">
                      Task
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      Answer Sheets
                    </button>
                  </div>

                  <div className="flex items-center space-x-2 bg-amber-50 border border-amber-200 text-amber-800 rounded-full px-3 py-1 text-xs">
                    <div className="w-4 h-4 rounded-full border-2 border-amber-500 border-t-transparent animate-spin" />
                    <span className="font-semibold">80%</span>
                    <span className="text-gray-500">Submitted</span>
                    <span className="text-gray-400">| 22 out of 30</span>
                  </div>
                </div>

                <div className="p-5 space-y-4 max-h-[480px] overflow-y-auto">
                  <div className="bg-amber-100/60 rounded-md p-2 flex items-center space-x-2 text-xs">
                    <span className="bg-amber-400 text-white font-semibold px-2 py-0.5 rounded text-[10px]">
                      Ongoing
                    </span>
                    <span className="text-amber-800 font-medium">Ends in 50 minutes</span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="text-xs text-indigo-600 font-semibold space-x-1 tracking-wide">
                      <span>PHYSICS</span>
                      <span className="text-gray-300">•</span>
                      <span>CLASS 12A</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-400">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Edit2 size={14} />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <MoreHorizontal size={14} />
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">
                      Do: Comparative Analysis of Classical & Quantum Mechanics.
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      Attention, students! Please complete a comprehensive analysis worth 5 marks on classical and quantum mechanics. This assignment is mandatory for internal marks.
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">
                        BC
                      </div>
                      <div>
                        <p className="font-semibold text-xs leading-none text-gray-800">Bessie Cooper</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">02 July, 11:15 PM</p>
                      </div>
                    </div>
                    <div className="bg-indigo-50 text-indigo-600 font-semibold px-2 py-1 rounded text-xs">
                      30 Marks
                    </div>
                  </div>

                  <div className="bg-indigo-50/60 rounded-lg p-3 flex items-center justify-between border border-indigo-100/50">
                    <div className="flex items-center space-x-3">
                      <div className="bg-indigo-100 text-indigo-600 p-2 rounded-md">
                        <Paperclip size={16} />
                      </div>
                      <div>
                        <p className="font-semibold text-xs text-gray-800">Written Assignment</p>
                        <p className="text-[10px] text-gray-500">30 marks • 9 attachments</p>
                      </div>
                    </div>
                    <button className="text-xs text-indigo-600 font-medium hover:underline">
                      Hide
                    </button>
                  </div>

                  <div className="space-y-2 pl-1">
                    <p className="text-[10px] font-semibold text-gray-400 tracking-wider">3 PDFs</p>
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg border border-gray-100">
                        <div className="bg-red-100 text-red-500 p-1.5 rounded">
                          <FileText size={14} />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-700">Untitled.pdf</p>
                          <p className="text-[10px] text-gray-400">1MB</p>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Centralized Management Section */}
      <section className="bg-[#333333] text-white px-8 py-16 sm:px-12 sm:py-20 lg:px-24 lg:py-28 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
              Assignment List: <br />
              Centralized <br />
              Management
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pl-4">
            <p className="text-gray-200 text-lg sm:text-xl leading-relaxed font-normal">
              Teachers can access their assignments, while admins gain insight into all teacher-created tasks. Track student submissions, deadlines, and overall statistics without much effort.
            </p>
          </div>
        </div>
      </section>

      {/* Student Review Section */}
      <section className="min-h-screen bg-[#220052] text-white flex items-center justify-center p-6 md:p-12 lg:p-16 font-sans">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7">
            <div className="bg-white text-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 min-h-[520px]">
              
              <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100 text-xs">
                <span className="font-semibold text-gray-800">Written Assignment - A12</span>
                
                <div className="flex space-x-6">
                  <button className="text-gray-400 font-medium">Task</button>
                  <button className="text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1">
                    Answer Sheets
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1 bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200">
                    <div className="w-3 h-3 rounded-full border-2 border-amber-500 border-t-transparent animate-spin" />
                    <span className="font-bold text-[10px]">80%</span>
                    <span className="text-[10px] text-gray-500">Submitted</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-400">
                    <ChevronLeft size={14} className="cursor-pointer hover:text-gray-600" />
                    <ChevronRight size={14} className="cursor-pointer hover:text-gray-600" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 min-h-[470px]">
                
                <div className="col-span-4 border-r border-gray-100 p-3 space-y-4 bg-gray-50/50">
                  <input
                    type="text"
                    placeholder="Search students..."
                    className="w-full text-[11px] bg-white border border-gray-200 rounded-md px-2.5 py-1.5 focus:outline-none focus:border-indigo-500"
                  />

                  <div>
                    <div className="text-[10px] text-gray-400 font-semibold uppercase mb-2">
                      Evaluate (3)
                    </div>
                    <div className="space-y-1">
                      {evaluateList.map((item, idx) => (
                        <div key={idx} className="p-2 rounded-md hover:bg-gray-100 cursor-pointer text-xs">
                          <p className="font-medium text-gray-800 leading-tight">{item.name}</p>
                          <p className="text-[10px] text-gray-400">{item.date}</p>
                          {item.tag && (
                            <span className="inline-block mt-0.5 text-[9px] text-amber-600 bg-amber-50 px-1 rounded">
                              {item.tag}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-[10px] text-gray-400 font-semibold uppercase mb-2">
                      <span>Evaluated Assignment (7)</span>
                      <button className="text-indigo-600 text-[9px] font-medium border border-indigo-200 rounded px-1.5 py-0.5 bg-white">
                        Return All
                      </button>
                    </div>
                    <div className="space-y-1">
                      {gradedList.map((item, idx) => (
                        <div
                          key={idx}
                          className={`p-2 rounded-md flex justify-between items-center cursor-pointer text-xs ${
                            item.active
                              ? 'bg-indigo-50/80 border-l-2 border-indigo-600'
                              : 'hover:bg-gray-100'
                          }`}
                        >
                          <div>
                            <p className={`font-medium leading-tight ${item.active ? 'text-indigo-900' : 'text-gray-800'}`}>
                              {item.name}
                            </p>
                            <p className="text-[10px] text-gray-400">{item.date}</p>
                          </div>
                          <span className={`text-xs font-bold ${item.active ? 'text-indigo-600' : 'text-indigo-500'}`}>
                            {item.score}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-span-8 p-4 space-y-4 bg-white overflow-y-auto max-h-[470px]">
                  
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-[10px] flex items-center justify-center">
                        AM
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-gray-900 leading-none">Arlene McCoy</h4>
                        <span className="text-[10px] text-gray-400">Evaluated on 21 June, 11:15 AM</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-xs">
                      <button className="bg-emerald-600 text-white font-medium px-2.5 py-1 rounded text-[11px] hover:bg-emerald-700">
                        Return to Student
                      </button>
                      <button className="flex items-center gap-1 border border-gray-300 text-gray-700 px-2 py-1 rounded text-[11px] hover:bg-gray-50">
                        <RotateCcw size={11} /> Re-Evaluate
                      </button>
                    </div>
                  </div>

                  <div className="border border-indigo-100 bg-indigo-50/30 rounded-lg p-3 text-center space-y-1">
                    <span className="text-lg font-bold text-indigo-700">25/30</span>
                    <p className="text-[11px] text-gray-600 italic">"Nice work. Avoid minor spelling mistakes."</p>
                    <p className="text-[10px] text-gray-400">- Bessie Cooper</p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4 bg-white space-y-3 text-[10px] text-gray-500 leading-relaxed font-mono">
                    <p>
                      A Simple PDF File This is a small demonstration .pdf file - just for use in the Virtual Mechanics tutorials.
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 lg:pl-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Student assignment review: Assess & Grade
            </h2>
            <p className="text-indigo-100 text-base sm:text-lg leading-relaxed font-normal">
              Teachers evaluate student submissions, utilize built-in tools, assign marks, and provide constructive comments for a comprehensive grading experience.
            </p>
          </div>

        </div>
      </section>

      {/* Diverse Assignment Header Section */}
      <section className="bg-[#333333] text-white px-8 py-16 sm:px-12 sm:py-20 lg:px-24 lg:py-28 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col space-y-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
            Diverse Assignment <br />
            Creation
          </h2>
          <p className="text-gray-200 text-lg sm:text-xl leading-relaxed font-normal max-w-3xl">
            Teachers can select from five assignment types to craft specialized tasks for students, fostering diverse learning experiences.
          </p>
        </div>
      </section>

      {/* Review Completed Assignments Section */}
      <section className="min-h-screen bg-white text-gray-900 flex flex-col justify-between pt-12 md:pt-16 px-6 md:px-16 overflow-hidden font-sans">
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 lg:mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.1]">
              Review Completed <br />
              Assignments
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-2">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
              Effortlessly monitor student progress with our Completed Assignments Page. Teachers can access a comprehensive overview of completed assignments, including student submissions and feedback.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto w-full bg-black rounded-t-[36px] p-2.5 pt-3 sm:p-4 sm:pt-5 shadow-2xl border-t-4 border-x-4 border-gray-900">
          <div className="bg-white rounded-t-[24px] min-h-[420px] p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <h3 className="text-lg font-normal text-gray-500">
                completed <span className="font-bold text-gray-900">assignments</span>
              </h3>

              <div className="flex items-center space-x-3 text-xs">
                <button className="flex items-center gap-1.5 border border-gray-200 text-gray-700 font-medium px-3.5 py-1.5 rounded-full hover:bg-gray-50 transition-colors">
                  Sort by <ArrowUpDown size={13} className="text-gray-400" />
                </button>
                <button className="flex items-center gap-1.5 border border-gray-200 text-gray-700 font-medium px-3.5 py-1.5 rounded-full hover:bg-gray-50 transition-colors">
                  Filter <SlidersHorizontal size={13} className="text-gray-400" />
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {assignments.map((item) => (
                <div key={item.id} className="border-b border-gray-100 pb-6 last:border-0">
                  <div className="flex justify-between items-start gap-4">
                    
                    <div className="space-y-2 max-w-3xl">
                      <div className="text-xs font-semibold text-indigo-600 space-x-1.5 tracking-wider">
                        <span>{item.subject}</span>
                        <span className="text-gray-300">•</span>
                        <span>{item.classGroup}</span>
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                        {item.title}
                      </h4>

                      <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-gray-400">
                        <span className="bg-gray-100 text-gray-700 font-medium px-2.5 py-0.5 rounded text-[11px]">
                          {item.type}
                        </span>
                        <span>{item.date}</span>
                        <span>•</span>
                        <span>{item.author}</span>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center space-x-2 pt-1">
                      {item.statusType === 'pending' ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 rounded-full border-2 border-amber-500 border-t-transparent animate-spin" />
                          <span className="text-xs font-semibold text-gray-600">
                            {item.status}
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-1.5 text-emerald-500">
                          <CheckCircle2 size={16} className="fill-emerald-500 text-white" />
                          <span className="text-xs font-semibold text-emerald-500">
                            {item.status}
                          </span>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </section>

      {/* Empower Teachers Callout Section */}
      <section className="relative min-h-[450px] w-full bg-white flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden font-sans">
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.25] max-w-3xl mx-auto">
            Empower teachers to assess, tailor, and track assignments for students to excel.
          </h2>

          <div>
            <button className="inline-flex items-center justify-center gap-2 bg-[#E5252A] hover:bg-[#D01E23] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase px-7 py-3.5 rounded-md transition-all duration-200 shadow-md hover:shadow-lg transform active:scale-95">
              <span>ACCESS Schoolbag CLASSES</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div 
          className="absolute bottom-0 left-0 right-0 h-48 md:h-64 pointer-events-none opacity-80"
          style={{
            background: 'radial-gradient(circle at bottom center, rgba(160, 150, 40, 0.45) 0%, rgba(120, 110, 20, 0.25) 40%, rgba(255, 255, 255, 0) 75%)',
            filter: 'blur(30px)',
          }}
        />
      </section>
    </main>
  );
}