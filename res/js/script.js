$(function () {

  
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