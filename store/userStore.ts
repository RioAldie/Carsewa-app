import create from "zustand";
import { persist } from 'zustand/middleware';
import { Userdata } from "../type";
const userStore = (set: any) => ({
  userData: {
    bank: null,
    cardName: null,
    cardNumber: null,
    email: null,
    city: '',
    password: null,
    uid: null,
    username: ""

  },

  addUserData: (user: any) => set({ userData: user }),
});
const useUserStore = create(
    persist(userStore,{
        name: 'auth'
    })
)

export default useUserStore;