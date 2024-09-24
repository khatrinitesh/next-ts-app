import { User, UserStore } from "@/types/type";
import { create } from "zustand";

const useUserStore = create<UserStore>((set) => ({
    users:[],
    fetchUsers:async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data:User[] = await response.json();
        set({users:data});
    }
}))

export default useUserStore