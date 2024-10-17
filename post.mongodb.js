use('chat_dev');

db.messages.insertMany([
    {
        content: '1 message',
        userId: new ObjectId('6710b302564405353a33f819'),
    },
    {
        content: '2 message',
        userId: new ObjectId('6710b307564405353a33f81b'),
    },
    ])