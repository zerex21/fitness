import { Yatranslate } from './../../types/type';

const yatranslate:Yatranslate = {
    lang: "ru",
    langFirstVisit: 'ru',
};


export let yaTranslateInit = ():void => {

    if (yatranslate.langFirstVisit && !localStorage.getItem('yt-widget')) {
        yaTranslateSetLang(yatranslate.langFirstVisit);
    }

    const script = document.createElement('script') as HTMLScriptElement ;
    script.src = `https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=${yatranslate.lang}&widgetTheme=light&autoMode=false`;
    document.getElementsByTagName('head')[0].appendChild(script);


    yaTranslateEventHandler('click', '[data-ya-lang]', function (el:Element | Event) {
        let element = el as Element;
        yaTranslateSetLang(String(element.getAttribute('data-ya-lang')));
        window.location.reload();
    })
}

function yaTranslateSetLang(lang:string):void {
    localStorage.setItem('yt-widget', JSON.stringify({
        "lang": lang,
        "active": true
    }));
}

/* function yaTranslateGetCode() {
    return (localStorage["yt-widget"] != undefined && JSON.parse(localStorage["yt-widget"]).lang != undefined) ? JSON.parse(localStorage["yt-widget"]).lang : yatranslate.lang;
} */

function yaTranslateEventHandler(event:string, selector:string, handler: { (el: Event): void; (arg0: Element): void; }) {
    document.addEventListener(event, function (e) {
        let element = e.target as HTMLInputElement;
        let el = element.closest(selector);
        if (el) handler(el);
    });
}