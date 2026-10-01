/* =========================================================
   人體巡航
   script.js
========================================================= */


/* =========================================================
   1. 器官資料
========================================================= */

const organs = {

    brain: {
        name: "腦",
        color: "#e987a6"
    },

    heart: {
        name: "心臟",
        color: "#e94f5d"
    },

    lungs: {
        name: "肺",
        color: "#ef9ba6"
    },

    smallIntestine: {
        name: "小腸",
        color: "#eaa35e"
    },

    largeIntestine: {
        name: "大腸",
        color: "#bd815b"
    },

    stomach: {
        name: "胃",
        color: "#e98670"
    },

    liver: {
        name: "肝臟",
        color: "#9d504d"
    },

    kidney: {
        name: "腎臟",
        color: "#a84d64"
    },

    reproductive: {
        name: "生殖器",
        color: "#bd6d9b"
    },

    pancreas: {
        name: "胰臟",
        color: "#e8bd72"
    }

};



/* =========================================================
   2. 活動一器官
========================================================= */

const activity1Organs = [

    "brain",
    "heart",
    "lungs",
    "smallIntestine",
    "largeIntestine",
    "stomach",
    "liver",
    "kidney",
    "reproductive"

];



/* =========================================================
   3. 活動二器官
========================================================= */

const activity2Organs = [

    "brain",
    "heart",
    "lungs",
    "largeIntestine",
    "stomach",
    "liver",
    "kidney",
    "pancreas"

];



/* =========================================================
   4. SVG 器官
========================================================= */

