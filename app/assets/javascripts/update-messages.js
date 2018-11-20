$(document).on('turbolinks:load', function() {
  function buildHTML(message){
    var image = (message.image) ? `<img src= ${message.image}>` : ``
    var html = ` <div class= "chat__content-message" data-message-id="${message.id}">
                  <p class ="chat__content-message-name">
                    ${message.user_name}
                    <span class= "chat__content-message-time">${message.date}</span>
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
      var lastMessageId = $('.chat__content-message:last').attr('data-message-id') || 0
      $.ajax({
        url: location.href,
        dataType: 'json',
        data: { id: lastMessageId }
      })

      .done(function(messages) {
        messages.forEach(function(message) {
          console.log(lastMessageId);
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
});
