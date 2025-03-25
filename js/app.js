const captchaElement = document.querySelector('.captcha')
const regenerateBtn = document.querySelector('.regenerate')
const confirmBtn = document.querySelector('.confirm')
const captchaInput = document.querySelector('.captcha-input')

let captchaChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";


function captchaGenerator() {
  let res = ""

  for(let i = 0; i < 6; i++) {
    res += captchaChars[Math.floor(Math.random() * captchaChars.length)];
  }
  captchaElement.textContent = res

  captchaInput.value = ""
}


function confirmHandler() {
  let captchaText = captchaElement.textContent
  let captchaInputValue = captchaInput.value


  if (captchaText === captchaInputValue) {

    captchaInput.value = ""
    showToast()
  }


}


function showToast() {
  const toastElement = document.querySelector('.toast')

  toastElement.classList.remove('hidden')

  setTimeout(() => {toastElement.classList.add('hidden')}, 3000)
}


regenerateBtn.addEventListener('click', captchaGenerator)
confirmBtn.addEventListener('click', confirmHandler)