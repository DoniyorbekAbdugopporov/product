import React from 'react'

const Skeleton = ({count}) => {
  return (
    <div>
      <div className="container grid grid-cols-4 gap-3">
        {Array(count)
          .fill(0)
          .map((_, inx) => (
            <div className="p-3 shadow-lg" key={inx}>
              <div className="w-full h-56 bg-slate-200 rounded"></div>
              <div className="w-9/12 h-5 bg-slate-200 mt-2 rounded"></div>
              <div className="w-6/12 h-5 bg-slate-200 mt-2 rounded"></div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Skeleton