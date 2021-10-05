function searchFunction() {
    var input, filter, section, div, h4, i;
    input = document.getElementById('myInput');
    filter = input.ariaValueMax.toUpperCase();
    section = document.getElementById('products');
    div = section.getElementsByClassName('theProduct');

    for(i=0 ; i< div.length; i++){
        h4 = div[i].getElementsByTagName('h4')[0];
        if(h4.innerHTML.toUpperCase().indexOf(filter) > -1){
            div[i].style.display = "";
        }

        else{
            div[i].style.display = 'none';
        }
    }
}
