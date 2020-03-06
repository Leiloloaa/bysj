import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  // 判断购物车是否有数据
  hasData(cartList, currentGood) {
    if (cartList && cartList.length > 0) {
      for (let i = 0; i < cartList.length; i++) {
        if (cartList[i]._id == currentGood._id && cartList[i].attr == currentGood.attr) {
          // 表示有数据
          return true
        }
      }
      return false
    }
    return false
  }

  // 获取购物车商品的数量
  getCartNum(cartList) {
    var sum = 0
    if (cartList && cartList.length > 0) {
      for (let i = 0; i < cartList.length; i++) {
        sum += cartList[i].num;
      }
      return sum
    } else {
      return sum
    }
  }

  // 计算总价
  getAllPrice(cartList) {
    var allPrice = 0
    if (cartList && cartList.length > 0) {
      for (let i = 0; i < cartList.length; i++) {
        if (cartList[i].checked == true) {
          allPrice += (cartList[i].num * cartList[i].goodsPrice)
        }
      }
      return allPrice
    } else {
      return allPrice
    }
  }

  // 获取选中商品的数量
  getCheckedNum(cartList) {
    var num = 0
    for (let i = 0; i < cartList.length; i++) {
      if (cartList[i].checked) {
        num++;
      }
    }
    return num
  }

}
