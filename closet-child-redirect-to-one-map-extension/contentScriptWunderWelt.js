(() => {
    function openOneMap() {
        let currentUrl = window.location.href;
        const itemIdReg = new RegExp("(?<=/products/).*", "g");
        const itemId = decodeURIComponent(String(itemIdReg.exec(currentUrl)));
        targetUrl = `https://www.fromjapan.co.jp/japan/en/special/order/confirm/https\%3\A\%2\F%2\Fwww.wunderwelt.jp\%2\Fproducts\%2\F${itemId}/N_1`;
        
        window.open(targetUrl);
    };

    function createButton(){
        const node = document.createElement("button");
        node.textContent = "Take me to One Map";
        node.id = "onemap-button";
        node.style.backgroundColor = "#3f3f40";
        node.style.color = "#fff";
        node.style.width = "100%";
        node.style.height = "50px";
        node.style.fontSize = "14px";
        node.style.margin = "9px 50px 0px 0px";

        document.getElementsByClassName("p-products__title")[0].appendChild(node);
    };
  
    createButton();
    document.getElementById("onemap-button").addEventListener("click",function(){openOneMap();});
  
})();
