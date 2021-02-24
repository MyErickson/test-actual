
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment'

import './Home.scss';

class Home extends Component {

        state={
            firstName:"",
            lastName:"",
            birthdayState:"",
            dayRemaining:" ?? "
        }

    componentDidMount(){
        const { user_Action } = this.props
        const { id = 2 } = this.props.match.params
        
        user_Action(id)        
    }

    componentDidUpdate(prevProps){
         const { first_name , last_name ,birthday = "1993-10-16"} = this.props.info_User
       
         const { firstName,lastName, birthdayState } = this.state
       
        if(first_name !==  firstName || last_name !== lastName || birthday !== birthdayState ){
        
            let dayRemaining = this.dateBirdthday(birthday)
      
            this.setState({
                firstName:first_name,
                lastName:last_name,
                birthdayState:birthday,
                dayRemaining
            })
        }
    }

    
    dateBirdthday =( birthday)=>{
        let split = birthday.split('-')
        split[0] = "2021"

       let date = split.join()
       let date1  = moment(date)
       let date2  = moment().startOf('day')
  
       return    Math.round(moment.duration( date1 - date2 ).asDays())
  
    }



    render() {

        const { firstName , lastName , dayRemaining} =this.state
        
        return(
            <div className="Acceuil">
                <header className="Acceuil-header ">
                    <p>
                        {`Bonjour ${firstName +' '+ lastName} votre anniversaire est dans ${dayRemaining} jours.`}
                    </p>
                    <NavLink
                        className="Accueil-header-link"
                        to={'/informations'}
                    
                    >
                        Si cela est incorrect vous pouvez modifier les informations sur votre page informations
                    </NavLink>
                </header>
            </div>
        )}
}

export default Home ;
