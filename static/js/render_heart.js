function createHeart() {
    const body = document.body;
    
    // Tạo một đối tượng div với class "heart-fly"
    const heartFly = document.createElement("div");
    heartFly.className = "heart-fly";
    
    // Tạo một thẻ hình ảnh img
    const heartImg = document.createElement("img");
    heartImg.className = "heart";
    heartImg.src = "./../media/images/heart.png";
    heartImg.alt = "";

    // Gắn thẻ hình ảnh vào thẻ "heart-fly"
    heartFly.appendChild(heartImg);

    // Thiết lập vị trí ngẫu nhiên
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    heartFly.style.left = randomX + "px";
    heartFly.style.top = randomY + "px";

    // Thêm "heart-fly" vào body
    body.appendChild(heartFly);

    // Xóa đối tượng sau 10 giây
    setTimeout(() => {
        body.removeChild(heartFly);
    }, 5000); // Xóa sau 10 giây
}

setInterval(createHeart, 60); 
