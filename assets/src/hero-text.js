const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let intervals = [];

const h1Elements = Array.from(document.querySelectorAll("h2"));

h1Elements.forEach((h1Element) => {
  h1Element.addEventListener("mouseover", (event) => {
    let iteration = 0;
    clearInterval(intervals[h1Elements.indexOf(h1Element)]);

    intervals[h1Elements.indexOf(h1Element)] = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(intervals[h1Elements.indexOf(h1Element)]);
      }

      iteration += 1 / 3;
    }, 30);
  });
});


// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// let interval = null;

// document.querySelector("h1").onmouseover = event => {  
//     let iteration = 0;
    
//     clearInterval(interval);
    
//     interval = setInterval(() => {
//       event.target.innerText = event.target.innerText
//         .split("")
//         .map((letter, index) => {
//           if(index < iteration) {
//             return event.target.dataset.value[index];
//           }
        
//           return letters[Math.floor(Math.random() * 26)]
//         })
//         .join("");
      
//       if(iteration >= event.target.dataset.value.length){ 
//         clearInterval(interval);
//       }
      
//       iteration += 1 / 3;
//     }, 30);
//   }