export class Post {
    id: number;
    author: string;
    text: string;

    constructor(text, author = 'Anonymous') {
        this.author = author;
        this.text = text;

        this.id = this.generateID();
    }

    private generateID(): number {
        return -1;
    }

    setID(id: number) {
        this.id = id;
    }
}