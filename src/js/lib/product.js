let baseUrl = "http://localhost/mi.com";
define(['jquery'], function ($) {
    return {
        render: function () {
            let id = location.search.split("=")[1];
            $.ajax({
                type: "get",
                url: `${baseUrl}/interface/getitem.php`,
                data: {
                    id: id
                },
                dataType: "json",
                success: function (res) {
                    let pic = JSON.parse(res.pic);
                    let temp = `
                <div class="product-bigpic">
                <img src="${baseUrl}/src/${pic[1]}.src" alt="" id="bigpic">
            </div>`
         
                
            }
        });
        }
    }
})