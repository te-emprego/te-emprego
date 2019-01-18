class Token {
  constructor(options) {
    this.key = options.key || 'token';
    this.value = options.value || '';
    this.expiration = options.key || false;
  }
}

export default Token;
