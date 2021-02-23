import User from '../models/user'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
  console.log(req.body)
  const { name, email, password } = req.body
  // validation
  if (!name) return res.status(400).send('Name is required')
  if (!password || password.length < 6)
    return res
      .status(400)
      .send('Password is required to be a min of 6 characters long')
  let userExist = await User.findOne({ email }).exec()
  if (userExist) return res.status(400).send('Email is taken')

  // register
  const user = new User(req.body)
  try {
    await user.save()
    console.log('User created', user)
    return res.json({ ok: true })
  } catch (err) {
    console.log('Failed to create user', err)
    return res.status(400).send('Error, try again.')
  }
}

// Login
export const login = async (req, res) => {
  const { email, password } = req.body

  try {
    let user = await User.findOne({ email }).exec()

    if (!user) res.status(400).send('User not found')
    // Compare pwd
    user.comparePassword(password, (err, match) => {
      console.log('Passwords did not match')
      if (!match || err) {
        return res.status(400).send('Wrong password')
      }
      let token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '7d'
      })
      res.json({
        token,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt
        }
      })
    })
  } catch (err) {
    console.log('Login error')
    res.status(400).send('Sign in Failed')
  }
}
