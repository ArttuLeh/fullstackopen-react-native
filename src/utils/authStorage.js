import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    // Get the access token for the storage
    const accessToken = await AsyncStorage.getItem(this.namespace);
    console.log('getAuth', accessToken);
    return accessToken ? JSON.parse(accessToken) : [];
  }

  async setAccessToken(accessToken) {
    // Add the access token to the storage
    const token = accessToken.authenticate.accessToken;
    console.log('auth', token);
    await AsyncStorage.setItem(this.namespace, JSON.stringify(token));
  }

  async removeAccessToken() {
    // Remove the access token from the storage
    await AsyncStorage.removeItem(this.namespace);
  }
}

export default AuthStorage;
