module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'customController.index',
    config: {
      policies: [],
      auth: false,
    },
  },
];
