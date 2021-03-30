<template>
    <div class = "container" id="eyegrabber">
        <h1 class = "mytitle" id = "lead">{{opener}}</h1>
        <h1 class = "mytitle">{{titleMsg}}</h1>
        <img id = "headshot" :src="Headshot"/>
    </div>
</template>

<script>

export default {
    name: 'Eyegrabber',
    props: {
        opener: String,
        titleMsg: String,
        Headshot: String
    }
}
</script>