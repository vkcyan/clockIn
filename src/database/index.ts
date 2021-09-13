export interface todoList {
  /**
   * id
   */
  _id?: string
  /**
   * 用户的openId
   */
  openid: string
  /**
   * 年月日
   */
  date: string
  /**
   * 开始时间
   */
  startTime: string
  /**
   * 结束事件
   */
  endTime: string
  /**
   * 正在做的事情
   */
  event: string
}

export interface labelList {
  /**
   * 标签名称
   */
  title: String
}
