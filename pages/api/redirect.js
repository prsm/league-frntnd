export default async (req, res) => {
  const body = JSON.stringify({ code: req.query.code });
  const answer = await fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });
  console.log('answer', await answer.json());
  res.redirect('/');
};
