
const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: [],

        }
    },
    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(
                reply => {
                    this.emails = reply.data.response;
                }
            );

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(
                reply => {
                    this.emails += reply.data.response;

                }
            );

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(
                reply => {
                    this.emails += reply.data.response;
                }
            );
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(
                reply => {
                    this.emails += reply.data.response;
                }
            );

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(
                reply => {
                    this.emails += reply.data.response;
                }
            );

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(
                reply => {
                    this.emails += reply.data.response;
                }
            );
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(
                reply => {
                    this.emails += reply.data.response;
                }
            );

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(
                reply => {
                    this.emails += reply.data.response;
                }
            );

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(
                reply => {
                    this.emails += reply.data.response;
                }
            );
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(
                reply => {
                    this.emails += reply.data.response;
                    console.log(this.emails);
                }
            );
    }
}).mount('#app')