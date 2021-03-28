const app = Vue.createApp({
    data() {
        return {
            Headshot: 'hs.jpg',
            Resume: "resume.PNG",
            titleMsg: "Hi, I'm Tristan Blus, a programming student with significant experience in Python, C++, C#, and Ruby.  I also know front end web development fundamentals, and am learning full stack development using Vue.js and python. ",
            contactEmail: "tblus@outlook.com",
            githubPage: "https://github.com/Tbluswritescode",
            linkedIn: "https://www.linkedin.com/in/tristan-blus-4b16ab8a/"
        }
    }
})

app.mount('#app')