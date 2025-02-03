import React, { useState } from "react";
import data from "../../data/profileData"
import "./userInfo.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faUser, faTicket, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

interface profileData{
    name: string,
    profile_pic: string
}

const profileInfo : profileData = {name: data.name, profile_pic: data.profile_pic }



export default function UserInfo(){
    
    const[showMenu, setShowMenu] = useState(false);

    return (
        <div id="profile-info">
            <div>
              <div id="user-id" style={{background: "grey", height: "30px", width:"30px", borderRadius:"50%" }}>{profileInfo.name.charAt(0).toUpperCase()}</div>
            </div>
            <div>
            <div id="dropdown-profile">
                <button id="profile-name" onClick={e => setShowMenu(!showMenu)}>{profileInfo.name} <FontAwesomeIcon icon={faCaretDown}/></button>
                { showMenu && (
                        <div id="dropdown-menu-profile">
                        <a> <FontAwesomeIcon icon={faUser}/> Meu Perfil </a>
                        <a> <FontAwesomeIcon icon={faTicket}/> Meus Ingressos </a>
                        <a> <FontAwesomeIcon icon={faArrowRightFromBracket}/> Logout </a>
                    </div>        
                )

                }
                       
            </div>
            </div>
        </div>
    );
}
