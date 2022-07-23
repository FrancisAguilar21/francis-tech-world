// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const name = 'Francis';
  res.status(200).json({ message: `Hi! My name is ${name}`, name })
}
