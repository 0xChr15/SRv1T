const Prometheus = require('prom-client');
const capacity = new Prometheus.Gauge({
  name: 'system_capacity',
  help: 'System capacity in percentage',
  labelNames: ['name']
});