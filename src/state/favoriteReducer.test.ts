import {
    addTagToFavorite,
    deletePhotoFromFavorite, deleteTagFromFavorite,
    favoriteReducer,
    InitialStateFavoriteReducerType,
    setPhotoToFavorite
} from "./favoriteReducer";
import {PhotoInStoreType} from "./photosReducer";
import {ActionsType} from "./reduxStore";



let startState: InitialStateFavoriteReducerType = {favorite: []}
beforeEach(() => {
        startState = {
            favorite: [
                {
                    favoritePhotoId: "13682192405",
                    favoritePhoto: {
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
                    }
                },
                {
                    favoritePhotoId: "211",
                    favoritePhoto: {
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
                }]
        }
    }
)

test('photo should be correct added', () => {
    const favoritePhotoId = "13682192333"
    const newPhoto: PhotoInStoreType = {
        farm: 4,
        id: "13682192333",
        isfamily: 0,
        isfriend: 0,
        ispublic: 1,
        owner: "Mixa",
        secret: "882c1eecff",
        server: "3718",
        title: "CarS",
        tags: ["112", "332", "5122", "25", "2344325", "1", "44"]
    }

    const action: ActionsType = setPhotoToFavorite(favoritePhotoId, newPhoto);
    const endState = favoriteReducer(startState, action)

    expect(endState.favorite.length).toBe(3);
    expect(endState.favorite[2].favoritePhotoId).toBe("13682192333");
    expect(endState.favorite[2].favoritePhoto.tags[1]).toBe("332");

});


test('photo should be correct deleted', () => {
    const id = "13682192405"
    const action: ActionsType = deletePhotoFromFavorite(id);
    const endState = favoriteReducer(startState, action)
    expect(endState.favorite.length).toBe(1);
    expect(endState.favorite[0].favoritePhotoId).toBe("211")
});

test('tag  should be correct added to photo', () => {
    const id = "13682192405"
    const tag = "newTagE"
    const action: ActionsType = addTagToFavorite(id, tag);
    const endState = favoriteReducer(startState, action)
    expect(endState.favorite.length).toBe(2);
    expect(endState.favorite[0].favoritePhoto.tags).toContain("newTagE")
});

test('tag  should be correct deleted from photo', () => {
    const id = "211"
    const tag = "ljj"
    const action: ActionsType = deleteTagFromFavorite(id, tag);
    const endState = favoriteReducer(startState, action)
    expect(endState.favorite.length).toBe(2);
    expect(endState.favorite[1].favoritePhoto.tags.length).toBe(6)
    expect(endState.favorite[1].favoritePhoto.tags.some(element => element === "ljj")).toBeFalsy()
});
