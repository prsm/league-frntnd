import api from '@utils/api';

export default async (req, res) => {
  const answer = await api.post(`/auth/login`, { code: req.query.code });

  const jwt = answer.data;
  console.log('jwt', jwt);
  res.redirect(`/?jwt=${jwt.accessToken}`);
};
