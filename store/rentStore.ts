import create from "zustand";
import { persist } from 'zustand/middleware';

const rentStore = (set: any) =>({
    rentDetail: null,

    setRentDetail: (rent: any) => set({ rentDetail: rent})
});

const useRentStore = create(
    persist(rentStore,{
        name: 'rental'
    })
)

export default useRentStore;