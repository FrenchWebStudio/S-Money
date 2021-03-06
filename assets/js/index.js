// File Validation //

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
};


// Input //

$("input").keyup(function () {
    if (this.value.length == this.maxLength) {
      $(this).next('input').focus();
    }
});


// Form select //

var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 0; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


// Formulaire Organisation selon type d'organisation //

$(function() {
    $(".select-organization-type").children(".select-selected").on("click",function() {
        var selectedOrganization = $(this).text();
        $(".hideable").hide();
        if(selectedOrganization=="Société")
        {
            $("#select-country-2").show();
            $("#siret-2").show();
            $("#date-immatriculation-2").show();
            $("#forme-juridique-2").show();
            $("#raison-sociale-2").show();
            $("#code-naf-2").show();
            $("#objectif-ca-2").show();
            $("#exercice-precedent-2").show();
           
        }
        else if(selectedOrganization=="Entreprise individuelle")
        {
       		$("#select-country-2").show();
            $("#siret-2").show();
            $("#date-immatriculation-2").show();
            $("#raison-sociale-2").show();
            $("#code-naf-2").show();
            $("#objectif-ca-2").show();
            $("#exercice-precedent-2").show();
        }
        else if(selectedOrganization=="Association")
        {
       		$("#select-country-2").show();
            $("#rna-2").show();
            $("#siret-asso-2").show();
            $("#date-enregistrement-2").show();
            $("#nom-association-2").show();
            $("#objectif-ca-asso-2").show();
            $("#exercice-precedent-asso-2").show();
        }
        else if(selectedOrganization=="Particulier")
        {
       		$("#select-gender-2").show();
            $("#nom-particulier-2").show();
            $("#prenom-particulier-2").show();
            $("#select-nationality-2").show();
            $("#select-country-born-2").show();
            $("#birthday-2").show();
            $("#birth-city-2").show();
            $("#residence-state-2").show();
            $("#select-identity-2").show();
            $("#identity-file-2").show();
            $("#objectif-revenus-particulier-2").show();
            $("#revenus-precedent-particulier-2").show();
        }
    }).click();
});

// Formulaire Organisation selon pays //

$(function() {
    $(".select-country").children(".select-selected").on("click",function() {
        var selectedCountry = $(this).text();
        $(".hideable-country").hide();
        if(selectedCountry=="France" || selectedCountry=="Guadeloupe" || selectedCountry=="Guyane" || selectedCountry=="La Réunion" || selectedCountry=="Martinique" || selectedCountry=="Mayotte" || selectedCountry=="Saint-Barthélemy" || selectedCountry=="Saint-Martin (partie française)" || selectedCountry=="Saint Pierre et Miquelon" || selectedCountry=="Wallis et Futuna")
        {
            $("#siret-label").show();
            $("#immatriculation-label").show();
           
        }
        else if(selectedCountry=="Nouvelle-Calédonie")
        {
       		$("#ridet-label").show();
            $("#immatriculation-label").show();

        }
        else if(selectedCountry=="Polynésie Française")
        {
       		$("#tahiti-label").show();
            $("#immatriculation-label").show();
        }
        else if(selectedCountry!="France" && selectedCountry!="Nouvelle-Calédonie" && selectedCountry!="Polynésie Française" && selectedCountry!="Guadeloupe" && selectedCountry!="Guyane" && selectedCountry!="La Réunion" && selectedCountry!="Martinique" && selectedCountry!="Mayotte" && selectedCountry!="Saint-Barthélemy" && selectedCountry!="Saint-Martin (partie française)" && selectedCountry!="Saint Pierre et Miquelon" && selectedCountry!="Wallis et Futuna")
        {
       		$("#register-label").show();
            $("#register-date-label").show();
        }
    }).click();
});

