import { AccordionProps } from "@/interface";
import { create } from "zustand";

const useAccordionStore = create<AccordionProps>((set) => ({
    openItem:null,  //initially no item is open
    toggleItem:(id:number) => set((state) => ({
        openItem:state.openItem === id ? null : id, //toggle open/close
    }))
}))


export default useAccordionStore;