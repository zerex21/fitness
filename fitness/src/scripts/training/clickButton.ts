function clickSearch(): void {
    const buttonForYou = document.querySelector(".button_for_you") as HTMLElement;
    const buttonSearch = document.querySelector(".button_search") as HTMLElement;
    const trainingForYou = document.querySelector(".training_content") as HTMLElement;
    const trainingSearch = document.querySelector(".training_search_container") as HTMLElement;
    /******************* */
    let trainingContainerAll = document.querySelector('.training_container_videos') as HTMLElement;
  trainingContainerAll.innerHTML = '';
  /************************ */
    buttonForYou.removeAttribute("disabled");
    trainingForYou.classList.toggle("training_none");
    trainingSearch.classList.toggle("training_none");
    buttonSearch.setAttribute("disabled", "disabled");
    /******************************** */
    trainingForYou.style.display = 'none'
    trainingSearch.style.display = 'block'
    /***************************** */
    let url = new URL(window.location.href);

    document.body.classList.remove('forYou', 'search');
    document.body.classList.add('search');
    url.searchParams.set('training', 'search');
    history.pushState(null, '', url);
}

function clickForYou(): void {
    const buttonForYou = document.querySelector(".button_for_you") as HTMLElement;
    const buttonSearch = document.querySelector(".button_search") as HTMLElement;
    const trainingForYou = document.querySelector(".training_content") as HTMLElement;
    const trainingSearch = document.querySelector(".training_search_container") as HTMLElement;
   /******************** */
    let trainingContainerAll = document.querySelector('.training_container_videos') as HTMLElement;
    trainingContainerAll.innerHTML = '';
    /********************** */
    buttonSearch.removeAttribute("disabled");
    trainingForYou.classList.toggle("training_none");
    trainingSearch.classList.toggle("training_none");
    buttonForYou.setAttribute("disabled", "disabled");
    /************************ */
    trainingForYou.style.display = 'block'
    trainingSearch.style.display = 'none'
    /********************** */
    let url = new URL(window.location.href);

    document.body.classList.remove('forYou', 'search');
    document.body.classList.add('forYou');
    url.searchParams.set('training', 'forYou');
    history.pushState(null, '', url);
}

export { clickForYou, clickSearch };