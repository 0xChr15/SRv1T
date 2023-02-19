const database = require('./database');
const reports = require('./reports');
const reportSubmission = require('./reportSubmission');

// generate the reports
const startDate = new Date('2022-01-01');
const endDate = new Date('2022-01-31');
const legislation = 'legislation-123';
const jurisdiction = 'jurisdiction-456';
const reportFormat = 'pdf';
const data = database.getData(startDate, endDate, legislation, jurisdiction);
const weeklyReport = reports.generateWeeklyReport(data, reportFormat);
const monthlyReport = reports.generateMonthlyReport(data, reportFormat);
const quarterlyReport = reports.generateQuarterlyReport(data, reportFormat);
const semiAnnualReport = reports.generateSemiAnnualReport(data, reportFormat);
const annualReport = reports.generateAnnualReport(data, reportFormat);
const adHocReport = reports.generateAdHocReport(data, reportFormat);

// submit the reports to regulatory bodies
const transferProtocol = 'http';
const encryption = 'ssl';
reportSubmission.submitReport(weeklyReport, reportFormat, transferProtocol, encryption);
reportSubmission.submitReport(monthlyReport, reportFormat, transferProtocol, encryption);
reportSubmission.submitReport(quarterlyReport, reportFormat, transferProtocol, encryption);
reportSubmission.submitReport(semiAnnualReport, reportFormat, transferProtocol, encryption);
reportSubmission.submitReport(annualReport, reportFormat, transferProtocol, encryption);
reportSubmission.submitReport(adHocReport, reportFormat, transferProtocol, encryption);
