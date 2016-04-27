module.exports.mail = {
  type: 'smtp',
  config: 
  {
    from: 'no-reply@ghaiklor.com',
    provider: {
      port: 25, // The port to connect to
      host: 'localhost', // The hostname to connect to
      secure: false, // Defines if the connection should use SSL
      auth: { // Defines authentication data
        user: '', // Username
        pass: '', // Password
        xoauth2: '' // OAuth2 access token
      },
      ignoreTLS: false, // Turns off STARTTLS support if true
      name: '', // Options hostname of the client
      localAddress: '', // Local interface to bind to for network connections
      connectionTimeout: 2000, // How many ms to wait for the connection to establish
      greetingTimeout: 2000, // How many ms to wait for the greeting after connection
      socketTimeout: 2000, // How many ms of inactivity to allow
      debug: false, // If true, the connection emits all traffic between client and server as `log` events
      authMethod: 'PLAIN', // Defines preferred authentication method
      tls: {} // Defines additional options to be passed to the socket constructor
    }
  }
};
