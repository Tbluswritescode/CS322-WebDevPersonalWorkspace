<template>
    <div id = "resdiv">
        <div id = "newSect"><h3 class = "myIntros">{{resumeIntro}}</h3></div>
        <img id = "resume" :src="Resume"/>
        <p id="conc">{{conclusion}}</p>
    </div>
</template>
<script>
    export default {
        name: 'ResumeElements',
        props: {
            resumeIntro: String,
            Resume: String,
            conclusion: String
        }
    }
</script>