const videosList = [
	{
		video: '0812.mp4',
		title: 'Relief From Shoulder Pain',
	},
	{
		video: '0810.mp4',
		title: 'Relief From Back Pain',
	},
	{
		video: '0811.mp4',
		title: 'Relief From Knee Pain,
	},
	{
		video: '0809.mp4',
		title: 'Relief From Joint Pain',
	},
	{
		video: '0813.mp4',
		title: 'Relief From Neck Pain',
	},
	{
		video: '0814.mp4',
		title: 'Relief From  Pain',
	},
	{
		video: '0815.mp4',
		title: 'Relief From Hand Pain',
	},
	{
		video: '0809.mp4',
		title: 'Relief From Spine Pain',
	},
	{
		video: '0890.mp4',
		title: 'Relief From Ankle Pain',
	},
]

const categories = [...new Set(videosList.map((item) => { return item }))]
document.getElementById('videosList').innerHTML = categories.map((item) => {
	var { video, title, thumbnail } = item;
	return (
		`<div class="list active">
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
