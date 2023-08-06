import { catInterface } from "../models/cat";

export class ApiData {

    async getCatsApi() {
        let response = await fetch('https://api.thecatapi.com/v1/breeds?limit=10', {
            method: "GET",
            headers: {
                "x-api-key": "bda53789-d59e-46cd-9bc4-2936630fde39"
            },
        })


        let cats = await response.json()
        let catsWithImage: any = []

        for (let i = 0; i < cats.length; i++) {
            const element = cats[i];
            catsWithImage.push({
                ...element,
                image: await this.getCatsImg(element.reference_image_id)
            })
        }

        return catsWithImage
    }

    async getCatsImg(reference_image_id: string) {
        let responseImages = await fetch(`https://api.thecatapi.com/v1/images/${reference_image_id}`, {
            method: "GET",
            headers: {
                "x-api-key": "bda53789-d59e-46cd-9bc4-2936630fde39"
            },
        })
        let imageUrlData = await responseImages.json()
        return imageUrlData.url
    }
}