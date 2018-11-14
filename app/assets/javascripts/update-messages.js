function buildHTML(message){
  var image = (message.image) ? `<img src= ${message.image}>` : ``
  var html = ` <div class= "chat__content-message" data-message-id= "${message.id}">
                <p class ="chat__content-message-name">
                  ${message.user_name}
                  <span class= "chat__content-message-time">${message.created_at}</span>
                </p>
                <p class= "chat__content-message-body">
                  ${message.content}
                </p>
                <div class= "image">
                  ${image}
                </div>
              </div>`

  return html;
}

  var interval = setInterval(function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)) {
      var lastId = $('.chat__content-message').filter(":last").data('messageId');

      $.ajax({
        url: location.href.json,
        data: {
          id: lastId
        },
        dataType: 'json'
      })

      .done(function(messages) {
        messages.forEach(function(message) {
          var html = buildHTML(message);
          $('.chat__content-message-list').append(html)
          $('.chat__content').animate({scrollTop: $('.chat__content')[0].scrollHeight}, 'slow','swing');
        });
      })
      .fail(function() {
        alert('自動更新に失敗しました');
      });
    } else {
    clearInterval(interval);
  }}, 1000 * 5);
