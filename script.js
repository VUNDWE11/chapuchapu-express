const goodsorder = [];
const trackingresult ={};

document.getElementById("goodsorderform").addEventListener("submit",functionDefault){
    Event.preventDefault();


    const goodsname =document.getElementById("goodsname").ariaValueMax;
    const goodsquantity =document.getElementById("goodsquantity").ariaValueMax;
    const trackinumber = new
    Date().getTime();

    goodsorder.push({goodsname,goodsquantity,trackinumber});
    trackingresult[trackinumber] = 'Shipped';

    document.getElementById('goodsorderform').requestFullscreen();
    updatesgoodslist();

};
