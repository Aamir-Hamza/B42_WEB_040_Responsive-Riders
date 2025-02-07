/* eslint-disable react/prop-types */
import { useState } from 'react';

const SubjectSelector = ({ onStartQuiz }) => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  
  const subjects = [
  { id: 1, name: 'Mathematics', icon: '📐' },
  { id: 2, name: 'Physics', icon: '⚡' },
  { id: 3, name: 'Chemistry', icon: '🧪' },
  { id: 4, name: 'Biology', icon: '🧬' },
  { id: 5, name: 'History', icon: '📜' },
  { id: 6, name: 'Geography', icon: '🌍' },
  { id: 7, name: 'Literature', icon: '📚' },
  { id: 8, name: 'Computer Science', icon: '💻' },
  { id: 9, name: 'General Knowledge', icon: '🧠' },
  { id: 10, name: 'Nature & Environment', icon: '🌿' },
  { id: 11, name: 'Current Affairs', icon: '📰' },
  { id: 12, name: 'Art & Culture', icon: '🎨' },
  { id: 13, name: 'Space Science', icon: '🚀' },
  { id: 14, name: 'Technology', icon: '📱' },
  { id: 15, name: 'Web Development', icon: '🌐' },
  { id: 16, name: 'Mobile Development', icon: '📱' },
  { id: 17, name: 'Cloud Computing', icon: '☁️' },
  { id: 18, name: 'DevOps', icon: '⚙️' },
  { id: 19, name: 'Artificial Intelligence', icon: '🤖' },
  { id: 20, name: 'Data Science', icon: '📊' },
  { id: 21, name: 'Cybersecurity', icon: '🔒' },
  { id: 22, name: 'Networking', icon: '🌐' },
  { id: 23, name: 'Linux', icon: '🐧' }
];;
  
  const toggleSubject = (subject) => {
    setSelectedSubjects(prev => 
      prev.includes(subject.name)
        ? prev.filter(s => s !== subject.name)
        : [...prev, subject.name]
    );
  };

  return (
    <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20">
      <h2 className="text-xl font-bold text-white mb-6">Select Subjects</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        {subjects.map(subject => (
          <button
            key={subject.id}
            onClick={() => toggleSubject(subject)}
            className={`p-4 rounded-lg flex flex-col items-center justify-center h-32 transition-all transform hover:scale-105 ${
              selectedSubjects.includes(subject.name)
                ? 'bg-teal-500/30 border-2 border-teal-500'
                : 'bg-gray-700/30 border border-purple-500/20'
            }`}
          >
            <span className="text-3xl mb-2">{subject.icon}</span>
            <span className="text-white text-center">{subject.name}</span>
          </button>
        ))}
      </div>

      <button
        onClick={() => onStartQuiz(selectedSubjects)}
        disabled={selectedSubjects.length === 0}
        className={`w-full py-3 rounded-lg font-semibold transition-colors ${
          selectedSubjects.length > 0
            ? 'bg-teal-500 hover:bg-teal-600 text-white'
            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
        }`}
      >
        Start Quiz ({selectedSubjects.length} selected)
      </button>
    </div>
  );
};

export default SubjectSelector;