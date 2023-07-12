const inputPW = document.querySelector("input");
const btn = document.querySelector("button");
function togglePassword(){
    if(inputPW.value !== ""){
        if(inputPW.type === "password"){
            inputPW.type = "text";
            btn.textContent = "Hide";
        }else{
            inputPW.type = "password";
            btn.textContent = "Show";
    
        }
    }
    else{
        alert("Chưa nhập mật khẩu!");
    }
    
}
btn.addEventListener('click', togglePassword);

  