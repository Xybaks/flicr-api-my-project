import {
    addTag, deleteTag,
    InitialStatePhotosReducerType,
    photosReducer,
    setIsGettingPhotosProgress, setNewError, setNewName, setPage,
    setPhotos,
    setSearchName
} from "./photosReducer";
import {ActionsType} from "./reduxStore";
import {PhotoType} from "../api/api";

let startState: InitialStatePhotosReducerType = {
    searchName: "car",
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
            farm: 4,
            id: "3459301672",
            isfamily: 0,
            isfriend: 0,
            ispublic: 1,
            owner: "35676113@N08",
            secret: "c99ea870ee",
            server: "3594",
            title: "car",
            tags: ["one", "w", "asCaRRRRd", "lol", "iWantToWork", "f", "safa"]
        }
    ],
    isGettingPhotosSuccess: true,
    isGettingPhotosProgress: false,
    newName: "car",
    someError: ""
}

beforeEach(() => {
        startState = {
            searchName: "car",
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
                    farm: 4,
                    id: "3459301672",
                    isfamily: 0,
                    isfriend: 0,
                    ispublic: 1,
                    owner: "35676113@N08",
                    secret: "c99ea870ee",
                    server: "3594",
                    title: "car",
                    tags: ["one", "w", "asCaRRRRd", "lol", "iWantToWork", "f", "safa"]
                }
            ],
            isGettingPhotosSuccess: true,
            isGettingPhotosProgress: false,
            newName: "cow",
            someError: ""
        }
    }
)

test('photos should be correct added', () => {
    const page = 1
    const pages = 1
    const newPhotoArray: PhotoType[] = [{
        farm: 4,
        id: "13682192333",
        isfamily: 0,
        isfriend: 0,
        ispublic: 1,
        owner: "Mixa",
        secret: "882c1eecff",
        server: "3718",
        title: "CarS",
    }]

    const action: ActionsType = setPhotos(newPhotoArray,page,pages );
    const endState = photosReducer(startState, action)

    expect(endState.photo.length).toBe(1);
    expect(endState.photo[0].id).toBe("13682192333");
    expect(endState.photo[0].tags.length).toBe(0);
});

test('isGettingPhotosProgress should be correct changed', () => {

    let isGettingPhotosProgress:boolean =true
    const action: ActionsType = setIsGettingPhotosProgress(isGettingPhotosProgress);
    const endState = photosReducer(startState, action)

    expect(endState.isGettingPhotosProgress).toBeTruthy()

    isGettingPhotosProgress =false
    const newAction: ActionsType = setIsGettingPhotosProgress(isGettingPhotosProgress);
    const endState1 = photosReducer(startState, newAction)

    expect(endState1.isGettingPhotosProgress).toBeFalsy()
});

test('searchName should be correct changed', () => {
    const someName:string = "TodayIsMyDay"
    const action: ActionsType = setSearchName(someName);
    const endState = photosReducer(startState, action)

    expect(endState.searchName).toBe("TodayIsMyDay");
});

test('tag should be correct added', () => {
    const id= "13682192405"
    const tag= "mine"
    const action: ActionsType = addTag(id,tag);
    const endState = photosReducer(startState, action)

    expect(endState.photo[0].tags.some(element => element === tag)).toBeTruthy();
});

test('tag should be correct deleted', () => {
    const id= "13682192405"
    const tag= "dsdadsfas"
    const action: ActionsType = deleteTag(id,tag);
    const endState = photosReducer(startState, action)

    expect(endState.photo[0].tags.length).toBe(6)
    expect(endState.photo[0].tags.some(element => element !== tag)).toBeTruthy();
});

test('page should be correct changed', () => {
    const page= 11
    const action: ActionsType = setPage(page);
    const endState = photosReducer(startState, action)
    expect(endState.page).toBe(11);
});

test('setNewName should be correct changed', () => {
    const newName:string= "newNewName"
    const action: ActionsType = setNewName(newName);
    const endState = photosReducer(startState, action)
    expect(endState.newName).toBe("newNewName");
});


test('error should be correct changed', () => {
    const error:string= "newBigError"
    const action: ActionsType =setNewError(error);
    const endState = photosReducer(startState, action)
    expect(endState.someError).toBe("newBigError");
});