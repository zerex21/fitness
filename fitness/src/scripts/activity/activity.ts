let count = 1;
let arrJson: string | null = localStorage.getItem('activity');
let arrLocal = JSON.parse(String(arrJson));
let pages = 0;
export function createItemsActivity() {
    arrJson = localStorage.getItem('activity');
    arrLocal = JSON.parse(String(arrJson));
    const containerActivity = document.querySelector(".active-page__workout-item") as HTMLElement;
    if (arrLocal) {
        containerActivity.innerHTML = "";
        for (let i = (count - 1) * 5; i < arrLocal.length && i < count * 5; i++) {
            const containerItem = document.createElement("div") as HTMLDivElement;
            containerItem.className = "active-page__workout-details";
            containerItem.innerHTML = `
            <div class="active-page__video">
                    <img src="${arrLocal[i].linkPic}">
                </div>
                <div class="active-page__aim-muscles-time">
                    <p class="aim bold">${arrLocal[i].purpose}</p>
                    <p class="muscles bold">${arrLocal[i].muscle}</p>
                    <p class="time">${arrLocal[i].date}</p>
                </div> 
            `;
            containerActivity.append(containerItem);
        }
        let time = 0;
        for (let i = 0; i < arrLocal.length; i++) {
            if (arrLocal[i].duration) {
                time += arrLocal[i].duration;
            }
        }
        const timeTraining = document.querySelector(".time-training") as HTMLElement;
        timeTraining.innerHTML = `${time}`;
        pages = Math.ceil(arrLocal.length / 5);
        const amountTr = document.querySelector(".active-page__workout-quantity") as HTMLElement;
        amountTr.innerHTML = `${arrLocal.length}`;
        const numPage = document.querySelector(".pagination_number") as HTMLElement;
        numPage.innerHTML = `${count}/${pages}`;
    }
}

export function shiftLeftActivity() {
    if (count > 1) {
        count -= 1;
        createItemsActivity()
    }
}

export function shiftRightActivity() {
    if (count < pages) {
        count += 1;
        createItemsActivity()
    }
}

