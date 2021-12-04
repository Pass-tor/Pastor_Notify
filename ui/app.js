

$notify = function (args) {
  let id = $(`.notification`).length + 1;
  if(args['icon']) {
    let $notification = $(
      `<div class="notification unfold ${args.position}" style="border-left: 3px solid ${args["color"]}54;" id="${id}">
          <div font-size: 28px class="type" style="color: ${args["color"]};">
              <i class="${args['icon']} fa-3x"></i>
          </div>
          <div class="message">
            <h3>${args['title']}<br></h3>
            ${args["message"]}
          </div>
      </div>`
    ).appendTo(`.main`);
    setTimeout(() => {
      $notification.addClass("fold").fadeOut(700);
    }, args.timeout * 1000);
    return $notification;
  } else {
    let $notification = $(
      `<div class="notification unfold" style="border-left: 3px solid ${args["color"]}54;" id="${id}">
          <div class="message">
            <h3>${args['title']}<br></h3>
            ${args["message"]}
          </div>
      </div>`
    ).appendTo(`.main`);
    setTimeout(() => {
      $notification.addClass("fold").fadeOut(700);
    }, args.timeout * 1000);
    return $notification;
  }
};

$(function () {
  window.addEventListener("message", function (event) {
    if (event.data.createNew === true) {
      $notify({
        icon: event.data.data.icon,
        message: event.data.data.message,
        title: event.data.data.title,
        timeout: event.data.data.timeout,
        color: event.data.data.color,
      });
    }
  });
});
