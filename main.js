const textarea = document.querySelector(".charCount");
const display = document.querySelector(".charCountDisplay");

textarea.addEventListener("input", e => {
    const target = e.currentTarget;
    const maxLength = target.getAttribute("maxlength");
    const currentLength = target.value.length;

    display.innerHTML = `${maxLength - currentLength} characters left`
});