function createOrganSVG(type) {

    const color =
        organs[type]?.color || "#999";


    const common = `
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        aria-hidden="true"
    `;



    /* -------------------------
       腦
    ------------------------- */

    if (type === "brain") {

        return `
        <svg ${common}>

            <path
                d="
                    M27 50
                    C18 45 18 32 27 27
                    C30 17 43 13 51 19
                    C61 12 75 19 75 30
                    C84 35 83 48 75 54
                    C80 64 72 76 62 75
                    C55 84 41 82 37 74
                    C25 76 18 66 23 57
                    C18 54 20 50 27 50
                    Z
                "
                fill="${color}"
                stroke="#873d5c"
                stroke-width="3"
            />

            <path
                d="
                    M50 21
                    C45 30 48 39 44 47
                    C41 54 47 60 43 69
                "
                fill="none"
                stroke="#b94f78"
                stroke-width="3"
                stroke-linecap="round"
            />

            <path
                d="
                    M29 33
                    C38 32 39 40 34 46
                    M62 25
                    C57 32 60 39 67 41
                    M59 48
                    C52 48 52 55 58 59
                    M30 58
                    C37 55 39 62 35 67
                    M66 63
                    C60 64 58 70 62 73
                "
                fill="none"
                stroke="#c85d82"
                stroke-width="3"
                stroke-linecap="round"
            />

        </svg>
        `;

    }



    /* -------------------------
       心臟
    ------------------------- */

    if (type === "heart") {

        return `
        <svg ${common}>

            <path
                d="
                    M50 82
                    C45 76 18 59 18 37
                    C18 22 34 17 45 27
                    L50 33
                    L55 27
                    C66 17 82 22 82 37
                    C82 59 55 76 50 82
                    Z
                "
                fill="${color}"
                stroke="#a72f3d"
                stroke-width="3"
            />

            <path
                d="
                    M51 33
                    C55 41 62 42 67 36
                    M45 28
                    C39 35 39 42 44 47
                "
                fill="none"
                stroke="#f48a91"
                stroke-width="3"
                stroke-linecap="round"
            />

        </svg>
        `;

    }



    /* -------------------------
       肺
    ------------------------- */

    if (type === "lungs") {

        return `
        <svg ${common}>

            <path
                d="
                    M48 27
                    C39 27 29 35 25 45
                    C21 55 20 72 27 77
                    C35 82 46 75 48 63
                    Z
                "
                fill="${color}"
                stroke="#b45f69"
                stroke-width="3"
            />

            <path
                d="
                    M52 27
                    C61 27 71 35 75 45
                    C79 55 80 72 73 77
                    C65 82 54 75 52 63
                    Z
                "
                fill="${color}"
                stroke="#b45f69"
                stroke-width="3"
            />

            <path
                d="
                    M50 18
                    L50 61
                    M50 34
                    L39 46
                    M50 39
                    L61 49
                "
                fill="none"
                stroke="#a8515e"
                stroke-width="4"
                stroke-linecap="round"
            />

        </svg>
        `;

    }



    /* -------------------------
       胃
    ------------------------- */

    if (type === "stomach") {

        return `
        <svg ${common}>

            <path
                d="
                    M35 23
                    C39 34 40 38 35 43
                    C26 51 28 69 40 76
                    C52 82 70 74 72 61
                    C74 51 68 44 60 44
                    C55 44 53 39 54 31
                    C55 24 49 20 43 23
                    Z
                "
                fill="${color}"
                stroke="#b75b4b"
                stroke-width="3"
            />

            <path
                d="
                    M60 44
                    C66 48 68 55 64 61
                    M40 50
                    C50 47 57 53 54 62
                "
                fill="none"
                stroke="#f2b09c"
                stroke-width="3"
                stroke-linecap="round"
            />

        </svg>
        `;

    }



    /* -------------------------
       肝臟
    ------------------------- */

    if (type === "liver") {

        return `
        <svg ${common}>

            <path
                d="
                    M15 42
                    C27 26 51 21 78 29
                    C87 32 89 43 82 52
                    C72 65 58 69 42 68
                    C29 67 17 62 13 54
                    C11 50 12 46 15 42
                    Z
                "
                fill="${color}"
                stroke="#713b3a"
                stroke-width="3"
            />

            <path
                d="
                    M20 47
                    C37 42 55 43 76 48
                "
                fill="none"
                stroke="#c57a70"
                stroke-width="3"
                stroke-linecap="round"
            />

        </svg>
        `;

    }



    /* -------------------------
       腎臟
    ------------------------- */

    if (type === "kidney") {

        return `
        <svg ${common}>

            <path
                d="
                    M40 20
                    C25 18 17 31 19 48
                    C20 64 29 77 41 75
                    C49 73 51 65 47 57
                    C44 51 45 45 48 39
                    C52 30 48 22 40 20
                    Z
                "
                fill="${color}"
                stroke="#713b4d"
                stroke-width="3"
            />

            <path
                d="
                    M60 20
                    C75 18 83 31 81 48
                    C80 64 71 77 59 75
                    C51 73 49 65 53 57
                    C56 51 55 45 52 39
                    C48 30 52 22 60 20
                    Z
                "
                fill="${color}"
                stroke="#713b4d"
                stroke-width="3"
            />

            <path
                d="
                    M43 51
                    L50 48
                    L57 51
                "
                fill="none"
                stroke="#d48698"
                stroke-width="3"
            />

        </svg>
        `;

    }



    /* -------------------------
       小腸
    ------------------------- */

    if (type === "smallIntestine") {

        return `
        <svg ${common}>

            <path
                d="
                    M26 31
                    C45 21 72 27 73 40
                    C74 50 55 47 45 42
                    C33 36 24 43 28 51
                    C32 59 60 53 69 60
                    C78 68 66 78 52 74
                    C39 70 24 76 22 63
                    C20 52 32 48 43 53
                    C54 58 69 52 68 44
                    C67 36 48 38 38 43
                    C29 47 20 41 26 31
                    Z
                "
                fill="none"
                stroke="${color}"
                stroke-width="8"
                stroke-linecap="round"
            />

        </svg>
        `;

    }



    /* -------------------------
       大腸
    ------------------------- */

    if (type === "largeIntestine") {

        return `
        <svg ${common}>

            <path
                d="
                    M27 27
                    C18 30 17 43 21 50
                    C18 60 21 72 30 75
                    C39 78 44 72 50 68
                    C56 72 61 78 70 75
                    C79 72 82 60 79 50
                    C83 43 82 30 73 27
                    C66 24 58 27 50 31
                    C42 27 34 24 27 27
                    Z
                "
                fill="none"
                stroke="${color}"
                stroke-width="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />

            <path
                d="
                    M32 36
                    C38 32 44 34 50 39
                    C56 34 62 32 68 36
                "
                fill="none"
                stroke="#d7a17c"
                stroke-width="3"
            />

        </svg>
        `;

    }



    /* -------------------------
       胰臟
    ------------------------- */

    if (type === "pancreas") {

        return `
        <svg ${common}>

            <path
                d="
                    M16 51
                    C26 39 43 36 59 41
                    C68 44 78 43 84 49
                    C77 56 68 59 58 57
                    C42 55 29 61 16 58
                    Z
                "
                fill="${color}"
                stroke="#b58a4f"
                stroke-width="3"
            />

            <circle
                cx="26"
                cy="50"
                r="5"
                fill="#f4d68e"
            />

            <circle
                cx="39"
                cy="47"
                r="4"
                fill="#f4d68e"
            />

            <circle
                cx="53"
                cy="50"
                r="4"
                fill="#f4d68e"
            />

            <circle
                cx="68"
                cy="51"
                r="4"
                fill="#f4d68e"
            />

        </svg>
        `;

    }



    /* -------------------------
       生殖器
    ------------------------- */

    if (type === "reproductive") {

        return `
        <svg ${common}>

            <path
                d="
                    M50 27
                    C41 27 35 34 35 42
                    C35 51 42 56 50 56
                    C58 56 65 51 65 42
                    C65 34 59 27 50 27
                    Z
                "
                fill="${color}"
                stroke="#8f4f78"
                stroke-width="3"
            />

            <path
                d="
                    M39 54
                    C33 61 32 70 36 76
                    M61 54
                    C67 61 68 70 64 76
                    M43 61
                    L50 71
                    L57 61
                "
                fill="none"
                stroke="#9f5c86"
                stroke-width="4"
                stroke-linecap="round"
            />

        </svg>
        `;

    }



    return `
        <svg ${common}>
            <circle
                cx="50"
                cy="50"
                r="30"
                fill="${color}"
            />
        </svg>
    `;

}



