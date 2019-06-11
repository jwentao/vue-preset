export default function (username) {
  if (!window.gtag || process.env !== 'production') {
    return;
  }
  const UAID = 'UA-132217604-xx'; // todo 你的UA ID
  try {
    window.gtag('config', UAID, {
      'page_title': document.title,
      'page_path': location.href.split('?')[0]
    });
    window.gtag('event', 'view_change', {
      'send_to': UAID, // 替换你的UA ID
      'event_category': 'passport',
      'event_label': btoa(username),
      'value': 1
    });
  } catch (e) {
    console.log(e);
  }
}
