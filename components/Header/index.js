// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  const header = document.createElement('header');
        date = document.createElement('span');
        times = document.createElement('h1');
        temp = document.createElement('span');

        header.appendChild(date);
        header.appendChild(times);
        header.appendChild(temp);
}
