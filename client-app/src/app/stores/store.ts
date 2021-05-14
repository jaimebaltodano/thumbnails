import { createContext, useContext } from "react";
import ThumbNailStore from "./thumbNailStore";

interface Store {
    thumbNailStore: ThumbNailStore
}

export const store: Store={
    thumbNailStore: new ThumbNailStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext)
}