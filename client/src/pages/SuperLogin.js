import React, {useState, useEffect} from 'react'
import useStyles from './styles'
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@mui/material';

import Login from './MainLoginPage'
import UserType from './UserType'


const steps = ['Select User Type', 'Login'];

const Checkout = () => {
    const classes = useStyles()
    const [userType, setUserType]= useState("Patient")
    const [activeStep, setActiveStep] = useState(0);

    
    const handlePrevPage = () => {
        setActiveStep(0);
    }

    const handleNextPage = () => {
        setActiveStep(1);
    }

    const handleUserSelect = (newUser)=>{
        console.log(newUser)
        setUserType(newUser);
        handleNextPage()
    }


        const Form = ()=> {
            switch (activeStep) {
                case 0:
                    return <UserType handleUserSelect={handleUserSelect} />
                case 1:
                    return <Login  userType={userType}/>
            }
        }


    return (
        <>
        <CssBaseline />
        <main className={classes.layout}>
            <Paper className={classes.paper}>
            <Typography variant="h4" align="center">Checkout</Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
            <Form />
            <div className="flex flex-wrap justify-center">

            {(activeStep>0) && <button className="bg-blue-500 py-2 px-3 m-3 hover:bg-blue-700 rounded" onClick={handlePrevPage}>Back</button>}
            {(activeStep<1) && <button className="bg-blue-500 py-2 px-3 m-3 hover:bg-blue-700 rounded" onClick={handleNextPage}>Next</button>}
            </div>

            </Paper>
        </main>
        </>
    )
}

export default Checkout