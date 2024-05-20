import { MyStore } from "./store.types";

export const commonSlice = (set: (partial: MyStore | Partial<MyStore> | ((state: MyStore) => MyStore | Partial<MyStore>)) => void) => ({
    setPreferredDisplay: (slice: keyof MyStore, display: any) => set((state) => ({
        ...state,
        [slice]:{
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ...(state as any)[slice], //TODO: fix this any
            listState:{
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ...(state as any)[slice].listState, //TODO: fix this any
                preferredDisplay: display
            }
        }
    })),
});