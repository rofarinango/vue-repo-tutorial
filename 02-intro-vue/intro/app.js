const { createApp, ref } = Vue;

const app = createApp({
    // template: `
    // <h1>{{ message }}</h1>
    // <p>- {{ author }} </p>
    // `,

    setup() {
        console.log("Hola desde setup");
        const message = ref("Soy Batman");
        // const author
        // Bruce Wayne

        const author = ref("Bruce Wayne");

        const changeQuote = () => {
            message.value = "Hola, soy Goku";
            author.value = "Goku"
        }

        // setTimeout(()=>{
        //     message.value = "Soy Goku";
        //     author.value = "Goku"
        //     console.log("Esto se ha ejectuado");
            
        // }, 1000)

        return {
            message, 
            author,
            changeQuote,
        };
    }
});

app.mount("#myApp")