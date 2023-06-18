import {create} from "zustand";

type CarStore = {
    car: string
    setCar: (car: string) => void
}

const useCarStore = create<CarStore>((set) => ({
    car: 'bmw',
    setCar: (car: string) => set({car: car})
}))

export default useCarStore