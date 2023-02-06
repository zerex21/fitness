import Page from "../../core/templates/pages";

export const enum ErrorTypes {
    Error_404 = 404,
}

class ErrorPage extends Page {
    private errorType: ErrorTypes | string;

    static TextObject: {[prop: string]: string} = {
        '404': 'Error! The page was not foun.'
    };
 
    constructor(id: string, errorType: ErrorTypes | string) {
        super(id);
        this.errorType = errorType;
    };

    render() {
        const title = this.createHeaderTitle(ErrorPage.TextObject[this.errorType]);
        this.container.append(title);
        return this.container;
    }
}

export default ErrorPage;