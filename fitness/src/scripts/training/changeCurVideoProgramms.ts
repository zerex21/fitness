



export let getCurVideo = (tmpNum:number) =>{
    let player = document.querySelector("iframe") as HTMLElement;
  /*   player.addEventListener('click', () =>{
        console.log('asd')
    }) */

    let clickIframe = window.setInterval(checkFocus, 100);
   let i = 0;

   function checkFocus() {
    if(document.activeElement == player) {
        let players;



        /* console.log("clicked "+(i++)); */
        window.focus();
     }
  }
/*     window.focus();
    window.addEventListener('blur', function(e){
        if(document.activeElement == player)
        {

            window.focus()
            player.addEventListener('change', () => {
                console.log('asd')
            })
        }
    }); */




    var ifrm1 = document.querySelector('iframe')
    /* const body = document.querySelector('#current-page') */
    ifrm1?.addEventListener('change', (e) => {
        console.log('111')
  /*       ifrm1?.addEventListener('ended', ()=>{
            console.log('asd')
        }) */
/*         let player = document.querySelector(".video-stream") as HTMLIFrameElement;
    player.addEventListener('click', () =>{
        console.log('asd')
    }) */
    })


}