/* =========================================================
   5. 人體輪廓 SVG
========================================================= */

function createHumanBodySVG() {

    return `
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 720"
        aria-label="人體輪廓"
    >

        <!-- 頭 -->
        <circle
            cx="150"
            cy="70"
            r="42"
            fill="#e8eef2"
            stroke="#9eb2bf"
            stroke-width="3"
        />


        <!-- 頸部 -->
        <path
            d="
                M132 106
                L132 135
                L168 135
                L168 106
            "
            fill="#e8eef2"
            stroke="#9eb2bf"
            stroke-width="3"
        />


        <!-- 軀幹 -->
        <path
            d="
                M132 128
                C115 131 96 138 82 151
                C72 161 75 179 82 194

                L102 242
                L112 355

                C117 388 118 414 115 445

                L109 505
                L132 505

                L150 395

                L168 505
                L191 505

                L185 445
                C182 414 183 388 188 355

                L198 242
                L218 194

                C225 179 228 161 218 151

                C204 138 185 131 168 128

                Z
            "
            fill="#e8eef2"
            stroke="#9eb2bf"
            stroke-width="3"
            stroke-linejoin="round"
        />


        <!-- 左手臂 -->
        <path
            d="
                M84 151
                C70 157 62 170 57 187
                L32 271
                C29 282 35 290 44 293
                C53 296 60 290 63 280
                L94 205
            "
            fill="#e8eef2"
            stroke="#9eb2bf"
            stroke-width="3"
            stroke-linejoin="round"
        />


        <!-- 右手臂 -->
        <path
            d="
                M216 151
                C230 157 238 170 243 187
                L268 271
                C271 282 265 290 256 293
                C247 296 240 290 237 280
                L206 205
            "
            fill="#e8eef2"
            stroke="#9eb2bf"
            stroke-width="3"
            stroke-linejoin="round"
        />


        <!-- 左腿 -->
        <path
            d="
                M112 435
                L106 590
                L91 674
                C89 686 96 693 108 693
                L125 693
                C131 693 135 687 134 679
                L139 590
                L150 505
            "
            fill="#e8eef2"
            stroke="#9eb2bf"
            stroke-width="3"
            stroke-linejoin="round"
        />


        <!-- 右腿 -->
        <path
            d="
                M150 505
                L161 590
                L166 679
                C165 687 169 693 175 693
                L192 693
                C204 693 211 686 209 674
                L194 590
                L188 435
            "
            fill="#e8eef2"
            stroke="#9eb2bf"
            stroke-width="3"
            stroke-linejoin="round"
        />


        <!-- 身體中央參考線 -->
        <path
            d="
                M150 137
                L150 400
            "
            stroke="#bdccd5"
            stroke-width="2"
            stroke-dasharray="5 6"
        />

    </svg>
    `;

}



