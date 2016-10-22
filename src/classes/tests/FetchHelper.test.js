import FetchHelper from '../FetchHelper';

describe('FetchHelper class', () => {

  it('should have a status method', () => {
    expect(FetchHelper.status).not.toBeNull();
    expect(FetchHelper.status).toBeDefined();
    expect(typeof FetchHelper.status).toEqual('function');
  });

  it('should return response obj if status >= 200 && < 300', () => {
    const goodResp = { status: 201 };
    const goodResp2  = { status: 200 };

    expect(() => FetchHelper.status(goodResp)).not.toThrow();
    expect(FetchHelper.status(goodResp)).toEqual(goodResp);

    expect(() => FetchHelper.status(goodResp2)).not.toThrow();
    expect(FetchHelper.status(goodResp2)).toEqual(goodResp2);
  });

  it('should throw Error if response status > 300', () => {
    const badResp = { status: 404, statusText: 'test error' };
    expect(() => FetchHelper.status(badResp)).toThrowError(badResp.statusText);
    expect(() => FetchHelper.status(badResp)).not.toEqual(badResp);
  });

  it('should have a parseJSON method', () => {
    expect(FetchHelper.parseJSON).not.toBeNull();
    expect(FetchHelper.parseJSON).toBeDefined();
    expect(typeof FetchHelper.parseJSON).toEqual('function');
  });

});
