import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"; // Don't worry about red lines here ...

interface IPost {
    // attributes from http://jsonplaceholder.typicode.com/posts
    id: number;
    userId: number;
    title: string;
    body: string;
}

let element: HTMLDivElement = <HTMLDivElement>document.getElementById("content");

axios.get<IPost[]>("http://jsonplaceholder.typicode.com/posts")
    .then((response: AxiosResponse<IPost[]>) => {
        let data: IPost[] = response.data;
        element.innerHTML = JSON.stringify(data);
        data.forEach(element => {
            console.log(element.title);
        });
    })
    .catch((error: AxiosError) => {
        console.log(error);
        element.innerHTML = error.message;
    });