/* =========================================================
   6. 建立器官元素
========================================================= */

function createOrganElement(type) {

    const item =
        document.createElement("div");


    item.className =
        "organ-item";


    item.dataset.organ =
        type;


    item.setAttribute(
        "aria-label",
        organs[type].name
    );


    item.setAttribute(
        "title",
        organs[type].name
    );


    item.innerHTML =
        createOrganSVG(type);


    return item;

}



/* =========================================================
   7. 建立活動一
========================================================= */

function setupActivity1() {

    const bank =
        document.getElementById(
            "organBank1"
        );


    const body =
        document.getElementById(
            "bodyDropZone"
        );


    if (!bank || !body) {
        return;
    }


    bank.innerHTML = "";


    body
        .querySelectorAll(".placed-organ")
        .forEach(element => {

            element.remove();

        });


    activity1Organs.forEach(type => {

        const organ =
            createOrganElement(type);

        bank.appendChild(organ);

    });


    const bodyBackground =
        body.querySelector(
            ".body-background"
        );


    if (bodyBackground) {

        bodyBackground.innerHTML =
            createHumanBodySVG();

    }

}



/* =========================================================
   8. 建立活動二
========================================================= */

function setupActivity2() {

    const bank =
        document.getElementById(
            "organBank2"
        );


    if (!bank) {
        return;
    }


    bank.innerHTML = "";


    const shuffled =
        shuffleArray(
            activity2Organs
        );


    shuffled.forEach(type => {

        const organ =
            createOrganElement(type);

        bank.appendChild(organ);

    });

}



/* =========================================================
   9. Fisher-Yates 洗牌
========================================================= */

function shuffleArray(array) {

    const result =
        [...array];


    for (
        let i = result.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            result[i],
            result[j]
        ] =
        [
            result[j],
            result[i]
        ];

    }


    return result;

}



/* =========================================================
   10. 頁面切換
========================================================= */

function showPage(pageId) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove(
                "active"
            );

        });


    const target =
        document.getElementById(pageId);


    if (!target) {
        return;
    }


    target.classList.add(
        "active"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



/* =========================================================
   11. 所有 data-page 按鈕
========================================================= */

document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-page]"
            );


        if (!button) {
            return;
        }


        const pageId =
            button.dataset.page;


        showPage(pageId);

    }
);



/* =========================================================
   12. 拖曳狀態
========================================================= */

let currentDrag = null;



/* =========================================================
   13. Pointer Down
========================================================= */

document.addEventListener(
    "pointerdown",
    event => {

        const organ =
            event.target.closest(
                ".organ-item"
            );


        if (!organ) {
            return;
        }


        event.preventDefault();


        startDragging(
            organ,
            event
        );

    },
    {
        passive: false
    }
);



/* =========================================================
   14. Pointer Move
========================================================= */

document.addEventListener(
    "pointermove",
    event => {

        if (!currentDrag) {
            return;
        }


        event.preventDefault();


        moveDragging(event);

    },
    {
        passive: false
    }
);



/* =========================================================
   15. Pointer Up
========================================================= */

document.addEventListener(
    "pointerup",
    event => {

        if (!currentDrag) {
            return;
        }


        finishDragging(event);

    }
);



/* =========================================================
   16. Pointer Cancel
========================================================= */

document.addEventListener(
    "pointercancel",
    () => {

        if (!currentDrag) {
            return;
        }


        cancelDragging();

    }
);



/* =========================================================
   17. 開始拖曳
========================================================= */

function startDragging(
    element,
    event
) {

    const rect =
        element.getBoundingClientRect();


    currentDrag = {

        element: element,

        type:
            element.dataset.organ,

        originParent:
            element.parentElement,

        originNextSibling:
            element.nextSibling,

        width:
            rect.width,

        height:
            rect.height

    };


    element.classList.add(
        "dragging"
    );


    element.style.width =
        `${rect.width}px`;


    element.style.height =
        `${rect.height}px`;


    element.style.left =
        `${event.clientX}px`;


    element.style.top =
        `${event.clientY}px`;


    document.body.appendChild(
        element
    );


    moveDragging(event);

}



