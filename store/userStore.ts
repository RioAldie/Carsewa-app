import create from "zustand";
import { persist } from 'zustand/middleware';

const userStore = (set: any) => ({
  userData: null,

  addUserData: (user: any) => set({ userData: user }),
});
const useUserStore = create(
    persist(userStore,{
        name: 'auth'
    })
)

export default useUserStore;