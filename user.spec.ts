import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User(1,"deepthi","lendale","deepthi@gmail.com","deepu","female",9100491533)).toBeTruthy();
  });
});
