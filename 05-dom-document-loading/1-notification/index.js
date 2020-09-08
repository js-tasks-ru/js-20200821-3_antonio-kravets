export default class NotificationMessage {
  static timer = 0;
  element;

  constructor(message, {duration, type = ''} = {}) {
    this.message = message;
    this.duration = duration;
    this.type = type;

    this.render();

  }

  getTemplate() {
    return `
<div class="notification ${this.type}" style="--value:${this.duration / 1000}s">
<div class="timer"></div>
<div class="inner-wrapper">
      <div class="notification-header">${this.type}</div>
      <div class="notification-body">${this.message}</div>
</div>
</div>
   `;
  }


  render() {
    const elem = document.createElement('div');
    elem.innerHTML = this.getTemplate();
    this.element = elem.firstElementChild;
    if (NotificationMessage.timer === 0) {
      document.body.append(this.element);
    }
  }

  show(element) {
    if (element) {
      this.element = element;
    }
    this.startTimer(this.duration);
  }

  startTimer(duration) {
    setTimeout(() => {
      this.remove();
    }, duration, NotificationMessage.timer = 1);
  }

  remove() {
    this.element.remove();
    NotificationMessage.timer = 0;
  }

  destroy() {
    this.remove();
  }
}
