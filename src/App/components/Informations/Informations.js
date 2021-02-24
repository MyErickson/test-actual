
import React, { Component } from 'react';
import { Input } from 'antd';

import './Informations.scss';

class Home extends Component {

        state={
            firstName:"",
            birthday:"",
            lastName:"",
            lockRequest:false,
            id:undefined

        }

        componentDidMount(){
            const { id = 2 } = this.props.match.params
            
            this.setState({
                id
            })        
        }


    handleChangeState=(event)=>{
     
        const { name , value } = event.target
        this.setState({
            [name]:value
        })
        
    }

    handleSubmit=(event)=>{
       const { information_Action } = this.props
       const { firstName ,lastName , birthday , id } = this.state

       const data = {}
       data.first_Name = firstName
       data.last_Name = lastName
       data.birthday = birthday
       data.id = id

        if(event.keyCode === 13){
       
            console.log("envoyer")
            information_Action(data)
        }
    }

    render() {

        const { firstName , birthday , lastName} =this.state
        
        return(
            <div className="Information">
                <form className="Information-header" onKeyDown={(e)=>{this.handleSubmit(e)}} >
                    <Input placeholder="prénom" 
                        name="firstName"
                        value={firstName} 
                        onChange={(e)=>{this.handleChangeState(e)}}/>
                    <Input placeholder="nom" 
                        name="lastName"
                        value={lastName} 
                        onChange={(e)=>{this.handleChangeState(e)}}/>
                    <Input placeholder="date de naissance" 
                        name="birthday"
                        value={birthday} 
                        onChange={(e)=>{this.handleChangeState(e)}}/>
                    
                </form>
            </div>
        )}
}

export default Home ;
