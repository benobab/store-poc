import { useEffect, useState } from "react";
import { useStore } from "./store/store";

export const ListeningFullState = () => {
    const [renderCount, setRenderCount] = useState(0);
    const visits = useStore(state => state.visits);

    useEffect(() => {
      setRenderCount(prevCount => prevCount + 1);
    }, [visits]);
  
    return <div style={{display:'flex', flexDirection:'column'}}>
                <div>I'm listening to visits full, rerendered {renderCount} times</div>
                <div>Name is "{visits?.listStates?.name ?? 'undefined'}"</div>
                <div>Test is "{visits?.listStates?.test ?? 'undefined'}"</div>
        </div>
};