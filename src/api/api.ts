import axios from "axios";

const apiKey = "fe6a01fa9267d89be3df137d31d4607c"
const instance = axios.create({
    baseURL: `https://api.flickr.com/services/rest/`,
})

export const photoAPI = {
    getPhotos(text: string, page: number) {
        return instance.get<GetPhotosResponseType>(
            `?method=flickr.photos.search`
            , {
                params: {
                    api_key: apiKey,
                    format: "json",
                    page,
                    per_page: 20,
                    text,
                    nojsoncallback: true,
                    sort: "relevance"
                }
            }
        )
            .then((r) => {
                return r.data
            })
    },
    //this request is not used yet
    getOnePhoto(id: string = "19549873603") {
        return instance.get<GetOnePhotoResponseType>(`?method=flickr.photos.getInfo&api_key=${apiKey}&photo_id=${id}&format=json&nojsoncallback=true`)
            .then((r) => {
                    return r.data
                }
            )
    }
}

//types
export type GetPhotosResponseType = {
    stat: string,
    photos: {
        page: number,
        pages: number,
        perpage: number,
        total: string,
        photo: Array<PhotoType>
    }
}
export type PhotoType = {
    farm: number
    id: string
    isfamily: number
    isfriend: number
    ispublic: number
    owner: string
    secret: string
    server: string
    title: string
}
export type GetOnePhotoResponseType = {
    photo: {
        comments: {
            _content: string
        }
        dates: {
            posted: string, taken: string, takengranularity: number, takenunknown: string, lastupdate: string
        }
        dateuploaded: string
        description: { _content: string }
        editability: { cancomment: number, canaddmeta: number }
        farm: number
        id: string
        isfavorite: number
        license: string
        media: string
        notes: { note: Array<string> }
        originalformat: string
        originalsecret: string
        owner: {
            iconfarm: number
            iconserver: string
            location: string
            nsid: string
            path_alias: null | string
            realname: string
            username: string
        }
        people: { haspeople: number }
        publiceditability: { cancomment: number, canaddmeta: number }
        rotation: number
        safety_level: string
        secret: string
        server: string
        tags: { tag: Array<string> }
        title: { _content: string }
        urls: { url: Array<string> }
        usage: { candownload: number, canblog: number, canprint: number, canshare: number }
        views: string
        visibility: { ispublic: number, isfriend: number, isfamily: number }
        stat: string
    }
}