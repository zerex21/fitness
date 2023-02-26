import { changeActiveLang } from './../header/setUndeline';
import { Yatranslate } from './../../types/type';

const yatranslate:Yatranslate = {
    lang: "ru",
    langFirstVisit: 'ru',
};


export let yaTranslateInit = (lan:string):void => {
    /********** */
    let url = new URL(window.location.href);
/****************** */

    if (yatranslate.langFirstVisit && !localStorage.getItem('yt-widget')) {

/*********************** */
        if (url.searchParams.get('lan') === 'en') {
            yatranslate.langFirstVisit ="en"
        } else if (url.searchParams.get('lan') === 'ru') {
            yatranslate.langFirstVisit ="ru"
        }
/**************************** */
        changeActiveLang()
        yaTranslateSetLang(yatranslate.langFirstVisit);
    }

    const script = document.createElement('script') as HTMLScriptElement ;

/******************* */
    if(lan) {
      yaTranslateSetLang(lan)
      changeActiveLang()
    }
/********************* */

    script.src = `https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=${yatranslate.lang}&widgetTheme=light&autoMode=false`;
    document.getElementsByTagName('head')[0].appendChild(script);


    yaTranslateEventHandler('click', '[data-ya-lang]', function (el:Element | Event) {
        let element = el as Element;
        yaTranslateSetLang(String(element.getAttribute('data-ya-lang')));
        window.location.reload();
    })

    const chooseLanguage = document.querySelector('.choose-language') as HTMLAnchorElement;

    chooseLanguage?.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        const lang = target.closest('div') as HTMLElement;
        let url = new URL(window.location.href);

        if (lang.classList.contains('lanRu')) {
            document.body.classList.remove('ru', 'en');
            document.body.classList.add('ru');
            url.searchParams.set('lan', 'ru');
           history.pushState(null, '', url);

        } else if (lang.classList.contains('lanEn')) {
            document.body.classList.remove('ru', 'en');
            document.body.classList.add('en');
            url.searchParams.set('lan', 'en');
            history.pushState(null, '', url);
        }

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