
const express = require('express');
const { User } = require('../models')
const { sign } =  require('jsonwebtoken');
var cors = require('cors')

const generateToken = (user) => {
  const {fullName, email} = user;
  return sign(
    {fullName, email},
    'senhaSegura',
    { algorithm: 'HS256', expiresIn: '10m'}
  )
}

const app = express();
const PORT = 3333
app.use(cors());
app.use(express.json())

app.post('/', async(req, res) => {
  const {email, password } =  req.body;
  let user;
  try {
    user = await User.findOne( {where: {email}})    
  } catch (e) {    
    return res.status(400).json({message: 'entre com email e/ou senha'})
  }
  if (user === null) return res.status(404).json({message: 'user not found'})
  if (user.password !== password) return res.status(403).json({message: 'incorrect password'})

  const token = generateToken({fullName: user.fullName, email: user.email});
  return res.status(200).json({token, fullName: user.fullName})
})

app.post('/register', async (req, res) => {
  const { fullName, email, password } = req.body; 

  let user

  try {
    if(email === '') return res.status(400).json({message: 'Email input must be not empty' })
    user = await User.findOne( {where: {email}}) 
  } catch (e) {
    return res.status(400).json({ message: 'entre com campo email' });
  }
  if(user) return res.status(400).json({message: 'email already exists'})
  if(password === undefined || fullName === undefined) return res.status(400).json({message: 'Name and/or password required'})
  const result = await User.create({password, email, fullName});
  const token = generateToken({fullName: result.fullName, email: result.email})
  return res.status(201).json({fullname: result.fullName, token})
  
})
app.listen(PORT, () => console.log('Online'))
