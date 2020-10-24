

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

    /*$(".like-button").supertoggle({
        onVal: "liked",
        onContent: "liked",
        offVal: "disliked",
        offContent: "disliked",
    });*/

});


function displayPost(posts) {
    for (let i = 0; i < posts.length; i++) {
        let media = $('<div>'); 
        let media_media = $('<div>');
        if(posts[i].media != null){
            if(posts[i].media.type =='video'){    
            media_media = $('<video>').attr('src', posts[i].media.url); // kas siin viga?
            }
            else {
            media = $('<img>').attr('src', posts[i].media.url);// kas siin viga?
            }
        
        $('.post-avatar').attr('src', posts[i].author.avatar).attr('alt', 'Post autor');
        
        $('.main-container').append(`
        <div class="post">
            <div class="post-author">
                <span class="post-author-info">
                    <img src="res/images/avatar.png" class="post-avatar" alt="Post author">
                    <small>${ posts[i].author.firstname + " " + posts[i].author.lastname } </small>
                </span>
                <small>${posts[i].createTime}</small>
            </div>
            <div class="post-image">
                ${media}
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





}
