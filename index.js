let currentColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark';
let noti = document.getElementsByClassName("icon-noti")[0];
noti.innerText = currentColorScheme == "light" ? 'Lightmode' : "Darkmode";

document.getElementsByClassName("icon-container")[0].addEventListener("click", () => {
    toggleColorScheme();
})

function toggleColorScheme() {
    updateStylesheet(currentColorScheme);
    currentColorScheme = (currentColorScheme === 'dark') ? 'light' : 'dark';
    console.log(currentColorScheme);
}

function updateStylesheet(colorScheme) {
    const stylesheet = document.getElementById('colormode-toggle');
    const newStylesheet = (colorScheme === 'dark') ? 'darkmode.css' : 'lightmode.css';
    noti.innerText = currentColorScheme == "light" ? 'Darkmode' : "Lightmode";

    // 更新页面的样式表
    stylesheet.href = newStylesheet;
}

let float_title = "TITLE";
let float_abs = "THIS IS A SAMPLE ABSTRACT";

let float_box = document.getElementsByClassName("float-box")[0];
let float_box_title = document.getElementsByClassName("float-title")[0];
let float_box_author = document.getElementsByClassName("f-author")[0];
let float_box_abs = document.getElementsByClassName("f-abstract")[0];
let float_box_img = document.getElementsByClassName("f-img")[0];
let float_btn = document.getElementsByClassName("float-open")[0];

function updateFloatWindow(img_url, title, author, abs, btn_url) {
    float_box_title.innerText = title;
    float_box_abs.innerText = abs;
    float_box_author.innerText = author;
    float_box_img.src = img_url;
    float_btn.href = btn_url;
}

function openFloatWindow() {
    float_box.style.display = "block";
}

function closeFloatWindow() {
    float_box.style.display = "none";
}

document.getElementsByClassName("close-btn")[0].addEventListener("click", () => {
    closeFloatWindow();
})

let articles = document.getElementsByClassName("article-info-container");
for (i = 0; i < articles.length; ++i) {
    articles[i].addEventListener("click", (e) => {
        /*
        console.log(e.target.getAttribute("link")); //get link
        console.log(e.target.children[0].children[0].src); //get img_url
        console.log(e.target.children[1].children[0].innerText); //get title
        console.log(e.target.children[1].children[1].innerText); //get author
        console.log(e.target.children[1].children[2].innerText); //get abs
        */
        openFloatWindow();
        const child_div = e.target.children[1];
        updateFloatWindow(e.target.children[0].children[0].src, child_div.children[0].innerText, child_div.children[1].innerText, child_div.children[2].innerText, e.target.getAttribute("link"));
    })
}