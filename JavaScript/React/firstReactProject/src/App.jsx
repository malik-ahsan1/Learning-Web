import { useState } from "react";
import "./App.css";

function App() {
    const [color, setColor] = useState("green");

    return (
        <>
            <div
                className="w-full h-screen duration-200"
                style={{ backgroundColor: color }}
            >
                <div className="fixed bottom-16 left-4/12 flex gap-2.5 bg-gray-400 rounded-xl p-4">
                    <button
                        className="p-2 w-20 rounded-xl font-bold"
                        style={{ backgroundColor: "green" }}
                        onClick={() => setColor("green")}
                    >
                        Green
                    </button>
                    <button
                        className="p-2 w-20 rounded-xl font-bold"
                        style={{ backgroundColor: "red" }}
                        onClick={() => setColor("red")}
                    >
                        Red
                    </button>
                    <button
                        className="p-2 w-20 rounded-xl font-bold"
                        style={{ backgroundColor: "purple" }}
                        onClick={() => setColor("purple")}
                    >
                        Purple
                    </button>
                    <button
                        className="p-2 w-20 rounded-xl font-bold"
                        style={{ backgroundColor: "blue" }}
                        onClick={() => setColor("blue")}
                    >
                        Blue
                    </button>
                    <button
                        className="p-2 w-20 rounded-xl font-bold"
                        style={{ backgroundColor: "yellow" }}
                        onClick={() => setColor("yellow")}
                    >
                        Yellow
                    </button>
                    <button
                        className="p-2 w-20 rounded-xl font-bold"
                        style={{ backgroundColor: "pink" }}
                        onClick={() => setColor("pink")}
                    >
                        Pink
                    </button>
                    <button
                        className="p-2 w-20 rounded-xl font-bold text-white"
                        style={{ backgroundColor: "black" }}
                        onClick={() => setColor("black")}
                    >
                        Black
                    </button>
                    <button
                        className="p-2 w-20 rounded-xl font-bold"
                        style={{ backgroundColor: "white" }}
                        onClick={() => setColor("white")}
                    >
                        White
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
