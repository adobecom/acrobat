export default function init(element) {
  console.log(element);
  console.log('DC Converter ALLOY');

  // Figure out how to setp LH
  const lh = 'SOME DEFAULT VALUE';

  const event = {
    // always trigger the event using navigator.sendBeacon
    documentUnloading: true,
    data: {
      eventType: 'web.webinteraction.linkClicks',
      web: {
        webInteraction: {
          linkClicks: { value: 1 },
          type: 'other',
          name: lh,
          // URL: '',
          // region: '',
        },
      },
      _adobe_corpnew: {
        digitalData: {
          primaryEvent: {
            eventInfo: {
              interaction: {
                click: lh,
                iclick: 'true',
              },
              eventName: lh,
            },
          },
        },
      },
    },
  };

  window._satellite.track('event', event);
}
