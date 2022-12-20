/* 核心启动，通常不建议也不应当由用户调用，只能由启动代码使用  */
interface Zero {
  readonly config?: ThemeConfig
  refresh() : void
}

declare var Zero: {
  prototype: Zero;
  new(config?: ThemeConfig): Zero;
}

interface ThemeConfig {

}

class ZeroApp implements Zero {
  config?: ThemeConfig | undefined;

  constructor(config?: ThemeConfig) {
    this.config = config;
  }

  /**
   * 页面变化时，刷新 Zero 所需更新的公共状态。
   * 特别的，为了减少公共 JS 的大小，不建议在此方法内调用状态可变的功能刷新方法。例如可由用户开启或关闭的功能。
   * 此类开放功能可由内联代码使用 window 监听事件 "zero:refresh" 来进行刷新。
   */
  public refresh(): void {
    throw new Error("Method not implemented.");
  }
}
  
document.addEventListener('DOMContentLoaded', () => {
  let zero = new Zero();
  zero.refresh();
})
  