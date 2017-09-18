var app = angular.module('app')

app.factory('configFactory', function() {
	var client = contentful.createClient({
 		space: 'yh02v6g6tsoi',
 	    accessToken: '79feada71b37fbf1ee5fbdcf83d82f7042460c0f1fcf07a336ce7d923a5a046c'
	});

	var config = undefined; 

	function _get(onFinish) {
		client.getEntries()
				.then(function(entries) {
					config = {
						tutors: [],
						benefits: [],
						partners: [],
						projectInfo: {
							name: '', 
							logoWhite: '', 
							videoSrc: '', 
							about: ''
						},
						socials: [],
						menuItems: [],
						events: []
					};

					entries.items.forEach(function(entry) {
						var type = entry.sys.contentType.sys.id

						if (type === 'tutor') 
							config.tutors.push({
								name: entry.fields.name,
								title: entry.fields.title,
								img: 'http:' + entry.fields.img.fields.file.url
							});
						else if (type === 'benefit')
							config.benefits.push({
								name: entry.fields.name, 
								descr: entry.fields.descr,
								icon: 'http:' + entry.fields.icon.fields.file.url
							}) 
						else if (type === 'partner')
							config.partners.push({
								img: 'http:' + entry.fields.logo.fields.file.url
							})
						else if (type === 'projectInfo') 
							config.projectInfo = {
								name: entry.fields.name, 
								logo: 'http:' + entry.fields.logoWhite.fields.file.url, 
								videoSrc: entry.fields.videoUrl, 
								about: entry.fields.about
							}
						else if (type === 'socialLink')
							config.socials.push({
								href: entry.fields.link, 
								icon: 'http:' + entry.fields.icon.fields.file.url
							})
						else if (type === 'contacts')
							config.contacts = entry.fields;
						else if (type === 'menuItem')
							config.menuItems.push({
								name: entry.fields.name,
								href: entry.fields.link
							})
						else if (type === 'event')
							config.events.push({
								title: entry.fields.title, 
								shortDescr: entry.fields.shortDescr, 
								longDescr: entry.fields.longDescr,
								startTime: entry.fields.startTime, 
								endTime: entry.fields.endTime,
								place: entry.fields.location,
								img: 'http:' + entry.fields.img.fields.file.url 
							})
					})

					onFinish(config);
				})
	}

	return {
		get: function(onFinish) {
			if (config === undefined) 
				_get(onFinish); 
			else
				onFinish(config);
		}
	}
})