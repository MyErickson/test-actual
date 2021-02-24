
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Home.scss';

class Home extends Component {

        state={
            firstName:"",
            birthday:""
        }

    componentDidMount(){
        const { user_Action } = this.props
        const { id = 2 } = this.props.match.params
        
        user_Action(id)
        
    }

    componentDidUpdate(prevProps){
         const { name , year } = this.props.info_User
       
        
         const { firstName,birthday } = this.state

        if(name !==  firstName || year !== birthday ){
            this.setState({
                firstName:name,
                birthday:year
            })
        }

    }

    goToPageInformation=()=>{


    }

    render() {

        const { firstName , birthday} =this.state
        
        return(
        <div className="Acceuil">
        <header className="Acceuil-header ">
            <p>
                {`Bonjour ${firstName} votre anniversaire est dans ${birthday} jours.`}
            </p>
            <NavLink
                className="Accueil-header-link"
                onClick={()=>this.goToPageInformation()}
                to={'/information'}
            
            >
                Si cela est incorrect vous pouvez modifier les informations sur votre page informations
            </NavLink>
        </header>
        </div>
        )}
    }

export default Home ;
