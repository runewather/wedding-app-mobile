<template>
    <Page actionBarHidden="true">
        <FlexboxLayout class="page">
            <StackLayout class="form">
                <Label class="header" text="Wedding Store"></Label>
                <GridLayout rows="auto, auto, auto, auto">
                    
                    <!-- EMAIL INPUT -->
                    <StackLayout row="1" class="input-field">
                        <TextField class="input" hint="Email" :isEnabled="!processing"
                            keyboardType="email" autocorrect="false"
                            autocapitalizationType="none"
                            maxLength='48'
                            v-model="email"
                            returnKeyType="next" @returnPress="focusPassword"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <!-- PASSWORD INPUT -->
                    <StackLayout row="2" class="input-field">
                        <TextField class="input" ref="password" :isEnabled="!processing"
                            hint="Password" secure="true"
                            maxLength='12'
                            v-model="password"
                            @returnPress="focusConfirmPassword"
                            ></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <ActivityIndicator rowSpan="3" :busy="false"></ActivityIndicator>
                </GridLayout>

                <Button :text="'Login'" @tap="submit" class="btn btn-primary m-t-20"></Button>
            </StackLayout>
        </FlexboxLayout>
    </Page>
</template>

<script>
    export default {
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
               this.validate()
            },
            validate() {                
                if(!this.nameIsValid(this.name)) {
                    return false
                }
                if(!this.emailIsValid(this.email)) {
                    return false
                }
                if(!this.passwordIsValid(this.password, this.confirmPassword)) {
                    return false
                }
                return true
            },
            nameIsValid(name){
                if(/^[a-zA-Z]*$/.test(name) && name !== '') {
                    return true
                }
                else {
                    alert('Name is incorrect')
                    return false
                }
            },
            emailIsValid(email) {
                if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email !== '') {
                    return true
                } 
                else {
                    alert('Email is not valid')
                    return false
                }                
            },
            passwordIsValid(pass, confPass) {
                if(pass === confPass && pass !== '') {
                    if(pass.length < 6) {
                        alert('Password is too short')
                        return false
                    }                    
                }
                else {
                    alert('Password is incorrect')
                }
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
        horizontal-align: center;
        color: #A8A8A8;
        font-size: 16;
    }

    .sign-up-label {
        margin-bottom: 20;
    }

    .bold {
        color: #000000;
    }
</style>
