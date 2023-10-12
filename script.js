import {TodoItem} from './TodoItem.js';

const checkbox = document.querySelectorAll('.my-checkbox');
const addCheckbox = document.querySelector('.my-add-checkbox');
const crosses = document.querySelectorAll('.todo-item svg');
const addTodo = document.querySelector('form');
const container = document.querySelector('.container-item');
const allFilter = document.querySelector('.all');
const todoFilter = document.querySelector('.todo');
const completedFilter = document.querySelector('.completed');
const itemsLeft = document.querySelector('.nb-items');
const clearCompleted = document.querySelector('.clear-completed');
const addInput = document.querySelector('.add-input');

itemsLeft.innerHTML = document.querySelectorAll('.todo-item').length.toString();

checkbox.forEach(check => {
   check.addEventListener('click', () => {
      check.classList.toggle('checkbox-done');
   })
})
addCheckbox.addEventListener('click', () => {
      addCheckbox.classList.toggle('checkbox-done');
})

crosses.forEach(cross => {
   cross.addEventListener('click', event => {
      event.target.parentElement.remove();
      itemsLeft.innerHTML = document.querySelectorAll('.todo-item').length.toString();
   })
})

addTodo.addEventListener('submit', event => {
   event.preventDefault();
   let classCheck = 'my-checkbox';
   let content = new FormData(addTodo).get('add-input');

   if (addTodo.querySelector('.checkbox-done')) {
         classCheck += ' checkbox-done'; 
   }

   const item = new TodoItem(content, classCheck);
   container.append(item);
   addInput.value = '';
   itemsLeft.innerHTML = document.querySelectorAll('.todo-item').length.toString();
})

allFilter.addEventListener('click', () => {
   document.querySelectorAll('.my-checkbox').forEach(check => {
      check.parentElement.style.display = 'flex';
   })
   document.querySelector('.active-link').classList.toggle('active-link');
   allFilter.classList.toggle('active-link');
})

todoFilter.addEventListener('click', () => {
   document.querySelectorAll('.my-checkbox').forEach(check => {
      check.parentElement.style.display = 'flex';
   })
   document.querySelectorAll('.todo-item .checkbox-done').forEach(check => {
      check.parentElement.style.display = 'none';
   })
   document.querySelector('.active-link').classList.toggle('active-link');
   todoFilter.classList.toggle('active-link');
})

completedFilter.addEventListener('click', () => {
   document.querySelectorAll('.my-checkbox').forEach(check => {
      check.parentElement.style.display = 'none';
   })
   document.querySelectorAll('.todo-item .checkbox-done').forEach(check => {
      check.parentElement.style.display = 'flex';
   })
   document.querySelector('.active-link').classList.toggle('active-link');
   completedFilter.classList.toggle('active-link');
})


clearCompleted.addEventListener('click', () => {
   document.querySelectorAll('.todo-item .checkbox-done').forEach(check => {
      check.parentElement.remove();
   })
})


const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');

moon.addEventListener('click', () => {
   sun.style.display = 'block';
   moon.style.display = 'none';
   document.body.classList.add('dark-mode');
})

sun.addEventListener('click', () => {
   moon.style.display = 'block';
   sun.style.display = 'none';
   document.body.classList.remove('dark-mode');
})

const init = () => {
   dragula([document.querySelector('#dragparent')])
}
init()