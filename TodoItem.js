export class TodoItem {

   constructor (content, className) {
      this.content = content.length > 3 ? content : 'Random Content';
      this.className = className;
      
      let container = document.createElement('div');
      container.setAttribute('class', 'todo-item');

      const checkbox = document.createElement('div');
      checkbox.setAttribute('class', className);
      checkbox.innerHTML = `<img src="images/icon-check.svg" alt="check" width="8" height="8">`;

      const paragraphe = document.createElement('p');
      paragraphe.innerHTML = this.content;
      
      const svg = document.createElement('svg');
      svg.setAttribute('xmlns', "http://www.w3.org/2000/svg");
      svg.setAttribute('width', "25");
      svg.setAttribute('height', "25");
      svg.innerHTML = 'X';

      /* I DONT KNOW WHY THAT DOESNT WORK :-( :-( :-(
      let path = document.createElement('path');
      path.setAttribute('fill', "#494C6B");
      path.setAttribute('fill-rule', "evenodd");
      path.setAttribute('d', `M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z`);
      svg.append(path);
*/
      container.append(checkbox, paragraphe, svg);      

      checkbox.addEventListener('click', () => {
         checkbox.classList.toggle('checkbox-done');
      })

      svg.addEventListener('click', event => {
         event.target.parentElement.remove();
      })

      return container;
   }

}
