<template>
    <Page>
        <AppActionBar title="Wedding Store"/>
        <FlexboxLayout class="page">
            <StackLayout class="form">                
                <GridLayout rows="auto, auto, auto, auto, auto">                                   

                    <!-- NAME INPUT -->
                    <StackLayout row="0" class="input-field">
                        <TextField class="input" hint="Name"
                            keyboardType="email" autocorrect="true"
                            autocapitalizationType="words"
                            maxLength='26'
                            v-model="name"
                            returnKeyType="next"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <!-- EMAIL INPUT -->
                    <StackLayout row="1" class="input-field">
                        <TextField class="input" hint="Email"
                            keyboardType="email" autocorrect="false"
                            autocapitalizationType="none"
                            maxLength='48'
                            v-model="email"
                            returnKeyType="next"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <!-- PASSWORD INPUT -->
                    <StackLayout row="2" class="input-field">
                        <TextField class="input" ref="password"
                            hint="Password" secure="true"
                            maxLength='12'
                            v-model="password"                            
                            ></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <!-- CONFIRM PASSWORD INPUT -->
                    <StackLayout row="3" class="input-field">
                        <TextField class="input" ref="confirmPassword"
                            hint="Confirm password" secure="true"
                            maxLength='12'
                            v-model="confirmPassword"
                            returnKeyType="done"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <ActivityIndicator rowSpan="3" :busy="false"></ActivityIndicator>
                </GridLayout>

                <Button :text="'Sign Up'" @tap="submit" class="btn btn-primary m-t-20"></Button>
                <Label @tap="goToLoginPage" class="bold login-label" text="Do you have an account? Log in"></Label>
            </StackLayout>
        </FlexboxLayout>
    </Page>
</template>

<script>
    import 
    {nameIsValid, 
    emailIsValid, 
    passwordIsValid} 
    from '../utils/validate'

    import axios from 'axios'
    import Login from './Login'
    import Home from './Home'
    import AppActionBar from './AppActionBar'

    export default {
        components: {
            AppActionBar
        },
        data() {
            return {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        },
        methods: {
            submit() {               
               this.signUp()
            },
            validate() {                
                if(nameIsValid(this.name)) {
                    return false
                }
                if(emailIsValid(this.email)) {
                    return false
                }
                if(passwordIsValid(this.password, this.confirmPassword)) {
                    return false
                }
                return true
            },   
            goToLoginPage() {
                this.$navigateTo(Login);
            },
            signUp() {
                axios.post('http://192.168.0.101:3000/api/v1/sign_up', 
                { 'name': this.name, 'email': this.email, 'password': this.password })
                .then((response) => { 
                    this.$store.commit('updateEmail', response.data.email)
                    this.$store.commit('updateToken', response.data.authentication_token)
                    this.$store.commit('updateWallet', response.data.wallet)
                    this.$navigateTo(Home)                                   
                })
                .catch((error) => {
                    alert('Email or password is incorrect ' + error)
                })
            }         
        }
    }
</script>

<style scoped>
    .page {
        align-items: center;
        flex-direction: column;
    }

    .form {
        margin-left: 30;
        margin-right: 30;
        flex-grow: 2;
        vertical-align: middle;
    }

    .logo {
        margin-bottom: 12;
        height: 90;
        font-weight: bold;
    }

    .header {
        horizontal-align: center;
        font-size: 25;
        font-weight: 600;
        margin-bottom: 70;
        text-align: center;
        color: #D51A1A;
    }

    .input-field {
        margin-bottom: 25;
    }

    .input {
        font-size: 18;
        placeholder-color: #A8A8A8;
    }

    .input:disabled {
        background-color: white;
        opacity: 0.5;
    }

    .btn-primary {
        margin: 30 5 15 5;
    }

    .login-label {
        margin-top: 20;
        text-align: center;
    }

    .sign-up-label {
        margin-bottom: 20;
    }

    .bold {
        color: #000000;
    }
</style>
