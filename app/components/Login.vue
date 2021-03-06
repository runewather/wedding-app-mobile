<template>
    <Page>
        <AppActionBar title="Wedding Store"/>
        <FlexboxLayout class="page">
            <StackLayout class="form">
                <GridLayout rows="auto, auto, auto">
                    <!-- LOGO IMAGE -->
                    <StackLayout row="0" class="input-field">
                         <Image src="~/assets/Logo.png" horizontalAlignment="center" stretch="none" />
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

                    <ActivityIndicator rowSpan="3" :busy="false"></ActivityIndicator>
                </GridLayout>

                <Button :text="'Login'" @tap="submit" class="btn btn-primary m-t-20"></Button>
                <Label @tap="goToSignUpPage" class="bold sign-up-label" text="Don’t have an account? Sign up"></Label>
            </StackLayout>            
        </FlexboxLayout>
    </Page>
</template>

<script>
    import 
    {emailIsValid, 
    passwordIsValid} 
    from '../utils/validate'

    import axios from 'axios'
    import SignUp from './SignUp'
    import AppActionBar from './AppActionBar'
    import Store from './Store'

    export default {
        components: {
            AppActionBar
        },
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            submit() {
               if(this.validate()) {
                this.login() 
               }           
            },
            validate() {                
                if(!emailIsValid(this.email)) {
                    return false
                }
                if(this.password.length < 5) {
                    alert('Password is too short')
                    return false
                }
                return true
            },
            goToSignUpPage() {
                this.$navigateTo(SignUp)
            },
            login() {
                axios.post('http://192.168.0.101:3000/api/v1/sessions', 
                { 'email': this.email, 'password': this.password })
                .then((response) => {  
                    this.$store.commit('updateEmail', response.data.email)
                    this.$store.commit('updateToken', response.data.authentication_token)
                    this.$store.commit('updateWallet', response.data.wallet)                     
                    this.$navigateTo(Store)                                   
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

    .sign-up-label {
        margin-top: 20;
        text-align: center;
    }

    .bold {
        color: #000000;
    }
</style>
