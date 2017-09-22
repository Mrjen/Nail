var app = getApp();
function ajax(apiData,cb) {
    let sign = wx.getStorageSync("sign");
    wx.request({
        url: `${app.data.apiUrl}${apiData.apiWords}?sign=${sign}&operator_id=${app.data.kid}&${apiData.str}`,
        data:apiData.data,
        method: apiData.method ? method : 'get',
        header: apiData.header ? header : { "Content-Type": "application/json" },
        success: function(res) {
          console.log(res);
          typeof cb == 'function' && cb(res);
        },
        fali(res){
           console.log(res)
        }
    });
};


// goods
const GetCategorys = (apiData) => ajax(apiData,apiUrl+'get-categorys?type=0');


module.exports = {
  ajax,
  GetCategorys
}