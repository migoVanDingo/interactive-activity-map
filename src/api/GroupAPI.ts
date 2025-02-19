import { api, services } from "../utility/constants";
import { Requests } from "./Requests";

export class GroupAPI {
    public static getGroups() {
        return Requests.doGet(services.datastore.port, services.datastore.endpoint.aolme_videos)
    }

    /* public static getCategories() {
        return Requests.doGet(api.group + "/categories")
    } */
}