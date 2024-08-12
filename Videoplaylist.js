const videosList = [
	{
		video: '0812.mp4',
		title: 'Exercise-1',
		thumbnail: 'thumb1.jpg'
	},
	{
		video: '0810.mp4',
		title: 'Exercise-2',
		thumbnail: 'thumb2.jpg'
	},
	{
		video: '0811.mp4',
		title: 'Exercise-3',
		thumbnail: 'thumb3.jpg'
	},
	{
		video: '0809.mp4',
		title: 'Exercise-4',
		thumbnail: 'thumb4.jpg'
	},
	{
		video: '0813.mp4',
		title: 'Exercise-5',
		thumbnail: 'thumb5.jpg'
	},
	{
		video: '0814.mp4',
		title: 'Exercise-6',
		thumbnail: 'thumb6.jpg'
	},
	{
		video: '0815.mp4',
		title: 'Exercise-7',
		thumbnail: 'thumb7.jpg'
	},
	{
		video: '0809.mp4',
		title: 'Exercise-8',
		thumbnail: 'thumb8.jpg'
	},
	{
		video: '0890.mp4',
		title: 'Exercise-9',
		thumbnail: 'thumb9.jpg'
	},
]

const categories = [...new Set(videosList.map((item) => { return item }))]
document.getElementById('videosList').innerHTML = categories.map((item) => {
	var { video, title, thumbnail } = item;
	return (
		`<div class="list active">
		<img src=${thumbnail} class="list-thumbnail" alt="${title} thumbnail"/>
		<video src=${video} class="list-video"></video>
		<h3 class="list-title">${title}</h3>
		</div>`
		)
}).join('')

let videoList = document.querySelectorAll('.video-list-container .list');
videoList.forEach(remove => { remove.classList.remove('active') });
videoList.forEach(vid => {
	vid.onclick = () => {
		videoList.forEach(remove => { remove.classList.remove('active') });
		vid.classList.add('active');
		let src = vid.querySelector('.list-video').src;
		let title = vid.querySelector('.list-title').innerHTML;
		document.querySelector('.main-video-container .main-video').src = src;
		document.querySelector('.main-video-container .main-video').play();
		document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
	};
});
