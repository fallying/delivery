class ClientForbidden extends Error {
  constructor() {
    super("Client do not has access. (Invalid username or password)");
  }
}

export { ClientForbidden };
