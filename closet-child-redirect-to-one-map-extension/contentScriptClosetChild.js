(() => {
    function openOneMap() {
        let currentUrl = window.location.href;
        const itemName = document.getElementsByClassName("goods_name")[0]['outerText'].split(' ').slice(0,-1).join(' ');
        const itemIdReg = new RegExp("(?<=/product/).*", "g");
        const itemId = decodeURIComponent(String(itemIdReg.exec(currentUrl)));
        targetUrl = `https://www.fromjapan.co.jp/japan/en/special/order/confirmother/https\%3\A\%2\F\%2\Fwww.closetchildonlineshop.com\%2\Fproduct\%2\F${itemId}/6_1/#${itemName}`;
    
        window.open(targetUrl);
    };

    function createButton(){
        const node = document.createElement("button");
        node.textContent = "Take me to One Map";
        node.id = "onemap-button";
        node.style.width = "25%";
        node.style.padding = "10px 10px 10px 10px";
        node.style.margin = "10px 20px 10px 20px";
        node.style.alignContent = "center";

        document.getElementById("m_number").appendChild(node);
    };
  
    createButton();
    document.getElementById("onemap-button").addEventListener("click",function(){openOneMap();});
  
})();
