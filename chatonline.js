let myChannel;
let chatClient = new Twilio.Chat.Client(token);
    chatClient.initialize().then(() => {
		return chatClient.getChannelByUniqueName('(Name of the place)');
		}).then((channel) => {
			return channel;
		}, () => {
		return chatClient.createChannel({
			uniqueName: '(Name of the place)',
			friendlyName: '(Name of the place) Chat'
		});
		}).then((channel) => {
			myChannel = channel;
			channel.join().then(function(channel) {
				console.log('First name' + ' Second name' + ' joined channel ' + channel.friendlyName);
			})
			channel.on('messageAdded', function(message) {
				myChannel.sendMessage($('#button').val());
				console.log(message.author + ": " + message.body);
			});
			
			myChannel.getMessages().then(function(messages) {
			var totalMessages = messages.length;
			for (i=0; i<messages.length; i++) {
				var message = messages[i];
				console.log('Author:' + message.author);
			}
			console.log('Total Messages:' + totalMessages);
		});
		});
		
		
    });
