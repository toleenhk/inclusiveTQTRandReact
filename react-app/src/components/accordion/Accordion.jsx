import React, { useState } from "react";
import data from "../../data/data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const handleSelect = (id) => {
    setSelected(id === selected ? null : id);
  };
  return (
    <div className="flex flex-col items-center justify-center p-5">
      {data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-md p-4 mb-4 border border-gray-300 rounded text-left cursor-pointer"
          >
            <h3
              onClick={() => handleSelect(item.id)}
              className="text-lg font-bold"
            >
              {item.question}
            </h3>
            {selected === item.id ? <p>{item.answer}</p> : <></>}
          </div>
        ))
      ) : (
        <div>There is no data.</div>
      )}
    </div>
  );
};

export default Accordion;
