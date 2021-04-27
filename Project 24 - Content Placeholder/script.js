const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile-img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData(){
	header.innerHTML = '<img src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>'
	title.innerHTML = 'Card Title'
	excerpt.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
	profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg"/>'
	name.innerHTML = 'John Doe'
	date.innerHTML = 'Mar 09, 2021'

	animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
	animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}