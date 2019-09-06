import React from 'react'
import { withStyles } from '@material-ui/styles';


const Styeles ={
    OverScroll:{
        // backgroundColor:'skyblue',
        // border:'0px',
        // borderRadius:'4px',
        // float:'right'
    },
    InpuChatButton: {
            padding: '10px 15px',
            backgroundColor: '#ffffff00',
            borderTop: '0px solid #ddd',
            borderBottomRightRadius: '0px',
            borderBottomLeftRadius: '0px',
            position: 'fixed',
            bottom: '5%', 
            right:'3px'   
        },
    

}

const ListData = (props) => {
const {classes} = props
    return (
        <div className={classes.InpuChatButton}>
        {/* <div> */}
            {
                props.listMsg.map( msg =>{
                    return <p style={{
                        backgroundColor:'skyblue',
                        padding:'inherit',
                        borderRadius:'40px',
                        textOverflow:'clip',
                        float:'right'}} 
                        key = { msg.key }>{ msg.message }</p>
                    // </button>
                }) 
            }
        </div>        
    )

}

// export default ListData;
export default withStyles(Styeles)(ListData);