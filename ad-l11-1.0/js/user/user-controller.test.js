const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

test('add a new user not in the list', () => {
    let user = new User(2001, "Eric", "eric@generation.org");

    expect(userController.getUsers()).not.toContain(user);

    userController.add(user);

    expect(userController.getUsers()).toContain(user);
});

test('remove a user not in the list', () => {
    let user = new User(2002, "Carlos", "carlos@generation.org");

    userController.remove(user);

    expect(userController.getUsers()).not.toContain(user);
});

test('find user by existing email', () => {
    let user = new User(2003, "Ana", "ana@generation.org");

    userController.add(user);

    expect(userController.findByEmail("ana@generation.org")).toBe(user);
});

test('find user by non-existing email', () => {
    expect(userController.findByEmail("noexiste@generation.org")).toBeUndefined();
});

test('find user by existing ID', () => {
    let user = new User(2004, "Luis", "luis@generation.org");

    userController.add(user);

    expect(userController.findById(2004)).toBe(user);
});

test('find user by non-existing ID', () => {
    expect(userController.findById(9999)).toBeUndefined();
});