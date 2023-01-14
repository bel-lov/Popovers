export class Tooltip {
    constructor() {
        this.tooltip = tooltip;
    }

    showTooltip(el) {
        const tooltipEl = document.createElement('div');
        tooltipEl.classList.add('wrapper-tooltip');
        const tooltipTitle = document.createElement('h2');
        tooltipTitle.classList.add('tooltip-title');
        tooltipTitle.textContent = 'Popover title';
        const tooltipText = document.createElement('div');
        tooltipText.classList.add('tooltip-text');
        tooltipText.textContent = 'And here is some amazing content.It is very engaging.Right?';
        document.body.append(tooltipEl);
    }
}