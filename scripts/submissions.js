const imageSets = [
  {
    id:1,  
    name: 'Andrew Smith',
    title: 'Innocence',
    images: [
      'https://images.unsplash.com/photo-1512540315028-2c1a6497da04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1543332143-4e8c27e3256f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80',
      'https://images.unsplash.com/photo-1612209246511-5b81949e5fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      'https://images.unsplash.com/photo-1492680967812-4b9226a079de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'
    ],
  },
  {
    id:2,
    name: 'Jane Doe',
    title: 'Nature Adventures',
    images: [
      'https://images.unsplash.com/photo-1533692328991-08159ff19fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
      'https://images.unsplash.com/photo-1508515803898-7bb2d7703093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1503557122744-b650066ba62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1598726668148-99946ef1cb42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1732&q=80'
    ],
  },
  {
    id:3,
    name: 'Irna Tawsen',
    title: 'Faces of the World',
    images: [
      'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80',
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
      'https://images.unsplash.com/photo-1604186837056-8e7c2867b6f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    ],
  },
  {
    id:4,
    name: 'Mark Dale',
    title: 'Wild Animals',
    images: [
      'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
      'https://images.unsplash.com/photo-1504173010664-32509aeebb62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1654&q=80',
      'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      'https://images.unsplash.com/photo-1531494391841-6ac2ef3859b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    ]
  }

];

// Compiles all images into one array, randomizes them, then isolates the first 6 to be displayed in the Submissions HTML.
const randomizedImages = imageSets.reduce((acc, curr) => acc.concat(curr.images), []).sort(() => 0.5 - Math.random()).slice(0, 6);

// Moves the 6 images into the HTML, including their title and name.
const submissionsContainer = document.querySelector('#submissions-container');
const imagesHtml = randomizedImages.map(image => {
  let name = '';
  let title = '';
  imageSets.forEach(imageSet => {
    if (imageSet.images.includes(image)) {
      name = imageSet.name;
      title = imageSet.title;
    }});
  return `
    <a href="details.html?name=${name}">
      <img src="${image}" alt="${title}"/>
      <h3 id="h3-text">${name} - ${title}</h3>
    </a>
  `;});
submissionsContainer.innerHTML = imagesHtml.join('');



// ADD A NEW IMAGE
const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", (e) => {
  // Prevents the form from refreshing the page:
  e.preventDefault();

  // Retrieve values from the form
  const name = document.querySelector('input[name="name"]').value;
  const title = document.querySelector('input[name="title"]').value;
  const imageOne = document.querySelector('input[name="imageOne"]').value;
  const imageTwo = document.querySelector('input[name="imageTwo"]').value;
  const imageThree = document.querySelector('input[name="imageThree"]').value;
  const imageFour = document.querySelector('input[name="imageFour"]').value;
  const imageFive = document.querySelector('input[name="imageFive"]').value;

  const newImageSet = document.createElement('div');
  newImageSet.innerHTML = `<img src=${imageOne} alt=${title}/>
  <div class="submission-info">
    <h3 id="h3-text">${name} - ${title}</h3>
  </div>`

  const submissionsContainer = document.querySelector("#submissions-container");
  submissionsContainer.insertBefore(newImageSet, submissionsContainer.firstChild);

  document.querySelector('input[name="name"]').value = "";
  document.querySelector('input[name="title"]').value = "";
  document.querySelector('input[name="imageOne"]').value = "";
  document.querySelector('input[name="imageTwo"]').value = "";
  document.querySelector('input[name="imageThree"]').value = "";
  document.querySelector('input[name="imageFour"]').value = "";
  document.querySelector('input[name="imageFive"]').value = "";
});



// Dark Mode
function modeToggle() {
  const body = document.querySelector("body");
  const themeButton = document.querySelector("#theme-button");
  const h1 = document.querySelector("h1");
  const captions = document.querySelectorAll('h3');
  const h3 = document.querySelector("h3");

  if (body.style.backgroundColor === "var(--white)") {
    body.style.backgroundColor = "var(--navy)";
    themeButton.innerHTML = "Light Mode";
    h1.style.color = "var(--white)";
    for (let i = 0; i < captions.length; i++) {
      captions[i].style.color = "var(--white)"
    };
  } else {
    body.style.backgroundColor = "var(--white)";
    themeButton.innerHTML = "Dark Mode";
    h1.style.color = "var(--black)";
    for (let i = 0; i < captions.length; i++) {
      captions[i].style.color = "var(--black)"
    };
  }
};