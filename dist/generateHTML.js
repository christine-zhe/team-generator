const fs = require('fs');

function generateHTML(data){
const cards = [] ;

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
        
${cards}

        </section>

        <hr />

  </main>

</body>

</html>
`

for (let i = 0; i < data.length; i++) {
    cards.push(`<div class="col-12 col-sm-6 col-lg-4 mb-3">
            <div class="card">
              <h3 class="card-header">
                Name: ${data[i].name}
                <h4 class="card-header">Title</h4>
              </h3>
              <div class="card-body">
                <p class="card-text">
                  ID: ${data[i].id}
                </p>
                <p class="card-text">
                  Email:${data[i].email}
                </p>
                <p class="card-text">
                  Github${data[i].gitHub}
                </p>
              </div>
            </div>
          </div>`)
    
}

console.log(cards)
}

module.exports = generateHTML



