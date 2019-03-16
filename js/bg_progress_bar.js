/*
  自动刷新页面，适合调试页面样式时使用。
  启动：bg_progress_bar.init();
  配置：可配置项、默认项见 bg_progress_bar.option，配置方法bg_progress_bar.init({ color: 'red' });
  暂停：bg_progress_bar.stop(); 或 默认的 End键
  开始：bg_propress_bar.start(); 或 默认的 Start键
*/
const bg_progress_bar = {
  timer: null, //节点对象
  temp: 0, //当前进度
  temp_setTimeout: null,
  option: { //可配置参数。
    opacity: 1,
    height: '2px',
    position: "top",
    color: "#66ccff",
    gap: 3000,//默认刷新时间
    step: 1,//移动的步数(%)
    startKeyCode: 36, //Home
    stopKeyCode: 35 //End
  },
  handle() {
    if (this.temp + this.option.step <= 100) { //不到一百，并且下一步也超过100，就按正常走。
      this.temp += this.option.step;
      this.timer.style.width = this.temp + "%";
      this.loopHandle();
    } else if (this.temp < 100) { //补齐100，并计算对应时间，确保一共用时gap。
      this.timer.style.width = "100%";
      const addStepRatio = (100 - this.temp) / this.option.step;
      this.temp = 100;
      this.loopHandle(addStepRatio);
    } else {
      location.reload(); //刷新页面
    }
  },
  loopHandle(addStepRatio = 1) {
    this.temp_setTimeout = setTimeout(() => {
      this.handle();
    }, this.option.gap * this.option.step / 100 * addStepRatio);
  },
  addDomElement() {
    const timer = document.createElement('div');
    timer.style.height = this.option.height;
    timer.style.background = this.option.color;
    timer.style.position = 'fixed';
    timer.style[this.option.position] = '0';
    timer.style.left = '0';
    timer.style.opacity = this.option.opacity;
    document.body.appendChild(timer);
    this.timer = timer;
  },
  addKeyDown() {
    document.addEventListener('keydown', event => {
      if (event.keyCode == this.option.startKeyCode) {
        event.preventDefault();
        this.start();
      } else if (event.keyCode == this.option.stopKeyCode) {
        event.preventDefault();
        this.stop();
      }
    });
  },
  init(obj = {}) {
    Object.assign(this.option, obj);
    this.addDomElement();
    this.addKeyDown();
    if (localStorage.bg_progress_bar !== 'false') {
      this.handle();
    };
  },
  start() {
    localStorage.bg_progress_bar = true;
    this.handle();
  },
  stop() {
    localStorage.bg_progress_bar = false;
    clearTimeout(this.temp_setTimeout);
  }
};