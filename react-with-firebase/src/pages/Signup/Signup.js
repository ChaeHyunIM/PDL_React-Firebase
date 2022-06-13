import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const theme = createTheme();

const Signup = () => {
    const [signupInput, setSignupInput] = useState({
        email: '',
        pw: ''
    })

    const {email, pw} = signupInput;
    // console.log(signupInput);

    const handleSignupInput = e => {
        const { name, value } = e.target;
        setSignupInput({
            ...signupInput,
            [name]: value,
        });
    };
    const [value, setValue] = useState(null);

    const auth = getAuth();
    const signupEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('user:' , user);
            alert('Signup Success');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('errorCode:' , errorCode);
            console.log('errorMessage:' , errorMessage);

        });

    const clickButton = e => {
        e.preventDefault();
        signupEmail(email, pw).then((res) => {
            console.log(res);
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onChange={handleSignupInput} onSubmit={handleSignupInput} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            {/*<Grid item xs={12}>*/}
                            {/*    <TextField*/}
                            {/*        autoComplete="given-name"*/}
                            {/*        name="name"*/}
                            {/*        required*/}
                            {/*        fullWidth*/}
                            {/*        id="name"*/}
                            {/*        label="Name"*/}
                            {/*        autoFocus*/}
                            {/*    />*/}
                            {/*</Grid>*/}
                            {/*<Grid item xs={12}>*/}
                            {/*    <LocalizationProvider dateAdapter={AdapterDateFns}>*/}
                            {/*        <DatePicker*/}
                            {/*            label="Birth"*/}
                            {/*            value={value}*/}
                            {/*            onChange={(newValue) => {*/}
                            {/*                setValue(newValue);*/}
                            {/*            }}*/}
                            {/*            renderInput={(params) => <TextField required fullWidth {...params} />}*/}
                            {/*        />*/}
                            {/*    </LocalizationProvider>*/}
                            {/*</Grid>*/}
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="pw"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={clickButton}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Signup;
