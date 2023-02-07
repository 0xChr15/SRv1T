const Prometheus = require('prom-client');
const capacity = new Prometheus.Gauge({
name: 'system_capacity',
help: 'System capacity in percentage',
labelNames: ['name']
});

//Set the initial capacity
capacity.set({name: 'system'}, 50);

//Update the capacity every 5 seconds
setInterval(() => {
capacity.set({name: 'system'}, Math.random() * 100);
}, 5000);

const alert = new Prometheus.AlertManager({
routePrefix: '/alert',
timeout: 10000,
version: 0
});

alert.register({
name: 'System capacity alert',
type: 'threshold',
labels: {
severity: 'warning',
service: 'system'
},
alert: 'SystemCapacity',
expr: 'system_capacity{name="system"} > 75',
for: '5m',
annotations: {
summary: 'System capacity is above 75%'
}
});

alert.register({
name: 'System Error alert',
type: 'threshold',
labels: {
severity: 'critical',
service: 'system'
}
});