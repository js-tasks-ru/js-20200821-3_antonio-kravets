export default class ColumnChart {

  element;
  chartHeight = 50;

  constructor({data = [], label = '', value = 0, link = ''} = {}) {
    this.data = data;
    this.value = value;
    this.label = label;
    this.link = link;
    this.render();
  }


  getColumnBody(data) {
    return data.map(v => {
        const maxValue = Math.max(...data);
        const scale = this.chartHeight / maxValue;
        return `<div style="--value: ${Math.floor(v * scale)}"
                data-tooltip="${(v / maxValue * 100).toFixed(0)}%"></div>`;
      }
    ).join('');
  }

  getChartElements() {
    return this.element.querySelectorAll('[data-element="body"]');
  }

  getTemplate() {
    return `
    <div class="column-chart column-chart_loading">
     <div class="column-chart__title">
        Total ${this.label}
     ${this.getLink()}
     </div>
    <div class="column-chart__container">
      <div class="column-chart__header" data-element="header">
        ${this.value}
      </div>
      <div class="column-chart__chart" data-element="body">
            ${this.getColumnBody(this.data)}
      </div>
    </div>
</div>
   `;
  }


  getLink() {
    return this.link ? `<a class="column-chart__link" href="${this.link}">View all</a>` : '';
  }

  render() {
    const elem = document.createElement('div');
    elem.innerHTML = this.getTemplate();
    this.element = elem.firstElementChild;
    if (this.data.length) {
      this.element.classList.remove('column-chart_loading');
    }
    this.getChartElements();
  }


  update(data) {
    this.getChartElements.innerHTML = this.getColumnBody(data);
  }


  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
  }
}
