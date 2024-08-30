(() => {
    function setValueToName(){
        let itemNameElement = document.getElementsByName("item_name")[0];
        let inputEvent = new Event('input');
        itemNameElement.dispatchEvent(inputEvent);
        document.getElementsByName("item_name")[0]['value'] = itemName;
    };
    
    const urlOneMap = window.location.href;
    const reg = new RegExp("(?<=#).*", "g");
    const itemName = decodeURIComponent(String(reg.exec(urlOneMap)));

    if (document.getElementsByName("item_name")){
        let interval = setInterval(setValueToName, 500); 
        setTimeout(() => clearInterval(interval), 10000);
    };

})();
