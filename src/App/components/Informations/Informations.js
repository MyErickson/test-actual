
import React, { Component } from 'react';
import { Input, message } from 'antd';

import './Informations.scss';

class Information extends Component {

     state={
        firstName:"",
        birthdayState:"",
        lastName:"",
        message:false
    }

    //function qui est appelée a chaque changment d'un input. Il change les valeur du state
    handleChangeState=(event)=>{
     
        const { name , value } = event.target
 
        this.setState({
            [name]:value
        }) 
    }

    //function qui est appelée apres chaque touch du keybord
    handleSubmit=(event)=>{
       const { information_Action } = this.props
       const { firstName ,lastName , birthdayState , id } = this.state

       const data = {}
       data.first_name = firstName
       data.last_name = lastName
       data.birthday = birthdayState
       data.id = id

       // si l'utilsateur press la touche "enter"
        if(event.keyCode === 13){

            information_Action(data)
            this.setState({
                message:true
            })

            setTimeout(()=>{
                this.setState({
                    message:false
                })
            },6000)
        }
    }

    render() {

        const { firstName ,  lastName ,message} =this.state
        
        return(
            <div className="Information">
                <p>
                    Appuyer sur la touche " Enter "pour valider votre modification
                </p>
                <form className="Information-header" onKeyDown={(e)=>{this.handleSubmit(e)}} >
                    <Input
            
                        className="Information-header-input" 
                        placeholder="prénom" 
                        name="firstName"
                        value={firstName} 
                        onChange={(e)=>{this.handleChangeState(e)}}/>
                    <Input 
                        className="Information-header-input" 
                        placeholder="nom" 
                        name="lastName"
                        value={lastName} 
                        onChange={(e)=>{this.handleChangeState(e)}}/>
                    <Input 
                        className="Information-header-input" 
                        placeholder="date de naissance"
                        type ="date"
                        name="birthday"
                        onChange={(e)=>{this.handleChangeState(e)}}/>
                
                {message && 
                    <p>
                        "Les données on bien etaint envoyée , mais reqres.in ne sauvegarde aucune modification en Base de données"
                    </p>
                }
                </form>
    
            </div>
        )}
}

export default  Information ;
