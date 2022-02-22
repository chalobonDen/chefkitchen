import React, {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(1);
    return (
        <div>
            <div className="custom-number-input h-10 w-32">
                <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                    <button data-action="decrement" className="border-2 border-slate-300  text-gray-600 hover:text-gray-700 hover:bg-gray-300 h-full w-20 rounded-l cursor-pointer outline-none"
                        onClick={() => setCount(count - 1)}
                        disabled={count === 1}>
                        <span className="m-auto text-2xl font-thin">-</span>
                    </button>
                    <span className="outline-none focus:outline-none text-center w-full border-2 border-slate-300 border-x-slate-100 
                                    font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex 
                                    items-center text-gray-700 pl-6  outline-none">
                        {count}
                    </span>
                    <button data-action="increment" className="border-2 border-slate-300 text-gray-600 hover:text-gray-700 hover:bg-gray-300 h-full w-20 rounded-r cursor-pointer"
                        onClick={() => setCount(count + 1)}>
                        <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                </div>
            </div>
        </div>

        );
        }
        
        export default Counter;
