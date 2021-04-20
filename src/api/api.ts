import axios from "axios";

const apiKey = "fe6a01fa9267d89be3df137d31d4607c"
const instance = axios.create({
    baseURL: `https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=true&api_key=${apiKey}&per_page=20&page=100`,
})

export const photoAPI = {
    getPhotos(text: string) {
        return instance.get<GetPhotosResponseType>(`&text=${text}`)
            .then((r)=>{
                console.log(r.data)
                return r.data
            }, (e)=>{
                console.warn(e.data)
            })
    }
}
//types
export type GetPhotosResponseType = {
    stat: string,
    photos:{
        page: number,
        pages: number,
        perpage: number,
        total: string,
        photo:Array<PhotoType>
    }
}
type PhotoType={
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
//
// export const authAPI = {
//     me() {
//         return instance.post<MeResponseType>(`/auth/me`, {})
//     },
//     login(email: string, password: string, rememberMe: boolean = false) {
//         return instance.post<LoginResponseType>(`/auth/login`, {email, password, rememberMe})
//     },
//     logout() {
//         return instance.delete<LogoutResponseType>(`/auth/me`, {})
//     },
//     register(email: string, password: string) {
//         return instance.post<RegisterResponseType>('auth/register', {email: email, password: password});
//     },
//     recoverPassword(email: string) {
//         return instance.post('auth/forgot', {email})
//     }
// }
//
// //types
// export type MeResponseType = {
//     token: string
//     tokenDeathTime: number
//     __v: number
//     _id: string;
//     email: string;
//     name: string;
//     publicCardPacksCount: number; // number of decks
//     created: Date;
//     updated: Date;
//     isAdmin: boolean; // do not work
//     verified: boolean; // confirmed mail (if the password was restored - true)
//     rememberMe: boolean;
//     avatar?: string; // reference to user avatar
//     error?: string;
// }
//
// type LoginResponseType = {
//     _id: string
//     email: string
//     name: string
//     avatar?: string
//     publicCardPacksCount: number // number of decks
//     created: Date
//     updated: Date
//     isAdmin: boolean
//     verified: boolean // confirmed mail
//     rememberMe: boolean
//     error?: string
// }
//
// type LogoutResponseType = {
//     info: string
//     error: string
// }
//
// type RegisterResponseType = {
//     error?: string
// }