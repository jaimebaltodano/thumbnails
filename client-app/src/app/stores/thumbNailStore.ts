import { makeAutoObservable } from "mobx";
import agent from "../api/agent";
import { ThumbNail } from "../models/thumbnail";


export default class ThumbNailStore {
    thumbNails: ThumbNail[] = [];
    selectedImage: ThumbNail | undefined = undefined;
    viewMode = false;
    loading = false;
    loadingInitial = false;

    constructor() {
        makeAutoObservable(this)
    }

    loadThumbNails = async () => {
        this.setLoadingInitial(true);
        try {
            const thumbnailsapi = await agent.ThumbNails.list();

            thumbnailsapi.forEach(thumbNail => {
                this.thumbNails.push(thumbNail)
            })
            this.setLoadingInitial(false);
        }
        catch (error) {
            console.log(error)
            this.setLoadingInitial(false);
        }
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    selectImage = (id: string) => {
        this.selectedImage = this.thumbNails.find(x => x.id === id)
    }

    cancelSelectedImage = () => {
        this.selectedImage = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectImage(id) : this.cancelSelectedImage();
        this.viewMode = true;
    }

    closeForm = () => {
        this.viewMode = false;
    }

}