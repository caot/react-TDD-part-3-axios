// function mapChooser() {
//     return 'portland.jpg';
// }

var mapChooser = (locationName) => {

    if (!locationName)
        locationName = 'default';

    return locationName + '.jpg';
}

export default mapChooser;
