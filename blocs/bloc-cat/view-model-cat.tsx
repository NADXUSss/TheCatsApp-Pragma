import { ApiData } from "./data/api-cats";
import { catInterface } from "./models/cat";

export class ViewModelCat {

    apiDataClass: ApiData;
    cats: catInterface[] = [];

    constructor() {
        this.apiDataClass = new ApiData();
    }

    async getCats(setcatsInfo: any) {
        this.cats = await this.apiDataClass.getCatsApi()
        setcatsInfo(this.cats)

    }

}