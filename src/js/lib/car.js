let baseUrl = "http://localhost/mi.com";
define(['jquery', 'cookie'], function ($, cookie) {
    return {
        render: function () {
            let shop = cookie.get('shop');
            // console.log(shop);
            if (shop) {
                shop = JSON.parse(shop);
                // console.log(shop);
                let id = shop.map(eml => eml.id).join();
                // console.log(id)
                $.ajax({
                    type: "get",
                    url: `${baseUrl}/interface/car.php`,
                    data: {
                        'idlist': id
                    },
                    dataType: "json",
                    success: function (res) {
                        // console.log(res);

                        let temp = '';
                        res.forEach(elm => {
                            // console.log(elm)
                            let pic = JSON.parse(elm.img_car);
                            // console.log(pic);
                            console.log(shop)
                            let arr = shop.filter(val => val.id == elm.id);
                            console.log(arr);
                            temp += `  
              <ul class="car-msg">
                  <li>
                      <div class="check"><input type="checkbox"></div>
                      <img src="${baseUrl}/${pic.src}" alt="">
                    <a href="javascript:;">${elm.title4}</a>
                    <span class="price">${elm.price}元</span>
                    
                    <div>
                        <i>+</i>
                        <i>${arr[0].num}</i>
                        <i>-</i>
                    </div>
                    <span class="result">${arr[0].num*elm.price}元</span>
                    <span class="move">×</span>
                </li>
              </ul>
            `

                        })
                        $('.car-msg').append(temp);

                    }

                });
            }

        }
    }
});