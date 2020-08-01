jest.mock('../services/userServices', () => jest.requireActual('../services/_mock_/userServices'));
const userController = require('../controllers/userController');

describe('User', () => {
    describe('Create User', () => {
        it('Create', async() => {
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn(),
            };
            const req = {
                body: {
                    name: "Test",
                    lastName: "test",
                    email: "test@test.com",
                    password: "123456",
                },
            };
            await userController.create(req, res);
            expect(res.status.mock.calls).toEqual([[201]]);
            expect(res.send.mock.calls).toEqual([[{user: expect.objectContaining({"isActive": true})}]]);
        })
    });

    describe('Get Users', () => {
        it('Get Users', async() => {
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn(),
            };
            const req = {};
            await userController.getUsers(req, res);
            expect(res.status.mock.calls).toEqual([[200]]);
            expect(res.send.mock.calls).toEqual([[{users: [expect.objectContaining({"isActive": true})]}]]);
        })
    });

    describe('Get User', () => {
        it('Get User', async() => {
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn(),
            };
            const req = {
                params: {
                    id: "5f1f788ca2eb1c0fbb83c7f5"
                },
            };
            await userController.getUser(req, res);
            expect(res.status.mock.calls).toEqual([[200]]);
            expect(res.send.mock.calls).toEqual([[{user: expect.objectContaining({"isActive": true})}]]);
        })
    });

    describe('Delete User', () => {
        it('Delete User', async() => {
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn(),
            };
            const req = {
                params: {
                    id: "5f1f788ca2eb1c0fbb83c7f5"
                },
            };
            await userController.deleteUser(req, res);
            expect(res.status.mock.calls).toEqual([[200]]);
            expect(res.send.mock.calls).toEqual([[expect.objectContaining({"message": "Usuario Eliminado"})]]);
        })
    });
})

