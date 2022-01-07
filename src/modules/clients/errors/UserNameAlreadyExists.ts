class UserNameAlreadyExists extends Error {
  constructor() {
    super("Username already exists");
  }
}

export { UserNameAlreadyExists };
