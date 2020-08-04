const Services = jest.genMockFromModule('../userServices');

function create(body) {
    const keys = ['name', 'lastName', 'email', 'password'];
    const newUser = {
        "isActive": true,
        "_id": "5f24c14892cb756cba525e8e",
        "name": "Diego",
        "lastName": "Luna",
        "email": "diego_luna@gmail.com",
        "password": "$2b$10$qIfTTYy1V4thPUsi9VN0vOCtLmkkKG60A3o.bupAyH84D4IZmk9/q",
        "createdAt": "2020-08-01T01:11:36.590Z",
        "updatedAt": "2020-08-01T01:11:36.590Z",
        "__v": 0
    };

    return new Promise((resolve, reject) => {
        if (keys.every((key) => Object.keys(body).includes(key))) {
            resolve(newUser);
        } else {
            reject(new Error("Mongo Error"))
        }
    });
} 

function getUsers() {
    const users = [
        {
            "isActive": true,
            "_id": "5f24c14892cb756cba525e8e",
            "name": "Diego",
            "lastName": "Luna",
            "email": "diego_luna@gmail.com",
            "password": "$2b$10$qIfTTYy1V4thPUsi9VN0vOCtLmkkKG60A3o.bupAyH84D4IZmk9/q",
            "createdAt": "2020-08-01T01:11:36.590Z",
            "updatedAt": "2020-08-01T01:11:36.590Z",
            "__v": 0
        }
    ];

    return new Promise((resolve) => {
        resolve(users);
    });
}

function getUser(params) {
    const user = {
        "isActive": true,
        "_id": "5f1f788ca2eb1c0fbb83c7f6",
        "name": "Miguel Angel",
        "lastName": "Vicario",
        "email": "mvicario96@gmail.com",
        "password": "565613Ab",
        "createdAt": "2020-07-28T00:59:56.996Z",
        "updatedAt": "2020-07-28T01:16:55.029Z",
        "__v": 0
    };

    return new Promise((resolve, reject) => {
        if (params) {
            resolve(user);
        } else {
            reject(new Error("Mongo Error"))
        }
    });
}

function deleteUser(params) {
    const message = {
        "message": "Usuario Eliminado"
    };

    return new Promise((resolve, reject) => {
        if (params) {
            resolve(message);
        } else {
            reject(new Error("Mongo Error"))
        }
    });
}

Services.create = create;
Services.getUsers = getUsers;
Services.getUser = getUser;
Services.deleteUser = deleteUser;

module.exports = Services;