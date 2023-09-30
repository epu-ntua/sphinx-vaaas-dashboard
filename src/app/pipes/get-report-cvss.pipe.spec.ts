import { GetReportCvssPipe } from './get-report-cvss.pipe';

describe('GetReportCvssPipe', () => {
  it('create an instance', () => {
    const pipe = new GetReportCvssPipe();
    expect(pipe).toBeTruthy();
  });
});
