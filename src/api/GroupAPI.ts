import { api } from "../utility/constants";
import { Requests } from "./Requests";

export class GroupAPI {
    public static getGroups() {
        return Requests.doGet(api.group)
    }

    public static getCategories() {
        return Requests.doGet(api.group + "/categories")
    }
}