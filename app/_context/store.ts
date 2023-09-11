import { create } from "zustand";

type TAppStore = {
   isModalOpen: boolean;
   setIsModalOpen: (value: boolean) => void;
};

export const useStore = create<TAppStore>((set) => ({
   isModalOpen: false,
   setIsModalOpen: (value: boolean) => set({ isModalOpen: value }),
}));
