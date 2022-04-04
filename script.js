let head = document.getElementById('logo');
let likeBtn = document.getElementById('l-btn');
let likeChange = document.getElementById('like');


head.textContent = "USER'S POST \u{1F60D}";

let array = [];
let userElem = document.getElementById('apiUsers');
const getPosts = async () => {
    const res = await fetch('https://randomuser.me/api/?results=100');
    const realData = await res.json();
    console.log(realData);
    array.push(realData);
    console.log(array);
    for (let i = 0; i < realData.results.length; i++) {
        let user = realData.results[i];
        let outerDiv = document.createElement('span');
        let apiTemplate = `
        <div class="container">
        <div class="user1 col-md-12">
        <div class="card text-center" style="width: 18rem;">
          <img src="${user.picture.medium}" class="card-img-sec" alt="...">
          <div class="card-body">
            <h5 class="card-title">${user.name.title}, ${user.name.first} ${user.name.last}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div class="d-flex rt-div">
                <button class="like-btn" id="l-btn"><i class="fa fa-thumbs-up me-2" id="like"></i>Like</button>
                <button class="comm-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa fa-comment me-2"></i>Comment</button>
                <button class="comm-btn" data-bs-toggle="modal" data-bs-target="#exampleModal2"><i class="fa fa-share me-2"></i>Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    outerDiv.innerHTML = apiTemplate;
    userElem.appendChild(outerDiv);
    }
}
getPosts();

let commentArray = [];
let input = document.getElementById('comments');
let postBtn = document.getElementById('activeBtn');
let comment = document.getElementById('showComment');
    
postBtn.addEventListener('click', () => {
    let commentDiv = document.createElement('div');
    commentDiv.textContent = input.value;
    comment.appendChild(commentDiv);
    commentArray.push(comment);
    let commentObj = {
        text:input.value,
        id:Math.floor(Math.random() * 2000),
    }
    commentArray.push(commentObj);
    // comment.addEventListener('dblclick', () => {
    //     comment.style.display = "none";
    // });
    commentArray.forEach(element => {
        let item = document.createElement('p');
        item.setAttribute('id', element.id);
        item.textContent = element.text;
        
        // delete comment
        item.addEventListener('dblclick', (e) => {
            let id = e.target.id;// getting the element id
            // filter the id to be deleted
            let deleteSelection = commentArray.filter((item) => item.id != id);
            // get data reseted
            commentArray = deleteSelection;
            // e.target.style.display = 'none';
            console.log(commentArray);
        });
    });

    let output = [ ...outputData.children];
    output.forEach(element => {
        if (element.innerText == item.textContent) {
            outputData.removeChild(element)
        }
    });
    outputData.appendChild(item);
    
    
    localStorage.setItem("comments",JSON.stringify(commentArray));
    let data = localStorage.getItem("comments");
    let resultComment = JSON.parse(data);
    commentArray.textContent = resultComment;
});

let fbShare = document.getElementById('fb');
let igShare = document.getElementById('ig');
let twShare = document.getElementById('tweet');
let wpShare = document.getElementById('wp');



likeBtn.addEventListener('click', () => { 
    let currentColor = likeChange.style.color;
    if (currentColor == 'black') {
        likeChange.style.color = "blue";
    } else {
        likeChange.style.color = "black";
    }
});
//share on facebook
function shareOnFacebook() {
    const navUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + 'https://github.com/knoldus/angular-facebook-twitter.git';
    window.open(navUrl, '_blank');
}
fbShare.addEventListener('click', shareOnFacebook);
// share on instagram
function shareOnInstagram() {
    const navUrl2 = 'https://www.instagram.com/sharer/sharer.php?u=' + 'https://github.com/knoldus/angular-instagram-twitter.git';
    window.open(navUrl2, '_blank');
}
igShare.addEventListener('click', shareOnInstagram);
// share on twitter
function shareOnTwitter() {
    const navUrl3 = 'https://www.twitter.com/sharer/sharer.php?u=' + 'https://github.com/knoldus/angular-instagram-facebook.git';
    window.open(navUrl3, '_blank');
}
twShare.addEventListener('click', shareOnTwitter);
// share on whatsapp
function shareOnWhatsapp() {
    const navUrl4 = 'https://www.whatsapp.com/sharer/sharer.php?u=' + 'https://github.com/knoldus/angular-instagram-twitter.git';
    window.open(navUrl4, '_blank');
}
wpShare.addEventListener('click', shareOnWhatsapp);