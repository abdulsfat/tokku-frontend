import {Product} from "@/type";

const URL = `${process.env.PUBLIC_API_URL}/categories`

const getCategories = async (): Promise<Product[]> => {
    const res = await fetch(URL)

    return res.json()
}

export default getCategories;