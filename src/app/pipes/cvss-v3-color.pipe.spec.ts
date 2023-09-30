import { CvssV3ColorPipe } from './cvss-v3-color.pipe';

describe('CvssV3ColorPipe', () => {
  it('create an instance', () => {
    const pipe = new CvssV3ColorPipe();
    expect(pipe).toBeTruthy();
  });
});
