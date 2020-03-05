const requests = [
    {
        id: 1,
        bloodType: "B+",
        name: "Precious Omonzejele",
        age: 25,
        gender: "Male",
        distance: 28,
        duration: 12,
        status: "URGENT",
    },
    {
        id: 2,
        bloodType: "A+",
        name: "Fuad Ajiboye",
        age: 23,
        gender: "Male",
        distance: 20,
        duration: 16,
        status: "URGENT",
    },
    {
        id: 3,
        bloodType: "O+",
        name: "Azuka Odiah",
        age: 12,
        gender: "Male",
        distance: 18,
        duration: 22,
        status: "URGENT",
    },
    {
        id: 4,
        bloodType: "O-",
        name: "David Trove",
        age: 19,
        gender: "Male",
        distance: 13.2,
        duration: 12,
        status: "URGENT",
    },
];

const chart = [
    1.1,
    3,
    1.5,
    2.3,
    3.2,
    7,
    8.2,
    1.2,
    2,
    1.2,
    8,
    3.8,
    5.8,
    3.9,
    5.1,
    0.1,
    6
];

const user = {
    avatar: require('./assets/avatar.png'),
};

export {requests, chart, user}