export class ApiData {
    home: HomeData[];
    about: AboutData[];
    contact: ContactData;
}
export class HomeData {
    id: number;
    title: string;
}

export class ContactData {
    name: string;
}

export class AboutData {
    id: number;
    body: string;
    postId: number;
}