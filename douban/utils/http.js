function request(url,callBack){
  wx.request({
    url: url,
    success(res){
      callBack(res.data)
    }
  })
}  
function requestMove(url,key,titlem,callBack){
  wx.request({
    url: url,
    success(res){
      callBack(res.data,key,titlem)
    }
  })

}
module.exports={
    request:request,
    requestMove:requestMove
  }