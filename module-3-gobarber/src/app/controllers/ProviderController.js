import User from '../models/Users';

class ProviderController {
  async index(req, res) {
    const providers = await User.findAll({
      where: { provider: true },
      attributes: ['id', 'name', 'email'],
    });

    return res.json(providers);
  }
}
export default new ProviderController();