/* =========================================================
   18. 拖曳移動
========================================================= */

function moveDragging(event) {

    if (!currentDrag) {
        return;
    }


    const element =
        currentDrag.element;


    element.style.left =
        `${event.clientX}px`;


    element.style.top =
        `${event.clientY}px`;


    document
        .querySelectorAll(
            ".answer-drop-zone.drag-over"
        )
        .forEach(zone => {

            zone.classList.remove(
                "drag-over"
            );

        });


    const target =
        document.elementFromPoint(
            event.clientX,
            event.clientY
        );


    const answerZone =
        target?.closest(
            ".answer-drop-zone"
        );


    if (answerZone) {

        answerZone.classList.add(
            "drag-over"
        );

    }

}



/* =========================================================
   19. 結束拖曳
========================================================= */

function finishDragging(event) {

    if (!currentDrag) {
        return;
    }


    const element =
        currentDrag.element;


    const target =
        document.elementFromPoint(
            event.clientX,
            event.clientY
        );


    /*
     * -------------------------
     * 活動二
     * -------------------------
     */

    const answerZone =
        target?.closest(
            ".answer-drop-zone"
        );


    if (answerZone) {

        placeInAnswerZone(
            element,
            answerZone
        );


        cleanupDrag();

        return;

    }


    /*
     * -------------------------
     * 活動一
     * -------------------------
     */

    const body =
        target?.closest(
            "#bodyDropZone"
        );


    const activity1 =
        document.getElementById(
            "activity1Page"
        );


    if (
        body &&
        activity1.classList.contains(
            "active"
        )
    ) {

        placeOnHumanBody(
            element,
            body,
            event.clientX,
            event.clientY
        );


        cleanupDrag();

        return;

    }


    /*
     * -------------------------
     * 沒有放到有效位置
     * -------------------------
     */

    restoreOriginalPosition();


    cleanupDrag();

}



/* =========================================================
   20. 活動二：放入答案區
========================================================= */

function placeInAnswerZone(
    element,
    zone
) {

    element.classList.remove(
        "dragging"
    );


    element.classList.remove(
        "placed-organ"
    );


    element.style.position = "";

    element.style.left = "";

    element.style.top = "";

    element.style.width = "";

    element.style.height = "";


    const oldElement =
        zone.querySelector(
            ".organ-item"
        );


    /*
     * 如果原本有器官，
     * 先把舊器官放回器官區。
     */

    if (
        oldElement &&
        oldElement !== element
    ) {

        returnOrganToBank(
            oldElement
        );

    }


    zone.appendChild(
        element
    );


    zone.classList.remove(
        "drag-over"
    );

}



/* =========================================================
   21. 活動一：放到人體
========================================================= */

function placeOnHumanBody(
    element,
    body,
    clientX,
    clientY
) {

    const rect =
        body.getBoundingClientRect();


    const x =
        (
            (clientX - rect.left)
            /
            rect.width
        ) * 100;


    const y =
        (
            (clientY - rect.top)
            /
            rect.height
        ) * 100;


    element.classList.remove(
        "dragging"
    );


    element.classList.add(
        "placed-organ"
    );


    element.style.position =
        "absolute";


    element.style.left =
        `${x}%`;


    element.style.top =
        `${y}%`;


    element.style.width = "";

    element.style.height = "";


    body.appendChild(
        element
    );

}



/* =========================================================
   22. 返回器官區
========================================================= */

function returnOrganToBank(
    element
) {

    const bank =
        document.getElementById(
            "organBank2"
        );


    if (!bank) {
        return;
    }


    element.classList.remove(
        "placed-organ",
        "dragging"
    );


    element.style.position = "";

    element.style.left = "";

    element.style.top = "";

    element.style.width = "";

    element.style.height = "";


    bank.appendChild(
        element
    );

}



/* =========================================================
   23. 恢復原本位置
========================================================= */

