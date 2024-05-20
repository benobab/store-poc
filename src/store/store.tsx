import {create} from 'zustand';
import {MyStore} from './store.types';
import { commonSlice } from './commonSlice';
import { testSlice } from './testSlice';
import { devtools } from 'zustand/middleware'


// Store creation
export const useStore = create<MyStore>()(devtools((set) => ({
  visits: {...testSlice(set)},
  ...commonSlice(set)
})));