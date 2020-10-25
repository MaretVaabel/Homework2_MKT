$(function () {
loadPosts()
    .then(function (postResponse) {
        console.log("Post response: ", postResponse)
        posts = postResponse;
        displayPost(posts);
    })
    .catch(function () {
        alert('Error loading user info')
    });

document.querySelector('.menu').addEventListener('click', function() {
    document.querySelector('.dropdown').classList.toggle('active');
  });

  loadUserInfo()
        .then(function (user) {
            displayUserInfo(user)
        })
        .catch(function () {
            alert('Error loading user info')
        });
});

function displayPost(posts) {
    for (let i = 0; i < posts.length; i++) {
        const $media = $('<div>');
        if(posts[i].media != null){
            if(posts[i].media.type == 'video'){
             const $media = $('<video>').attr('video', posts[i].media.url);
            }
            const $media = $('<img>').attr('src', posts[i].media.url);
        }
        const $avatar = $('<img>').attr('src', posts[i].author.avatar).attr('alt', 'Post autor');
      
      
        $('.main-container').append(`
        <div class="post">
            <div class="post-author">
                <span class="post-author-info">
                    ${$avatar}
                    <small>${ posts[i].author.firstname + " " + posts[i].author.lastname } </small>
                </span>
                <small>${posts[i].createTime}</small>
            </div>
            <div class="post-image">
          ${$media}
            </div>

            <div class="post-title">
                <h3>${posts[i].text}</h3>
            </div>

            <div class="post-actions">
                <button type="button" name="like" class="like-button">${posts[i].likes}</button>
             </div>
        </div>`);

        

    }
}

function loadPosts() {
    return $.get(
        {
            url: 'https://private-anon-e0d4b76204-wad20postit.apiary-mock.com/posts',
function loadUserInfo() {
    return $.get(
        {
            url: 'https://private-anon-e0d4b76204-wad20postit.apiary-mock.com/users/1',

            success: function (response) {
                return response;
            },
            error: function () {
                alert('error')
            }
        }
    );

}
function displayUserInfo(user) {
    $('#info').text(user.firstname + " " + user.lastname + '\n' + user.email);
    $('.avatar').attr('src', user.avatar);
}