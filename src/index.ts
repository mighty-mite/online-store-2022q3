/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import 'nouislider/dist/nouislider.css';
import './assets/styles/main.scss';
import App from './pages/app/index';

const app = new App();
app.run();

//Save Style on Local Storage
const STATE = {
  layoutStyle: localStorage.getItem('layoutStyle'),
}
//Change Layout Style
const layoutStyleButtonsContainer = document.querySelector('.goods__top-right') as HTMLElement;
const layoutStyleButtons = document.querySelectorAll('.goods__layout-button') as NodeListOf<Element>;
const layoutItems = document.querySelectorAll('.card');
const layoutWrapper = document.querySelector('.goods__wrapper')! as HTMLElement;

layoutStyleButtonsContainer?.addEventListener('click', changeLayoutStyle);

function changeLayoutStyle(event: Event) {
  const changeLayoutButtons = document.querySelectorAll('.goods__layout-button');
  const eventTarget: HTMLElement = event.target as HTMLElement; 

  if(eventTarget?.classList.contains('goods__layout-button--tile')) {

    localStorage.setItem('layoutStyle', '');

    layoutWrapper.classList.remove('list-style'); 
    removeStyle(changeLayoutButtons, 'chosen');
    addStyle(eventTarget, 'chosen');
    removeStyle(layoutItems, 'list-style');
  }
  if(eventTarget?.classList.contains('goods__layout-button--list')) {

    localStorage.setItem('layoutStyle', 'list-style');

    addStyle(layoutWrapper, 'list-style')
    addStyle(layoutItems, 'list-style')
    removeStyle(changeLayoutButtons, 'chosen');
    addStyle(eventTarget, 'chosen')
  }
}

function removeStyle( elements: NodeListOf<Element> | HTMLElement, style: string):void {
   if(elements instanceof HTMLElement) {
    elements.classList.remove(style);
    return;
   }
   elements.forEach((element) => {
    element.classList.remove(style)
 })
}

function addStyle(element: NodeListOf<Element> | HTMLElement, style: string): void {
 if(element instanceof HTMLElement) {
  element.classList.add(style);
  return;
 }
 element.forEach(item => {
  item.classList.add(style);
 })
}

function setSavedState() {
  if(STATE.layoutStyle) {
    layoutWrapper.classList.add(STATE.layoutStyle);
    addStyle(layoutItems, STATE.layoutStyle);
    switch (STATE.layoutStyle) {
      case 'list-style': {
        removeStyle(layoutStyleButtons, 'chosen');
        addStyle(layoutStyleButtons[1] as HTMLElement, 'chosen');
        break;
      }
    }
  }
}
setSavedState()

const sortSelection = document.querySelector('.sort__select') as HTMLSelectElement;
sortSelection?.addEventListener('change', (event) =>{
  let eventTarget = event.target as HTMLSelectElement;
  console.log(eventTarget.options[eventTarget.selectedIndex].value);
})