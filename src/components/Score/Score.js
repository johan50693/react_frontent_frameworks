import { useSelector } from "react-redux";
import './Score.css'


export const Score= () => {

    const attempts= useSelector(state => state.pokeMemory.attempts);
    return (
        <>
            {/* <div className="appName">
                <h3>React Memory Game</h3>
            </div> */}
            {/* <div className="appCounter"> */}
            <div className="">
                <h1>
                    Intentos: {attempts}
                </h1>
            </div>
        </>
    );
}