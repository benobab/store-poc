import { useEffect, useState } from "react";
import { useStore } from "./store/store";

export const ListeningMutatingMethod = () => {
    const [renderCount, setRenderCount] = useState(0);
    const setInit = useStore(state => state.visits.setInitialListState);
    const setTest = useStore(state => state.visits.setTest);
    const setName = useStore(state => state.visits.setName);


    useEffect(() => {
      setRenderCount(prevCount => prevCount + 1);
    }, [setInit, setTest, setName]);

    console.log("rerendering ");
  
    return <div style={{display:'flex', flexDirection:'column'}}>
                <>I'm listening, rerendered {renderCount} times</>
                <button onClick={() => setInit({})} style={{margin:'2px', padding:'2px'}}>Reset listState</button>
                <button onClick={() => setName(`${renderCount} ${new Date().getTime().toString()}`)} style={{margin:'2px', padding:'2px'}}>Update listState's name</button>
                <button onClick={() => setTest(`${renderCount} ${new Date().getTime().toString()}`)} style={{margin:'2px', padding:'2px'}}>Update listState's test</button>
        </div>
};