import { useEffect, useState } from "react";
import { useStore } from "./store/store";

export const ListeningSubState = () => {
    const [renderCount, setRenderCount] = useState(0);
    const name = useStore(state => state.visits?.listStates?.name);

    useEffect(() => {
      setRenderCount(prevCount => prevCount + 1);
    }, [name]);
  
    return <div style={{display:'flex', flexDirection:'column'}}>
                <div>I'm listening to sub state, rerendered {renderCount} times</div>
                <div>Name is "{name ?? 'undefined'}"</div>
        </div>
};