let con = document.querySelector("#container");
let love = document.querySelector("#first-icon");
let heart = document.querySelector("#heart");
let thumb = document.querySelector("#thumb");
let share = document.querySelector("#share");
let check = 0;

con.addEventListener("dblclick", function () {
    love.style.transform = " translate(-50%, -50%) scale(1)";
    love.style.opacity = "0.8";


    setTimeout(() => {
        love.style.opacity = "0";
    }, 1000);

    setTimeout(() => {
        love.style.transform = " translate(-50%, -50%) scale(0)";
    }, 2000);
});

heart.addEventListener("click", function () {
    if (check == 0) {
        
        heart.classList.remove("ri-heart-3-line");
        heart.classList.add("ri-heart-3-fill");
        check = 1;
    } else {
        
        heart.classList.add("ri-heart-3-line");
        heart.classList.remove("ri-heart-3-fill");
        check = 0;
    }
});


thumb.addEventListener("click", function () {
    if (check == 0) {
        
        thumb.classList.remove("ri-thumb-up-line");
        thumb.classList.add("ri-thumb-up-fill");
        check = 1;
    } else {
        
        thumb.classList.add("ri-thumb-up-line");
        thumb.classList.remove("ri-thumb-up-fill");
        check = 0;
    }
});


share.addEventListener("click", function () {
    if (check == 0) {
        
        share.classList.remove("ri-share-forward-line");
        share.classList.add("ri-share-forward-fill");
        check = 1;
    } else {
        
        share.classList.add("ri-share-forward-line");
        share.classList.remove("ri-share-forward-fill");
        check = 0;
    }
});

