
import React, { Component } from 'react';
import { Input} from 'antd';

import './Informations.scss';


class Information extends Component {

     state={
        firstName:"",
        birthdayState:"",
        lastName:"",
        message:false,
        id:''
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
       const { information_Action  } = this.props
       const { firstName ,lastName , birthdayState  } = this.state
       const { first_name , last_name , birthday ="1993-03-07" , id } = this.props.info_User

       const data = {}
       data.first_name = firstName ? firstName : first_name
       data.last_name = lastName ? lastName : last_name
       data.birthday = birthdayState ? birthdayState : birthday
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
                <div className="Information-header"  >
                    <form className="Information-header-form" onKeyDown={(e)=>{this.handleSubmit(e)}}>
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
                    
              
                    </form> 
                    {message && 
                    <div className='Information-header-p'>
                        
                            "Les données on bien etaint envoyée(voir console.log) , mais reqres.in ne sauvegarde aucune modification en Base de données"
                    
                    </div>
                    }
                
                </div>
    
            </div>
        )}
}

export default  Information ;
