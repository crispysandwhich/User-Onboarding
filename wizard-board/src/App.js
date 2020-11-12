import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import schema from './Validation/yup'

import Form from './components/Form'
import User from './components/user'


function App() {

  const initialUser = {
    name: '',
    email: '',
    password: '',
    terms: false
  }

  const initialFormError = {
    name: '',
    email: '',
    password: '',
    terms: ''
  }

  const intialFriends = [];

  const [user, setUser] = useState(initialUser)
  const [disabled, setDisabled] = useState(true)
  const [formError, setFormError] =  useState(initialFormError)
  const [friends, setFriends] = useState(intialFriends)

  const getUsers = async () => {
    await axios.get('https://jsonbox.io/box_898551e6999465daaa3b')
        .then(res => {
          setFriends(res.data)
        })
        .catch(e => console.log(e))
  }

  const postNewUser = async (newUser) => {
    await axios.post('https://jsonbox.io/box_898551e6999465daaa3b',newUser)
    .then(res => {
      setUser([...user, res.data])
    })
    .catch(e => {
      console.log(e)
    })
    .finally(() => {
      setUser(initialUser)
    })
  }

  const validate = (name ,value) =>{
    yup
      .reach(schema, name)
      .validate(value)
      .then(valid => {
        setFormError({
          ...formError,
          [name]: ''
        })
      })
      .catch( err => {
        setFormError({
          ...formError,
          [name]: err.errors[0]
        })
      })
  }


  const onChange = (name, value) => {
    validate(name, value)
    setUser({
      ...user,
      [name]: value
    })
  }

  const onSubmit = () => {
    const newUser = {
      name: user.name.trim(),
      email: user.email.trim(),
      password: user.password.trim(),
      terms: ['terms'].filter(x => user[x] === true)
    }
    postNewUser(newUser)
    
  }

  useEffect(() => {
    getUsers()
  },[])

  useEffect(() => {
    schema.isValid(user).then(valid => {
      setDisabled(!valid)
    })
  },[user])



  return (
    <div>
      <h1>kill me</h1>
      <Form  user={user} change={onChange} submit={onSubmit} disabled={disabled} formError={formError}/>

      {
        friends.map(friend => {
          return(
              <User details={friend} />
          )
        })
      }

    </div>
  );
}

export default App;
