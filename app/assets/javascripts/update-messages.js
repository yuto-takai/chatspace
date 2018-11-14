setInterval(function() {
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

  $.ajax({
    url: location.href.json,
    dataType: 'json'
  })

  .done(function(messages) {
    var lastId = $()
    messages.forEach(function(message) {
      var html = buildHTML(message);
      $('.chat__content-message-list').append(html)
      $('.chat__content').animate({scrollTop: $('.chat__content')[0].scrollHeight}, 'slow','swing');
    });
  })
  .fail(function() {
    alert('自動更新に失敗しました');
  });
}, 1000 * 5);
