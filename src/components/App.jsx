import { useReducer } from "react";

function App() {

    const initialState = {
        switchOn: false,
        gear: 0,
        speed: 0,
    }
    
    const random = Math.random() > 0.5;
    
    const reducer = (state,action) => {
        switch(action.type) {
            case "switchOn":
                if (random) {
                    return {...state, switchOn: true}; 
                } 
                if (state.switchOn) {
                    return {...state, gear:0, switchOn: false}
                }
    
                
            case "gearUp":

                if(state.switchOn && state.gear < 5) {
                    return {...state, gear: state.gear +1};
                } else {
                    return state;
                }
                
            case "gearDown":

                if(state.switchOn && state.gear > -2) {
                    return {...state, gear: state.gear -1};
                } else {
                    return state;
                }
            
            case "speedUp":
                if(state.switchOn && state.gear !== 0) {
                    return {...state, speed: state.speed +10 * state.gear };
                } else {
                    return state;
                }

            case "speedDown":
                if(state.switchOn && state.gear > 0 && state.speed > 0) {
                    return {...state, speed: state.speed -10};
                } 
                if(state.switchOn && state.gear <= 0 && state.speed < 0) {
                    return {...state, speed: state.speed +10};
                } 
                else {
                    return state;
                }
                default:
                    return;
        }
    }
    
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="flex justify-center items-center h-screen bg-[url(https://global.yamaha-motor.com/business/omdo/products/high-speed-boat/img/high-speed-boat_exteriors_004.jpg)] bg-cover">
            
            <div className="bg-black/30 rounded w-[40rem] h-[20rem]">

                <div className="text-white text-[3rem] text-center">
                    Speed: {state.speed}
                </div>
                <div className="text-white text-[3rem] text-center">
                    Gear: {state.gear}
                </div>
                <div className="text-white text-[3rem] text-center">
                    Switch On/Off: {state.switchOn ? "ON" : "OFF"}
                </div>
                <div className="flex justify-center gap-2 mt-8">
                    <button onClick={() => dispatch( {type: "switchOn" } )} className="border-2 p-2 bg-red-300">Start/Stop</button>

                    <button onClick={() => dispatch( {type: "gearUp" } )} className="border-2 p-2 bg-green-300">Gear Up</button>

                    <button onClick={() => dispatch( {type: "gearDown" } )} className="border-2 p-2 bg-green-300">Gear Down</button>

                    <button onClick={() => dispatch( {type: "speedUp" } )} className="border-2 p-2 bg-blue-300">Speed Up</button>

                    <button onClick={() => dispatch( {type: "speedDown" } )} className="border-2 p-2 bg-blue-300">Speed Down</button>
                </div>
            </div>
        </div>
    )
}

export default App;

// 