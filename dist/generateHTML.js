const fs = require('fs');

function generateHTML(data) {
  const cards = [];


// Get Roles by using Cards to push it out
      for (let i = 0; i < data.length; i++) {
        const role = data[i].getRole(); 
//Switch case for the different roles to assign different functionalities
        switch (role){
          case "Manager":
            cards.push(`<div class="col-12 col-sm-6 col-lg-4 mb-3">
          <div class="card">
            <h3 class="card-header">
              ${data[i].name}
              <h4 class="card-header">${data[i].role}</h4>
            </h3>
            <div class="card-body">
              <p class="card-text">
                ID: ${data[i].id}
              </p>
              <p class="card-text">
                Email:<a href="mailto:${data[i].email}"> ${data[i].email}</a>  
                
              </p>
              <p class="card-text">
              Office Number: ${data[i].officeNumber}
              </p>
                            
            </div>
          </div>
        </div>`)
        break;
        case "Engineer":
          cards.push(`<div class="col-12 col-sm-6 col-lg-4 mb-3">
          <div class="card">
            <h3 class="card-header">
              ${data[i].name}
              <h4 class="card-header">${data[i].role}</h4>
            </h3>
            <div class="card-body">
              <p class="card-text">
                ID: ${data[i].id}
              </p>
              <p class="card-text">
                Email:<a href="mailto:${data[i].email}"> ${data[i].email}</a>  
                
              </p>
              
              <p class="card-text">
              Github: <a href="https://github.com/${data[i].github}">${data[i].github}</a>
              
              </p>
            
              </p>                 
            </div>
          </div>
        </div>`)
        break;
        case "Intern":
          cards.push(`<div class="col-12 col-sm-6 col-lg-4 mb-3">
          <div class="card">
            <h3 class="card-header">
              ${data[i].name}
              <h4 class="card-header">${data[i].role}</h4>
            </h3>
            <div class="card-body">
              <p class="card-text">
                ID: ${data[i].id}
              </p>
              <p class="card-text">
                Email:<a href="mailto:${data[i].email}"> ${data[i].email}</a>  
              </p>
              
              <p class="card-text">
               School: ${data[i].school}
              </p>                 
            </div>
          </div>
        </div>`)
        break;
        }
       
      }
  


  const allCards = cards.join('')

  var template = `<!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="Description" content="Enter your description here" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">

    <title>Team Generator</title>
  </head>

  <body>
    <header class="jumbotron jumbotron-fluid bg-danger">
      <div class="container">
        <div class="row align-items-end">
          <h1 class="mx-auto">My Team</h1>
        </div>
      </div>
    </header>

    <main class="container">
      <section class="row">
        <div class="col-12 col-md-9">

          <section class="row justify-content-around">
          
     
          ${allCards}

          </section>

          <hr />

    </main>

  </body>

  </html>
  `
//returns the template to HTML



  return template;
}



module.exports = generateHTML



