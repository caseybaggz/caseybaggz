import Theme from '../Theme';


describe('Theme Object', () => {

  it('should be an Object and healthy', () => {
    expect(Theme).not.toBeNull();
    expect(Theme).toBeDefined();
    expect(typeof Theme).toEqual('object');
  });

  it('shoud have a white property', () => {
    expect(Theme.white).toEqual('#fff');
    expect(Theme.white).not.toEqual('');
    expect(Theme.white).not.toBeNull();
  });

  it('shoud have a dark property', () => {
    expect(Theme.dark).toEqual('#202020');
    expect(Theme.dark).not.toEqual('');
    expect(Theme.dark).not.toBeNull();
  });

  it('shoud have a black property', () => {
    expect(Theme.black).toEqual('#000');
    expect(Theme.black).not.toEqual('');
    expect(Theme.black).not.toBeNull();
  });

  it('shoud have a primary property', () => {
    expect(Theme.primary).toEqual('#546575');
    expect(Theme.primary).not.toEqual('');
    expect(Theme.primary).not.toBeNull();
  });

  it('shoud have a primaryDark property', () => {
    expect(Theme.primaryDark).toEqual('#42505D');
    expect(Theme.primaryDark).not.toEqual('');
    expect(Theme.primaryDark).not.toBeNull();
  });

  it('shoud have a secondary property', () => {
    expect(Theme.secondary).toEqual('#f39121');
    expect(Theme.secondary).not.toEqual('');
    expect(Theme.secondary).not.toBeNull();
  });

  it('shoud have a success property', () => {
    expect(Theme.success).toEqual('#4CAF50');
    expect(Theme.success).not.toEqual('');
    expect(Theme.success).not.toBeNull();
  });

  it('shoud have a warning property', () => {
    expect(Theme.warning).toEqual('#FFEB3B');
    expect(Theme.warning).not.toEqual('');
    expect(Theme.warning).not.toBeNull();
  });

  it('shoud have a danger property', () => {
    expect(Theme.danger).toEqual('#CC3E4A');
    expect(Theme.danger).not.toEqual('');
    expect(Theme.danger).not.toBeNull();
  });

  it('shoud have a pending property', () => {
    expect(Theme.pending).toEqual('#9677DF');
    expect(Theme.pending).not.toEqual('');
    expect(Theme.pending).not.toBeNull();
  });

  it('shoud have a transformTransition property', () => {
    expect(Theme.transformTransition).toEqual('transform 0.3s cubic-bezier(0.465, 0.183, 0.153, 0.946)');
    expect(Theme.transformTransition).not.toEqual('');
    expect(Theme.transformTransition).not.toBeNull();
  });

  it('shoud have a whiteText property', () => {
    expect(Theme.whiteText).toEqual('#fff');
    expect(Theme.whiteText).not.toEqual('');
    expect(Theme.whiteText).not.toBeNull();
  });

  it('shoud have a darkText property', () => {
    expect(Theme.darkText).toEqual('#42505D');
    expect(Theme.darkText).not.toEqual('');
    expect(Theme.darkText).not.toBeNull();
  });

});
