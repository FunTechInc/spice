import { create } from "zustand";

export const useStore = create((set) => ({
   isModalOpen: false,
   setIsModalOpen: (value: boolean) => set({ isModalOpen: value }),
}));
