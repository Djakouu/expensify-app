import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'abc'
    };
    const output = authReducer({}, action);
    expect(output.uid).toBe(action.uid);
});

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT',
    };
    const output = authReducer({}, action);
    expect(output).toEqual({});
});

test('should keep same state', () => {
    const action = {
        type: '',
    };
    const state = {};
    const output = authReducer(state, action);
    expect(output).toEqual(state);
});
