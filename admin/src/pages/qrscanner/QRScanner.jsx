import {} from '@material-ui/core';
import React from 'react';
import {Container, Card, CardContent, makeStyles, Grid, TextField, Button} from '@material-ui/core'

export default function QRScanner() {
    const classes = useStyles();
  return (
    <Container className={classes.container}>
        <Card>
            <h2 className={classes.title}>Generate and Scan QR code</h2>
            <CardContent>
                <Grid item xl={4} lg={4} md={6} sm={12} xs={12}></Grid>
                <Grid item xl={4} lg={4} md={6} sm={12} xs={12}></Grid>
                <Grid item xl={4} lg={4} md={6} sm={12} xs={12}></Grid>

            </CardContent>
        </Card>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 10
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
}));
