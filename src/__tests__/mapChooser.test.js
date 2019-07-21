import mapChooser from '../mapChooser';

describe('mapChooser', () => {
    it('returns an image file name based on input given to it', () => {
        let expected = 'portland.jpg';
        let actual = mapChooser('portland');
        expect(actual).toEqual(expected);
    });

    it('returns an default image when no input is given', () => {
        let expected = 'default.jpg';
        let actual = mapChooser();
        expect(actual).toEqual(expected);
    })
})