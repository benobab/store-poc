import {MyStore} from "../store/store.types";

export const testSlice = (set: (partial: MyStore | Partial<MyStore> | ((state: MyStore) => MyStore | Partial<MyStore>)) => void): MyStore['visits'] => ({
  listStates: undefined,
  viewStates: undefined,
  setInitialListState: (initialListState: MyStore['visits']['listStates']) => {
    set((state) => ({
      ...state,
      visits: {
        ...state.visits!,
        listStates: initialListState
      }
    }));
  },
  setInitialViewState: (initialViewState: MyStore['visits']['viewStates']) => {
    set((state) => ({
      ...state,
      visits: {
        ...state.visits!,
        viewState: initialViewState
      }
    }));
  },
  setTest: (test: string) => {
    set((state) => ({
      ...state,
      visits: {
        ...state.visits!,
        listStates: {
          ...state.visits?.listStates!,
          test
        }
      }
    }));
  },
  setName: (name: string) => {
    set((state) => ({
      ...state,
      visits: {
        ...state.visits!,
        listStates: {
          ...state.visits?.listStates!,
          name
        }
      }
    }));
  },
  setPosts: (posts: unknown[]) => {
    set((state) => ({
      ...state,
      visits: {
        ...state.visits!,
        listStates: {
          ...state.visits?.listStates!,
          posts
        }
      }
    }));
  },
  
});

// Extend MyStore with additional properties
declare module "../store/store.types" {
  interface MyStore {
    visits: {
      listStates?: {name:string; test:string; posts:unknown[]};
      viewStates?: unknown;
      setPosts: (a:unknown[]) => void
      setInitialListState: (a: {name:string; test:string;}) => void;
      setInitialViewState: (a: {name:string; test:string;}) => void;
      setTest: (a:string) => void
      setName: (a:string) => void
    }
  }
}
  