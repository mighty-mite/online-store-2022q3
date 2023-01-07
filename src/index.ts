/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import 'nouislider/dist/nouislider.css';
import './assets/styles/main.scss';
import App from './pages/app/index';

const app = new App();
app.run();

//Change Layout Style
const layoutStyleButtons = document.querySelector('.goods__top-right') as HTMLElement;
const layoutItems = document.querySelectorAll('.card');
layoutStyleButtons?.addEventListener('click', changeLayoutStyle);

function changeLayoutStyle(event: Event) {
  const changeLayoutButtons = document.querySelectorAll('.goods__layout-button');
  const eventTarget: HTMLElement = event.target as HTMLElement;
  const layoutWrapper = document.querySelector('.goods__wrapper')! as HTMLElement; 

  if(eventTarget?.classList.contains('goods__layout-button--tile')) {
    layoutWrapper.classList.remove('list-style'); 
    removeStyle(changeLayoutButtons, 'chosen');
    addStyle(eventTarget, 'chosen');
    removeStyle(layoutItems, 'list-style');
  }
  if(eventTarget?.classList.contains('goods__layout-button--list')) {
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