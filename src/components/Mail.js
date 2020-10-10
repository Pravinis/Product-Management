import './styles.css'
import React, { useContext } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'
//import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import Layout from './layout'
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'
//class ContactForm extends Component {
const ContactForm = (props) => {
  const {viewItem,setviewItem} = useContext(TaskListContext);
  const items = props.products;
  //console.log(items[0].pname + " " + props.products[0].pname)
  // state = {
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: '',
  // }
  const { name, email, subject, message } = React.useState('')
  const mailhtml = props.string;
  const handleSubmit = (e) => {
    e.preventDefault()
    
    let templateParams = {
      from_name: email,
      to_name: '<YOUR_EMAIL>',
      subject: subject,
      message_html: '<h1>hello<h2>',
    }
    emailjs.send(
      'Gmaiil',
      'listtemplate',
      templateParams,
      'user_CG0nAWNpatqH5SX3MeCTA'
    )
    //this.resetForm()
  }
  // resetForm() {
  //   this.setState({
  //     name: '',
  //     email: '',
  //     subject: '',
  //     message: '',
  //   })
  // }
  const handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
   }
//  render() {
    return (
      <>
        <Layout>
          {/* <h1 className="p-heading1">Get in Touch</h1>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
            </FormGroup>
            <FormGroup controlId="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </FormGroup>
            <FormGroup controlId="formBasicSubject">
              <Label className="text-muted">Subject</Label>
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
            </FormGroup>
            <FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup> */}
            <form onSubmit={handleSubmit} className="form">
      <label> List: </label>{' '}
      <input
        type="textarea"
        placeholder="Product Id..."
        value={props.string}
        //onChange={handleSubmit}
        //required
        className="task-primary"
      ></input>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            </form>
          {/* </Form> */}
        </Layout>
      </>
    )
  }
//}

export default function Mail() {
  const { removeTask, findItem, viewUser } = useContext(TaskListContext)
  const { tasks } = useContext(TaskListContext)
  //const { tasks } = useContext(TaskListContext)
  const Task = ({ task }) => {}
  const task_data = tasks.map((task) => {
    return <Task task={task} key={task.id} />
  })
  //console.log(task_data.length)

  const items = []

  var string = "Product-ID |Barcode |PName |Category |Price ";
 
  for (const [index, value] of task_data.entries()) {
    items.push(task_data[index].props.task)
    string = string +" "+ items[index].title +" | "+ items[index].barcode +" | "+ items[index].pname +" | "+
     items[index].pname +items[index].category 
    +" | "+ items[index].price 
  }; 
  console.log("string" + string)
 

  return (
    <div className="App">
      <ContactForm
        products={items}
        string={string}
      />
    </div>
  )
}

//export default ContactForm
