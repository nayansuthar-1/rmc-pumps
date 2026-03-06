import React from 'react'

function StatCard({ title, value, icon }) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-5 flex items-center justify-between">
        
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h2 className="text-2xl font-semibold mt-1">{value}</h2>
        </div>
  
        <div className="bg-slate-100 p-3 rounded-lg">
          {icon}
        </div>
  
      </div>
    );
  }


export default StatCard
