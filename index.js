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