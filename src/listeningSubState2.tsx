import { useEffect, useState } from "react";
import { useStore } from "./store/store";

export const ListeningSubState2 = () => {
    const [renderCount, setRenderCount] = useState(0);
    const test = useStore(state => state.visits?.listStates?.test);

    useEffect(() => {
      setRenderCount(prevCount => prevCount + 1);
    }, [test]);

    console.log("rerendering sub2")
  
    return <div style={{display:'flex', flexDirection:'column'}}>
                <div>I'm listening to another sub state, rerendered {renderCount} times</div>
                <div>test is "{test ?? 'undefined'}"</div>
        </div>
};