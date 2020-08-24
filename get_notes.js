const client = require('./client')
client.list({},(error,notes)=>{
  if(!error){
    console.log('Successfully fetch list of notes\n', notes)
  } else {
    console.error(error)
  }
})