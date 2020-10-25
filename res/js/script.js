$(function () {
    loadPosts()
    .then(function (postResponse) {
        console.log("Post response: ", postResponse)
        posts = postResponse;
        displayPost(posts);
        
        $(".like-button").click( function() {
            var likes = $(this).text()

            var count = countLikes(likes) + 1
            //console.log(count)
            $(this).toggleClass("liked");
        });
    })
    .catch(function () {
        alert('Error loading user info')
    });

});

function countLikes (text){
    var textLeft = text.split('k')[0]
    var number = parseInt(textLeft);
    return number*1000
}


function displayPost(posts) {
    for (let i = 0; i < posts.length; i++) {

        $('.main-container').append(`
        <div class="post">
            <div class="post-author">
                <span class="post-author-info">
                    <img src="${posts[i].author.avatar}" alt="Post author">
                    <small>${ posts[i].author.firstname + " " + posts[i].author.lastname } </small>
                </span>
                <small>${posts[i].createTime}</small>
            </div>
            <div class="post-image"> 
                ${posts[i].media != null ? (posts[i].media.type == 'video' ? '<video controls><source src="'+posts[i].media.url+'" class="post-video" type="video/mp4"></video>' :  '<img src="'+posts[i].media.url+'" class="image" alt=""></img>') : ' '}
            </div>

            <div class="post-title">
                <h3>${posts[i].text == null ? '' : posts[i].text}</h3>
            </div>

            <div class="post-actions">
                <button type="button" name="like" class="like-button">${posts[i].likes}</button>
             </div>
        </div>`)
        

    }
}


function loadPosts() {
    return $.get(
        {
            url: 'https://private-anon-e0d4b76204-wad20postit.apiary-mock.com/posts',
            success: function (response) {
                return response;
            },
            error: function () {
                alert('error')
            }
        }
    );
}