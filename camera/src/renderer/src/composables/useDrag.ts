class Drag {
  private pageX = 0
  private pageY = 0
  private body?: HTMLBodyElement
  constructor() {}
  /**
   * 捕捉鼠标按下去的事件
   */
  public run() {
    document.addEventListener('DOMContentLoaded', () => {
      this.body = document.querySelector('body')!
      this.body.addEventListener('mousedown', this.mouseDown.bind(this))
    })
  }
  // 鼠标按下事件
  private mouseDown(e: MouseEvent) {
    this.pageX = e.pageX
    this.pageY = e.pageY
    const mouseEventCallback = this.mouseEvent.bind(this)
    this.body?.addEventListener('mousemove', mouseEventCallback)
    // 鼠标松开移除监听事件
    this.body?.addEventListener('mouseup', () => {
      this.body?.removeEventListener('mousemove', mouseEventCallback)
    })
    // 鼠标移出移除监听事件
    this.body?.addEventListener('mouseout', () => {
      this.body?.removeEventListener('mousemove', mouseEventCallback)
    })
  }
  // 鼠标事件监听
  private mouseEvent(e: MouseEvent) {
    const x = e.pageX - this.pageX
    const y = e.pageY - this.pageY
    window.api.drag({ x, y })
  }
}

export default () => {
  const drag = new Drag()
  return { drag }
}
