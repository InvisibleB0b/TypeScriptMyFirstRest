import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";

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
        //element.innerHTML = JSON.stringify(data);
        let longHtml: string = makeLongHtmlString(data);
        element.innerHTML = longHtml;
    })
    .catch((error: AxiosError) => {
        console.log(error);
        element.innerHTML = error.message;
    });

let messageElement: HTMLDivElement = <HTMLDivElement>document.getElementById("message");
messageElement.innerHTML = "Done";

function makeLongHtmlString(data: IPost[]) {
    let longHtml: string = "<ol>";
    data.forEach(element => {
        console.log(element.title);
        longHtml += "<li>" + element.title + "</li>";
    });
    longHtml += "</ol>";
    return longHtml;
}
