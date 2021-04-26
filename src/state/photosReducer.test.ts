import {InitialStateFavoriteReducerType} from "./favoriteReducer";
import {InitialStatePhotosReducerType, PhotoInStoreType} from "./photosReducer";

let startState: InitialStatePhotosReducerType = {
    searchName: "",
    page: 1,
    pages: 1,
    perpage: 20,
    total: "2",
    photo: [
        {
            farm: 4,
            id: "13682192405",
            isfamily: 0,
            isfriend: 0,
            ispublic: 1,
            owner: "33399358@N00",
            secret: "882c1eecff",
            server: "3718",
            title: "Car.",
            tags: ["afds", "dsdadsfas", "asd", "sadf", "fasd", "f", "safa"]
        }, {
            farm: 3,
            id: "211",
            isfamily: 0,
            isfriend: 0,
            ispublic: 1,
            owner: "Nick",
            secret: "882c3f",
            server: "2118",
            title: "x3",
            tags: ["rweg", "ww", "eer", "ll", "ljj", "f", "safa"]
        }
    ],
    isGettingPhotosSuccess: true,
    isGettingPhotosProgress: false,
    newName: "cow",
    someError: ""
}

beforeEach(() => {
        // startState = {
    }
)