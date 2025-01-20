const emailInput = document.getElementById("email");
const subscribeBtn = document.getElementById("subscribe-btn");
const dismissBtn = document.getElementById("dismiss-btn");
const formContainer = document.getElementById("form-container");
const successNotification = document.getElementById("success-notification");
const errorMessage = document.querySelector(".error-message");
const userEmail = document.getElementById("user-email");

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

subscribeBtn.addEventListener("click", () => {
    const emailValue = emailInput.value.trim();

    if (isValidEmail(emailValue)) {
        formContainer.style.visibility = "hidden";  // Скрыть форму, но она будет занимать место
        successNotification.classList.add("active");  // Показать уведомление
        userEmail.textContent = emailValue;
    } else {
        errorMessage.classList.add("active");  // Показать сообщение об ошибке
        emailInput.classList.add("invalid");  // Сделать поле ввода красным
    }
});

dismissBtn.addEventListener("click", () => {
    successNotification.classList.remove("active");  // Скрыть уведомление
    formContainer.style.visibility = "visible";  // Вернуть форму
    emailInput.value = "";  // Очистить поле ввода
    errorMessage.classList.remove("active");  // Скрыть ошибку
    emailInput.classList.remove("invalid");  // Убрать красную обводку
});
