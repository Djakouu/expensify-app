// import moment from 'moment'; WILL FAIL CUZ IT WILL LOOK FOR THE MOCKED VESION, A FUCTION THAT CALLS ITS SELF
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
}