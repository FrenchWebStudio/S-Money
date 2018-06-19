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