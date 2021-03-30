<template>
    <div class = "container" id="experience">
        <h3 class = "myIntros">{{Introduction}}</h3>
        <div class = "links">
            <div class = "linklayout"><img class = "linkimg" :src="cwimg"/><a class = "linktext" :href="cwlink">Codewars</a></div>
            <div class = "linklayout" id = "right"><img class = "linkimg" :src="unimg"/><a class = "linktext" :href="unlink">Unity Play</a></div>
            <div class = "linklayout" id = "center"><img class = "linkimg" :src="ghimg"/><a class = "linktext" :href="ghlink">Git Hub</a></div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Eyegrabber',
    props: {
        cwimg: String,
        unimg: String,
        ghimg: String,
        cwlink: String,
        unlink: String,
        ghlink: String, 
        Introduction: String
    }
}
</script>