export const payload = { name: 'John Doe' };

export default function handler(req, res) {
  res.status(200).json(payload)
}