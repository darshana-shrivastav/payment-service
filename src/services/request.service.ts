class RequestService {
  private request = require("request-promise");

  public async httpRequest(payload: any) {
    let success = null;
    try {
      success = await this.request(payload);
    } catch(error) {
      throw error;
    }
    return success;
  };
}

export default new RequestService();