function restoreOriginalPosition() {

    if (!currentDrag) {
        return;
    }


    const {
        element,
        originParent,
        originNextSibling
    } = currentDrag;


    element.classList.remove(
        "dragging",
        "placed-organ"
    );


    element.style.position = "";

    element.style.left = "";

    element.style.top = "";

    element.style.width = "";

    element.style.height = "";


    if (
        originNextSibling &&
        originNextSibling.parentElement ===
        originParent
    ) {

        originParent.insertBefore(
            element,
            originNextSibling
        );

    } else {

        originParent.appendChild(
            element
        );

    }

}



/* =========================================================
   24. 清除拖曳狀態
========================================================= */

function cleanupDrag() {

    if (!currentDrag) {
        return;
    }


    currentDrag.element.classList.remove(
        "dragging"
    );


    document
        .querySelectorAll(
            ".answer-drop-zone.drag-over"
        )
        .forEach(zone => {

            zone.classList.remove(
                "drag-over"
            );

        });


    currentDrag = null;

}



/* =========================================================
   25. 取消拖曳
========================================================= */

function cancelDragging() {

    restoreOriginalPosition();

    cleanupDrag();

}



/* =========================================================
   26. 重置活動一
========================================================= */

function resetActivity1() {

    const confirmed =
        window.confirm(
            "確定要重置目前的作答嗎？\n\n所有已放置的器官都會回到上方器官區。\n姓名不會被清除。"
        );


    if (!confirmed) {
        return;
    }


    /*
     * 如果目前正在拖曳，
     * 先取消拖曳。
     */

    if (currentDrag) {

        cancelDragging();

    }


    const bank =
        document.getElementById(
            "organBank1"
        );


    const body =
        document.getElementById(
            "bodyDropZone"
        );


    if (!bank || !body) {
        return;
    }


    /*
     * 找出人體上的所有器官
     */

    const placed =
        body.querySelectorAll(
            ".placed-organ"
        );


    placed.forEach(element => {

        element.classList.remove(
            "placed-organ"
        );


        element.style.position = "";

        element.style.left = "";

        element.style.top = "";

        element.style.width = "";

        element.style.height = "";


        bank.appendChild(
            element
        );

    });


    /*
     * 依原本順序重新排列
     */

    const elements =
        [...bank.children];


    elements.sort(
        (a, b) => {

            return (
                activity1Organs.indexOf(
                    a.dataset.organ
                )
                -
                activity1Organs.indexOf(
                    b.dataset.organ
                )
            );

        }
    );


    elements.forEach(element => {

        bank.appendChild(element);

    });


    /*
     * 回到畫面頂端
     */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



/* =========================================================
   27. 重置活動二
========================================================= */

function resetActivity2() {

    const confirmed =
        window.confirm(
            "確定要重置目前的作答嗎？\n\n所有已配對的器官都會回到上方器官區，並重新排列。\n姓名不會被清除。"
        );


    if (!confirmed) {
        return;
    }


    if (currentDrag) {

        cancelDragging();

    }


    const bank =
        document.getElementById(
            "organBank2"
        );


    if (!bank) {
        return;
    }


    /*
     * 找出活動二所有器官
     */

    const allOrgans =
        document.querySelectorAll(
            "#activity2Page .organ-item"
        );


    allOrgans.forEach(organ => {

        organ.classList.remove(
            "placed-organ",
            "dragging"
        );


        organ.style.position = "";

        organ.style.left = "";

        organ.style.top = "";

        organ.style.width = "";

        organ.style.height = "";


        bank.appendChild(
            organ
        );

    });


    /*
     * 清除所有作答區
     */

    document
        .querySelectorAll(
            "#activity2Page .answer-drop-zone"
        )
        .forEach(zone => {

            zone.innerHTML = "";

            zone.classList.remove(
                "drag-over"
            );

        });


    /*
     * 重新隨機排列
     */

    const items =
        [...bank.children];


    const shuffled =
        shuffleArray(items);


    shuffled.forEach(item => {

        bank.appendChild(item);

    });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



/* =========================================================
   28. 重置按鈕
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            event.target.closest(
                "#resetActivity1"
            )
        ) {

            resetActivity1();

            return;

        }


        if (
            event.target.closest(
                "#resetActivity2"
            )
        ) {

            resetActivity2();

            return;

        }

    }
);



/* =========================================================
   29. 初始化
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupActivity1();

        setupActivity2();

    }
);
