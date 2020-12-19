const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');


app.appendChild(container);
var names = [];
var counter=0;

var request = new XMLHttpRequest();
request.open('GET', 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json', true);
request.onload = function () {
      
        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
          data.forEach(movi => {
            
            
            names.push(movi.name);                  
            names.sort();
            
    
          });
        } else {
          const errorMessage = document.createElement('marquee');
          errorMessage.textContent = `Gah, it's not working!`;
          app.appendChild(errorMessage);
        }
      }
     
      request.send();
      



var request = new XMLHttpRequest();
request.open('GET', 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');
      
      const h1 = document.createElement('h1');
      h1.textContent = names[counter];

        

        const input = document.createElement("input");
        input.type = "checkbox";
        input.className = "card1";
        input.className = "largerCheckbox";
        
        img = document.createElement('img');
        img.src = movie.Image;

        img.setAttribute('class','check');
     
      container.appendChild(card);
      card.appendChild(img);
      card.appendChild(input);

      card.appendChild(h1);

      counter=counter+1;
      
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();
