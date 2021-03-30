<template>
<div class="container">
    <Eyegrabber :opener='opener' :titleMsg = "titleMsg" :Headshot = "Headshot"/>
    <Experience :Introduction="Introduction" :cwimg = "cwimg" :unimg = "unimg" :ghimg = "ghimg" :cwlink = "codewars" :unlink = "unity" :ghlink = "github"/>
    <ResumeElements :resumeIntro="resumeIntro" :Resume="Resume" :conclusion="conclusion"/>
    <div class = "footer">
        <a class = "linktext" :href ="linkedIn">LinkedIn</a>
    </div>
</div>
</template>
<script>

import Eyegrabber from './components/Eyegrabber'
import Experience from './components/Experience'
import ResumeElements from './components/ResumeElements'


export default{
    name: 'App',
    components: {
        Eyegrabber, 
        Experience, 
        ResumeElements
    },
    data() {
        return {
            Headshot: "https://user-images.githubusercontent.com/71510797/112917605-a02b8e00-90c8-11eb-95c9-19a95e17e53a.jpg",
            Resume: "https://user-images.githubusercontent.com/71510797/112918707-26e16a80-90cb-11eb-818d-bcedaba424ea.PNG",
            opener: "Hi, I'm Tristan Blus! Welcome to my page!",
            titleMsg: "Programming student with significant experience in Python, C++, C#, and Ruby.  I also know front end web development fundamentals, and am learning full stack development using Vue.js and python. ",
            Introduction: "I am an aspriring software developer and a Junior at Knox College, pursuing a Bachelors of Science in Computer Science.  In addition to my studies, I have helped build multiple websites through squarespace and wordpress.  In school I have built a few very simple projects using unity, and have accumulated a significant portion of code on GitHub. I also have more than five years of experience as a theatrical lighting technician, lighting board operator, and scenic carpenter.  Feel free to investigate my programming work on...",
            codewars: "https://www.codewars.com/users/tblus01",
            cwimg: "https://user-images.githubusercontent.com/71510797/112917945-58f1cd00-90c9-11eb-90f8-a8a4dfa391be.png",
            unity: "https://play.unity.com/u/tristan-blus" ,
            unimg: "https://user-images.githubusercontent.com/71510797/112918013-89d20200-90c9-11eb-864a-00a379dd8d08.png",
            contactEmail: "tblus@outlook.com",
            github: "https://github.com/Tbluswritescode",
            ghimg: "https://user-images.githubusercontent.com/71510797/112917992-7a52b900-90c9-11eb-8f09-84896bf181b7.png",
            linkedIn: "https://www.linkedin.com/in/tristan-blus-4b16ab8a/",
            resumeIntro: "Alternately, if you are interested in my working history in theatre technology, educational background and achievements, or volunteer experiences I've had you can find my resume below.",
            conclusion: "More detailed resume information can be provided as requested. Feel free to contact me at tblus@outlook.com"

        }
    }

}
</script>
<style>
/* Colors: 
	Blue: 233D4D;
	Orange: FEF72D;
	Gold: FCCA46;
	Light Green: A1C181;
	Dark Green: 619B8A;
*/

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
  }
  
  html,
  body {
	font-family: Arial, Helvetica, sans-serif;
  }
  
  #app {
	width: 100%;
	height: 100vh;
	margin: 0px;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 15px;
  }
  .mytitle{
	  display: block;
	  text-align: left;
	  position: relative;
	  top: 40%;
	  color: #FE7F2D;
	  left: 15%;
	  max-width: 50%;
	  font-size: 1.75rem;

  }
  #lead{
	  font-size: 3.75rem;
	  color: #FCCA46;
  }
  .container{
	  display: block;
	  width: 100%;
  }

  h1,
  h3 {
	margin-bottom: 1rem;
	font-weight: normal;
	display: block;
  }
  
  #headshot {
	border-radius: 30%;
	max-height: 700px;
	max-width: 28%;
	border: 5px #333 solid;
	margin-bottom: 1rem;
	position: absolute;
	right: 5%;
	top:10%;
	vertical-align: center;
	display: inline-block;
  }
  #experience {
    position: absolute;
	padding: 50px;
	height: 1200px;
    top: 800px;

  }
  #resdiv{
	position: relative;
	width: 100%;
	background-color: #233D4d;
	top: 2000px;
	padding: 30px;
	padding-top: 0px;
	margin-top: 150px;
	color:#ddddFF;
  }
  #resdiv h3{
	color:#ddddFF;
	padding: 10px;
  }
  #resume{
	position: relative;
	display: block;
	margin: auto;
	margin-top: 55px;
  }
  
  #eyegrabber {
    position: absolute;
	height: 800px;
    top: 0;
    display: block;
	background-color: #233D4d;
	margin-bottom: 50px;
	border-bottom: 30px #FCCA46 solid;
  }
  .myIntros{
	top: 40%;
	color: #050505;
	font-size: 2em;
	max-width: 70%;
	margin:auto;
	margin-top: 35px;
  }

  .links{
	  margin-top: 150px;
  }
  .linklayout{
	width: 28%;
	margin-left: 12%;
	margin-top: 20px;
	margin-right: 20px;
	padding: auto;
	border-radius: 15%;
	font-size: 3em;
	height: 125px;
	background-color: #FCCA46;
	display: inline-block;
	border: 3px #233D4d solid;
  }
  .linkimg{
	  height: 100px;
	  width: 100px;
	  position: relative;
	  left: -14%;
	  top: 10px;

  }

  .linktext{
	  margin: 10px;
	  text-decoration: none;
	  color: #233D4d;
  }
  #right{
	  margin: auto;
	  margin-right: 12%;

  }
  #newSect{
	background-color: #FCCA46;
	height: 250px;
	width: 103%;
	padding: 5px;
    margin-left:-28px;
}
  #newSect h3{
	  color: black;
  }
  #conc {
      margin: 35px;
	  display: block;
	  height: 100px;
	  color: #FCCA46;
	  font-size: 35px;


  }
  .footer{
	  display: block;
	  position: relative;
	  top: 2000px;
	  width: 100%;
	  height: 200px;
	  padding-top: 50px;
	  text-align: left;
	  background-color: #FCCA46;
  }
  .footer a{
	  font-size: 30px;
  }
  </style>