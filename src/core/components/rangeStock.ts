/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Component from '../templates/component';
import { data } from '../../assets/data/data';
import { getMaxDataValue } from '../getFilterValues';
import * as noUiSlider from '../../../node_modules/nouislider/dist/nouislider';
//import 'nouislider/dist/nouislider.css';
//import "nouislider/dist/nouislider.css";

class RangeStock extends Component {
  inputFrom: HTMLInputElement;

  inputTo: HTMLInputElement;

  slider: noUiSlider.target;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.inputFrom = document.createElement('input');
    this.inputTo = document.createElement('input');
    this.slider = document.createElement('div');
  }

  createSlider = () => {
    this.slider.classList.add('range__slider', 'range__slider--amount');

    noUiSlider.create(this.slider, {
      start: [3, 8],
      step: 1,
      connect: true,
      range: {
        min: 0,
        max: Number(`${getMaxDataValue(data, 'amount')}`),
      },
      tooltips: [true, true],
      format: {
        to(value) {
          return Math.round(Number(value));
        },
        from(value) {
          return Math.round(Number(value));
        },
      },
    });

    return this.slider;
  };

  createControls = () => {
    const container = document.createElement('div');
    container.classList.add('range__control');

    this.inputFrom.classList.add('range__control-from');
    this.inputFrom.setAttribute('type', 'number');
    this.inputFrom.setAttribute('id', 'fromInput');
    this.inputFrom.setAttribute('value', '20');
    this.inputFrom.setAttribute('min', '0');
    this.inputFrom.setAttribute('max', `${getMaxDataValue(data, 'amount')}`);

    this.inputTo.classList.add('range__control-to');
    this.inputTo.setAttribute('type', 'number');
    this.inputTo.setAttribute('id', 'toInput');
    this.inputTo.setAttribute('value', '80');
    this.inputTo.setAttribute('min', '0');
    this.inputTo.setAttribute('max', `${getMaxDataValue(data, 'amount')}`);

    container.append(this.inputFrom, this.inputTo);

    return container;
  };

  handleNoUiSlider() {
    this.slider!.noUiSlider!.on('update', (values, handle) => {
      const value = values[handle];
      if (handle) {
        (this.inputTo.value as unknown) = value;
      } else {
        (this.inputFrom.value as unknown) = value;
      }
    });
  }

  render() {
    this.component.append(this.createSlider());
    this.component.append(this.createControls());
    this.handleNoUiSlider();
    return this.component;
  }
}

export default RangeStock;
