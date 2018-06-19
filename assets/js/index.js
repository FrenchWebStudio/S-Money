function fileValidation(){
    var fileInput = document.getElementById('televerser');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.pdf|\.doc|\.zip)$/i;
    if(!allowedExtensions.exec(filePath)){
        document.getElementById("error-message").classList.add("error-message-visible");
        fileInput.value = '';
        return false;
    }else{
        document.getElementById("error-message").classList.remove("error-message-visible");
        return true;
    }
}

$("input").keyup(function () {
    if (this.value.length == this.maxLength) {
      $(this).next('input').focus();
    }
});

var errorMessage = document.getElementsByClassName("code-number");

for(i=0; i<6; i++){
    errorMessage[i].addEventListener("input", function (event) {
        if (errorMessage[i].validity.typeMismatch) {
        document.getElementById("error-message").classList.add("error-message-visible");
          console.log("aaaa");
        } else {
        return true;
      }
    });
    
}
