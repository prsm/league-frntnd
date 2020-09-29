export default async (req, res) => {
  const body = JSON.stringify({ code: req.query.code });
  const answer = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });
  console.log('answer', await answer.json());
  res.redirect('/danke');
};
